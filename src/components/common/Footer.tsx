import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';


const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'block',
        fontSize: '1rem',
        backgroundColor: 'rgb(40, 40, 40)',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    copyright: {
        fontSize: '0.8rem',
        textAlign: 'center',
        padding: '2rem 0px',
        backgroundColor: 'rgb(45, 45, 45)'
    },
    info: {
        padding: '2rem 0px'
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('md')]: {
            '& :first-child': {
                paddingLeft: '0px',
            },
            '& :last-child': {
                paddingRight: '0px',
            }
        }
    },
    inofPart: {
        fontSize: '0.8rem',
        color: 'white',
        maxWidth: '500px',
        [theme.breakpoints.up('md')]: {
            padding: '0 1rem'
        },
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '1.5rem'
        }
    },
    inofPartHeader: {
        paddingBottom: '0.5rem',
        fontSize: '1.2rem'
    },
    icon: {
        display: 'flex',
        alignItems: 'center'
    },
    iconLink: {
        color: 'white',
        textDecoration: 'none'
    }
}));

type Props = {
    setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ setSidenavOpen }: Props) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer} onClick={() => setSidenavOpen(false)} >
            <div className={classes.info}>
                <Container className={classes.infoContainer} maxWidth="lg">
                    <div className={classes.inofPart}>
                        <h3 className={classes.inofPartHeader}>Sha Phansri</h3>
                        <Typography variant="body1">
                            Sha ist eine Fotografin die ihre Leidenschaft
                            zum Beruf gemacht hat.
                            Durch ihre Fotos wird jeder Event zu einem
                            unvergesslichen Erlebnis.
                        </Typography>
                    </div>

                    <div className={classes.inofPart}>
                        <h3 className={classes.inofPartHeader}>Geschenk</h3>
                        <Typography variant="body1">
                            Möchten Sie ihren Liebsten mal etwas nicht alltägliches schenken?
                            Über ein Fotoshooting mit einem Fotobuch (als Überraschung) freuen sich ihre Liebsten ganz bestimmt.
                        </Typography>
                    </div>

                    <div className={classes.inofPart}>
                        <h3 className={classes.inofPartHeader}>Kontakt</h3>
                        <Typography variant="body1">

                            <a className={classes.iconLink} href="tel:+41 77 49706 92">
                                <span className={classes.icon}>
                                    <CallOutlinedIcon fontSize="small"></CallOutlinedIcon>&nbsp;Anrufen
                                </span>
                                <span>+41 77 49706 92</span>
                            </a>

                            <br />
                            <br />

                            <a className={classes.iconLink} href="mailto:sha.kamonrat@gmail.com">
                                <span className={classes.icon}>
                                    <MailOutlineIcon fontSize="small"></MailOutlineIcon>&nbsp;E-Mail schreiben
                                </span>
                                <span>sha.kamonrat@gmail.com</span>
                            </a>


                        </Typography>
                    </div>
                </Container>
            </div>

            <Typography className={classes.copyright} variant="h3" component="div">Copyright 2020 by Photosha.ch</Typography>
        </footer>
    )
}

export default Footer
