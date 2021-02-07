import React, { useState } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './components/common/Header'
import SideNav from './components/common/SideNav'
import Footer from './components/common/Footer'
import { createGlobalStyle } from 'styled-components'

import Page from './components/page/Index';

import { Nav } from './nav';
import { angebote } from './angebote';

import theme from './theme';
//import './normalize.css';
//import './index.scss';
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



const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Metropolis", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 400;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-size: 1.2rem;
    font-weight: 400;
  }
`


const App: React.FC = () => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <title>Fotografin für Portrait, Hochzeit, Familie, Event</title>
        <meta name="description" content="Professionelle Fotografin für Portraits, Hochzeiten, Familienfotos und Events"></meta>
        <link rel="stylesheet" href="./normalize.css" />
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
