import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { navigation, NavItem } from '../../nav';


type Props = {
    sidenavOpen: boolean;
    setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideNav = ({ sidenavOpen, setSidenavOpen }: Props) => {

    const useStyles = makeStyles(() => ({
        drawer: {
            width: 'auto'
        },
        link: {
            display: 'block',
            padding: '0.5rem 2rem',
            textDecoration: 'none',
            fontSize: '1rem',
            color: 'inherit'
        },
        closeButton: {
            margin: '1rem 2rem'
        },
        sublink: {
            paddingLeft: '3rem',
            display: 'flex'
        },
        active: {
            backgroundColor: 'aliceblue'
        }
    }));

    const classes = useStyles();

    return (
        <Drawer anchor="right" open={sidenavOpen} onClose={() => setSidenavOpen(!sidenavOpen)}>
            <div className={classes.drawer}>
                <CloseIcon onClick={() => setSidenavOpen(!sidenavOpen)} className={classes.closeButton}></CloseIcon>
                {navigation.map((item: NavItem, idx) => {
                    if (item.items) {
                        return (<React.Fragment key={idx}>
                            <span className={classes.link}>{item.displayName}</span>
                            {item.items.map((subItem, subIndex) => (
                                <NavLink key={subIndex} activeClassName={classes.active} className={[classes.link, classes.sublink].join(' ')} onClick={() => setSidenavOpen(!sidenavOpen)} to={subItem.route}><ArrowRightIcon></ArrowRightIcon> {subItem.displayName}</NavLink>
                            ))}
                        </React.Fragment>)
                    } else {
                        return (
                            <NavLink key={idx} activeClassName={classes.active} className={[classes.link, classes.sublink].join(' ')} onClick={() => setSidenavOpen(!sidenavOpen)} to={item.route}>{item.displayName}</NavLink>
                        )
                    }
                })}
            </div>
        </Drawer >
    )
}

export default SideNav
