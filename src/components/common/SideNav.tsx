import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";

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
            fontSize: '1rem'
        },
        closeButton: {
            margin: '1rem 2rem'
        }
    }));


    const useExpansionPanelStyles = makeStyles(() => ({
        root: {
            '&&': {
                backgroundColor: 'white',
                fontWeight: '600',
                boxShadow: 'unset'
            },
            '&:before': {
                backgroundColor: 'white',
            }
        },
        summary: {
            '&&': {
                opacity: 'unset',
                paddingLeft: '2rem'
            }
        },
        link: {
            display: 'block',
            textDecoration: 'none',
            fontSize: '1rem',
            paddingLeft: '1rem',
            paddingTop: '0.5rem'
        },
        details: {
            padding: 0,
            paddingLeft: '2rem',
            paddingRight: '1rem',
            display: 'block'
        }
    }));

    const classes = useStyles();
    const expansionPanelClasses = useExpansionPanelStyles();

    return (
        <Drawer anchor="right" open={sidenavOpen} onClose={() => setSidenavOpen(!sidenavOpen)}>
            <div className={classes.drawer}>
                <CloseIcon onClick={() => setSidenavOpen(!sidenavOpen)} className={classes.closeButton}></CloseIcon>
                {navigation.map((item: NavItem, idx) => {
                    if (item.items) {
                        return (<Accordion key={idx} classes={{ root: expansionPanelClasses.root }}>
                            <AccordionSummary
                                className={expansionPanelClasses.summary}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{item.displayName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={expansionPanelClasses.details}>
                                {item.items.map((subItem, subIndex) => (
                                    <Link key={subIndex} className={expansionPanelClasses.link} onClick={() => setSidenavOpen(!sidenavOpen)} to={subItem.route}>{subItem.displayName}</Link>
                                ))}

                            </AccordionDetails>
                        </Accordion>)
                    } else {
                        return (
                            <Link key={idx} className={classes.link} onClick={() => setSidenavOpen(!sidenavOpen)} to={item.route}>{item.displayName}</Link>
                        )
                    }
                })}
            </div>
        </Drawer >
    )
}

export default SideNav