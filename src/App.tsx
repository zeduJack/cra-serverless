import React, { useState } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './components/common/Header'
import SideNav from './components/common/SideNav'
import Footer from './components/common/Footer'

import Page from './components/page/Index';

import { Nav } from './nav';
import { angebote } from './angebote';

import theme from './theme';
//import './normalize.css';
import './index.scss';
import { Helmet } from 'react-helmet-async';

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '0'
  }
}));

// extend angebot navigation with dynamically 
// generated information from portfolio
angebote.forEach(angebot => {
  Nav.Angebot.items?.push({
    displayName: angebot.navTitle,
    key: angebot.name,
    route: '/angebot/' + angebot.name
  });
});

const App: React.FC = () => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Fotografin für Portrait, Hochzeit, Familie, Event</title>
        <meta name="description" content="Professionelle Fotografin für Portraits, Hochzeiten, Familienfotos und Events"></meta>
      </Helmet>

      <CssBaseline />
      <div className={classes.container}>
        <Header setSidenavOpen={setSidenavOpen} sidenavOpen={sidenavOpen} />
        {/* <Toolbar /> */}
        <Container className={classes.container} maxWidth="lg">
          <Page setSidenavOpen={setSidenavOpen} />
        </Container>
        <SideNav setSidenavOpen={setSidenavOpen} sidenavOpen={sidenavOpen} />
        <Footer setSidenavOpen={setSidenavOpen} />

      </div>
    </ThemeProvider>
  )
}

export default App
