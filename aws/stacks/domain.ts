import * as CloudFront from '@aws-cdk/aws-cloudfront'
import * as S3 from '@aws-cdk/aws-s3'
import * as SSM from '@aws-cdk/aws-ssm'
import * as CDK from '@aws-cdk/core'
import * as acm from '@aws-cdk/aws-certificatemanager';
import * as route53 from '@aws-cdk/aws-route53';
import { config } from '../../config'

import { getParam } from '../lib/helpers'
import { ViewerCertificate } from '@aws-cdk/aws-cloudfront';

export interface DomainProps extends CDK.StackProps {
  name: string
}

type Nullable<T> = T | null;

export class DomainStack extends CDK.Stack {
  constructor(app: CDK.App, id: string, props: DomainProps) {
    super(app, id, props)

    const apiID = getParam(this, `/${props.name}/APIGateway/ApiId`)
    const apiDomainName = `${apiID}.execute-api.${this.region}.amazonaws.com`

    const assetsBucket = S3.Bucket.fromBucketAttributes(this, 'AssetsBucket', {
      bucketName: getParam(this, `/${props.name}/S3/Assets/Name`),
      bucketDomainName: getParam(this, `/${props.name}/S3/Assets/DomainName`),
    })

    const photoshaHostedZone = new route53.HostedZone(this, 'hosted-zone', {
      zoneName: 'photosha.ch'
    });


    const distribution = new CloudFront.CloudFrontWebDistribution(this, 'CDN', {
      httpVersion: CloudFront.HttpVersion.HTTP2,
      priceClass: CloudFront.PriceClass.PRICE_CLASS_100,
      viewerProtocolPolicy: CloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      defaultRootObject: '/',
      viewerCertificate: this.getViewerCertificate(),
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: assetsBucket,
          },
          behaviors: [
            {
              allowedMethods: CloudFront.CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
              compress: true,
              pathPattern: '/*.*',
              forwardedValues: {
                queryString: false,
                cookies: { forward: 'none' },
              },
            },
          ],
        },
        {
          originPath: '/prod',
          customOriginSource: {
            domainName: apiDomainName,
            originProtocolPolicy: CloudFront.OriginProtocolPolicy.HTTPS_ONLY,
          },
          behaviors: [
            {
              allowedMethods: CloudFront.CloudFrontAllowedMethods.ALL,
              compress: true,
              isDefaultBehavior: true,
              forwardedValues: {
                queryString: true,
                cookies: { forward: 'all' },
              },
            },
          ],
        },
      ],
    })

    new SSM.StringParameter(this, 'SSMCloudFrontDomainName', {
      description: 'CloudFront DomainName',
      parameterName: `/${props.name}/CloudFront/DomainName`,
      stringValue: distribution.domainName,
    })

    new SSM.StringParameter(this, 'SSMCloudFrontDistributionID', {
      description: 'CloudFront DistributionID',
      parameterName: `/${props.name}/CloudFront/DistributionID`,
      stringValue: distribution.distributionId,
    })
  }

  getViewerCertificate(): ViewerCertificate | undefined {
    if (config.certificateArn) {
      const certificate = acm.Certificate.fromCertificateArn(this, 'manual-certificate-arn', config.certificateArn);
      var manualViewerCertificate: ViewerCertificate;

      manualViewerCertificate = {
        aliases: ['ssr.photosha.ch'],
        props: {
          acmCertificateArn: certificate.certificateArn,
          cloudFrontDefaultCertificate: false
        }
      }

      return manualViewerCertificate;
    }
    
    return undefined;
  
    // crateing the certificate doesn't work beacause of the bug...
    // https://github.com/aws/aws-cdk/issues/1312
    // const certificate = new acm.DnsValidatedCertificate(this, 'CrossRegionCertificate', {
    //   domainName: 'photosha.ch',
    //   hostedZone: photoshaHostedZone,
    //   subjectAlternativeNames: ['ssr.photosha.ch'],
    //   region: 'us-east-1'
    // });
  }
}