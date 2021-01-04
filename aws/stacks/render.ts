import * as APIGateway from '@aws-cdk/aws-apigateway'
import * as Lambda from '@aws-cdk/aws-lambda'
import * as SSM from '@aws-cdk/aws-ssm'
import * as CDK from '@aws-cdk/core'

export interface RenderProps extends CDK.StackProps {
  name: string
}

export class RenderStack extends CDK.Stack {
  public readonly code: Lambda.CfnParametersCode

  constructor(app: CDK.App, id: string, props: RenderProps) {
    super(app, id, props)

    this.code = Lambda.Code.cfnParameters({
      bucketNameParam: new CDK.CfnParameter(this, 'CodeBucketName'),
      objectKeyParam: new CDK.CfnParameter(this, 'CodeBucketObjectKey'),
    })

    const render = new Lambda.Function(this, 'Render', {
      code: this.code,
      handler: 'server/handler/lambda.run',
      runtime: Lambda.Runtime.NODEJS_12_X,
      memorySize: 1024,
      timeout: CDK.Duration.seconds(3),
    })

    const api = new APIGateway.RestApi(this, 'API')
    const integration = new APIGateway.LambdaIntegration(render)

    const root = api.root
    const path = api.root.addResource('{proxy+}')

    root.addMethod('ANY', integration)
    path.addMethod('ANY', integration)

    new SSM.StringParameter(this, 'SSMAPIGatewayRestIs', {
      description: 'API Gateway ID',
      parameterName: `/${props.name}/APIGateway/ApiId`,
      stringValue: api.restApiId,
    })
  }
}
