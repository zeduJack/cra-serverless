import React from 'react';
import { Link } from 'react-router-dom';

import LabelImage from '../common/LabelImage';

import { makeStyles } from '@material-ui/core/styles';
import { Portfolio } from '../../portfolio';

const useStyles = makeStyles(() => ({
    sidesContainer: {
        display: 'flex'
    }, 
    containerItem: {
        flexBasis: '100%'
    }
}));

type Props = {
    items: Portfolio[],
    gutter: number;
}

interface LeftRightType extends Portfolio {
    isLeft: boolean;
}

const LeftRightPortfolio = ({items, gutter}: Props) => {
    const classes = useStyles();

    let leftHeight = 0;
    let rightHeith = 0;

    const leftRightPortfolioItems = items.map(i => i as LeftRightType);

    leftRightPortfolioItems.forEach(item  => {
        if (leftHeight <= rightHeith) {
            leftHeight = leftHeight + item.items[0].medium.h + gutter;
            item.isLeft = true;
        } else {
            rightHeith = rightHeith + item.items[0].medium.h + gutter;
            item.isLeft = false;
        }
    });

    return (
        <React.Fragment>
            <div className={classes.sidesContainer}>
                <div style={{ paddingRight: gutter / 2 }} className={classes.containerItem}>

                    {
                        leftRightPortfolioItems.map((item, i) => {
                            if (item.isLeft) {
                                return (
                                    <Link to={"/portfolio/" + item.route} key={i}>
                                        <LabelImage marginBottom={gutter} label={item.header} alt={item.header} src={item.items[0].small.src}></LabelImage>
                                    </Link>
                                )
                            }
                            return "";
                        })
                    }
                </div>
                <div style={{ paddingLeft: gutter / 2 }} className={classes.containerItem}>
                    {
                        leftRightPortfolioItems.map((item, i) => {
                            if (!item.isLeft) {
                                return (
                                    <Link to={"/portfolio/" + item.route} key={i}>
                                        <LabelImage marginBottom={gutter} label={item.header} alt={item.header} src={item.items[0].small.src}></LabelImage>
                                    </Link>
                                )
                            }
                            return "";
                        })
                    }
                </div>

            </div>
        </React.Fragment>
    )
}

export default LeftRightPortfolio;