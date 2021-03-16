import React, { useState } from 'react';

import { useParams, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import portfolios from '../../portfolios';
import PhotoSwipeWrapper from '../common/PhotoSwipeWrapper';
import LeftRightPortfolioContent from './LeftRightPortfolioContent';

const containerPadding = '1rem';

const useStyles = makeStyles(() => ({
    image: {
        width: '100%',
        display: 'block'
    },
    sidesContainer: {
        display: 'flex'
    },
    leftContainer: {
        paddingRight: containerPadding
    },
    rightContainer: {
        paddingLeft: containerPadding
    },
    title: {
        paddingBottom: '2rem',
        fontSize: '1.5rem'
    },
    breadcrumb: {
        paddingTop: '1rem'
    }
}));


const PortfolioContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [redirectToPortfolio, setRedirectToPortfolio] = useState(false);
    const handleOpen = (index: number) => {
        setIsOpen(true);
        setIndex(index);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const classes = useStyles();

    interface ParamTypes {
        id: string
    }

    let { id } = useParams<ParamTypes>();
    const route = id.toLowerCase();
    let portfolio = portfolios.filter(p => p.route === route)[0];
    const header = portfolio.header;
    const photoSwipeItems = portfolio.items.map(i => i.medium);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const gutter = 32;

    return (
        <div>
            {redirectToPortfolio && <Redirect to="/portfolio" />}

            <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
                <Link style={{ cursor: 'pointer' }} color="inherit" onClick={() => setRedirectToPortfolio(true)}>Portfolio</Link>

                <Typography color="textPrimary">{header}</Typography>
            </Breadcrumbs>

            <Typography variant="h1">
                {header}
            </Typography>

            {
                isMobile &&
                portfolio.items.map((item, i) => (
                    <div onClick={() => { handleOpen(i); }} style={{ paddingBottom: gutter }} key={i}>
                        <img className={classes.image} alt={`${id} ${i + 1}`} src={item.medium.src} />
                    </div>
                ))
            }
            {
                !isMobile && <LeftRightPortfolioContent items={portfolio.items} id={id} handleOpen={handleOpen} gutter={gutter} ></LeftRightPortfolioContent>
            }

            <PhotoSwipeWrapper isOpen={isOpen} index={index} items={photoSwipeItems} onClose={handleClose} />
        </div>
    )
}

export default PortfolioContent;