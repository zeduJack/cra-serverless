import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  iconLink: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '1.5rem'
  },
  title: {
    paddingBottom: '1.5rem'
  },
  paddingTop: {
    paddingTop: '1rem'
  },
  [theme.breakpoints.up('md')]: {
    h2: {
      fontSize: '2rem',
      paddingBottom: '0',
    },
    h3: {
      fontSize: '1.5rem',
    }
  },
}));

const Kontakt = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>

      <Typography align={isMobile ? 'left' : 'center'} variant="h1">
        Kontakt
      </Typography>

      <Typography align={isMobile ? 'left' : 'center'} className={classes.h2} variant="h2">
        Möchten Sie einen Termin buchen?
      </Typography>

      <Typography align={isMobile ? 'left' : 'center'} className={classes.h3} variant="h3">
        Gerne bin ich für Sie wie folgt erreichbar...
      </Typography>

      <a className={[classes.iconLink, classes.paddingTop].join(' ')} href="tel:+41 77 49706 92">
        <CallOutlinedIcon fontSize="large"></CallOutlinedIcon>
        <div>Telefon</div>
        <div>+41 77 49706 92</div>
      </a>

      <a className={classes.iconLink} href="mailto:sha.kamonrat@gmail.com">
        <MailOutlineIcon fontSize="large"></MailOutlineIcon>
        <div>E-Mail</div>
        <div>sha.kamonrat@gmail.com</div>
      </a>

      <a className={classes.iconLink} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/KamonratPhansri">
        <FacebookIcon fontSize="large"></FacebookIcon>
        <div>Facebook</div>
      </a>

      <a className={classes.iconLink} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sha_phansri/">
        <InstagramIcon fontSize="large"></InstagramIcon>
        <div>Instagram</div>
      </a>


    </React.Fragment>
  )
}

export default Kontakt

