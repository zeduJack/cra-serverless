import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PortfolioItem } from '../../portfolio';


const containerPadding = '1rem';

const useStyles = makeStyles(() => ({
    sidesContainer: {
        display: 'flex'
    }, 
    containerItem: {
        flexBasis: '100%'
    },
    image: {
        width: '100%',
        display: 'block'
    }
}));

type Props = {
    items: PortfolioItem[];
    id: string;
    handleOpen: (index: number) => void;
    gutter: number;

}

interface LeftRightPortfolioItem extends PortfolioItem {
    isLeft: boolean;
}

const LeftRightPortfolioContent = ({items, id, handleOpen, gutter}: Props) => {
    const classes = useStyles();
    let leftHeight = 0;
    let rightHeith = 0;

    const leftRightItems = items.map(i => i as LeftRightPortfolioItem);

    leftRightItems.forEach(item => {
        if (leftHeight <= rightHeith) {
            leftHeight = leftHeight + item.medium.h + gutter;
            item.isLeft = true;
        } else {
            rightHeith = rightHeith + item.medium.h + gutter;
            item.isLeft = false;
        }
    });



    return (
        <React.Fragment>
            <div className={classes.sidesContainer}>
                <div style={{ paddingRight: gutter / 2 }} className={classes.containerItem}>

                    {
                        leftRightItems.map((item, i) => {
                            if (item.isLeft) {
                                return (<div onClick={() => { handleOpen(i); }} style={{ paddingBottom: gutter }} key={i}>
                                    <img className={classes.image} alt={`${id} ${i + 1}`} src={item.medium.src} />
                                </div>)
                            }
                            return "";
                        })
                    }
                </div>
                <div style={{ paddingLeft: gutter / 2 }} className={classes.containerItem}>
                    {
                        leftRightItems.map((item, i) => {
                            if (!item.isLeft) {
                                return (<div onClick={() => { handleOpen(i); }} style={{ paddingBottom: gutter }} key={i}>
                                    <img className={classes.image} alt={`${id} ${i + 1}`} src={item.medium.src} />
                                </div>)
                            }
                            return "";
                        })
                    }
                </div>

            </div>
        </React.Fragment>
    )
}

export default LeftRightPortfolioContent;