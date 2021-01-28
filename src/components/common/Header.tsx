import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PropTypes from 'prop-types';

import Link from './Link';
import HeaderNavItem from './HeaderNavItem';
import Logo from './Logo';

import ShareSelection from './ShareSelection';
import { NAVIGATION } from '../../constants';
import { InferProps } from 'prop-types';


function HideOnScroll({ children }: InferProps<typeof HideOnScroll.propTypes>) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    appBar: {
        zIndex: theme.zIndex.snackbar + 1,
    },
    nav: {
        display: "flex",
        justifyContent: 'space-between',
        flexGrow: 1
    },
    spacer: {
        flexGrow: 1,
    },
    icon: {
        height: '1.25rem',
        paddingRight: '0.25rem'
    }
}));

type Props = {
    sidenavOpen: boolean;
    setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ sidenavOpen, setSidenavOpen }: Props) => {

    const classes = useStyles();
    const navItems = Object.values(NAVIGATION);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Logo />
            <HideOnScroll>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.root}>
                        <img alt="favicon" className={classes.icon} src="/logo/favicon.png"></img>
                        <Typography variant="h6">
                            <Link to="/">Photosha</Link>
                        </Typography>
                        <div className={classes.spacer}>&nbsp;</div>
                        {!isMobile &&
                            <div className={classes.nav}>
                                {navItems.map((item, index) => (
                                    <HeaderNavItem key={index} item={item} />
                                ))}
                                <ShareSelection></ShareSelection>
                            </div>
                        }
                        {isMobile &&
                            <React.Fragment>
                                <ShareSelection></ShareSelection>
                                <IconButton onClick={() => setSidenavOpen(!sidenavOpen)} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                            </React.Fragment>
                        }
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    )
}

export default Header;
