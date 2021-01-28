import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Switch } from 'react-router'
import styled, { createGlobalStyle } from 'styled-components'

import { Details } from './pages/Details'
import { NotFound } from './pages/Error'
import { Home } from './pages/Home'

// import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './components/common/Header'
import SideNav from './components/common/SideNav'
import Footer from './components/common/Footer'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Wrapper = styled.div`
  text-align: center;
`

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '0'
  }
}));

const App: React.FC = () => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const classes = useStyles();
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.container}>
      <Header setSidenavOpen={setSidenavOpen} sidenavOpen={sidenavOpen} />
        {/* <Toolbar /> */}
        <Container className={classes.container} maxWidth="lg">
          {/* <Page setSidenavOpen={setSidenavOpen} /> */}
        </Container>
        <SideNav setSidenavOpen={setSidenavOpen} sidenavOpen={sidenavOpen} />
        <Footer setSidenavOpen={setSidenavOpen} />

      </div>
    </ThemeProvider>

    // <>
    //   <GlobalStyles />

    //   <Helmet>
    //     <title>{process.env.REACT_APP_NAME}</title>
    //   </Helmet>

    //   <Wrapper>
    //     <Navigation />

    //     <Switch>
    //       <Route path="/details/:id" component={Details} />
    //       <Route path="/" component={Home} exact />

    //       <Route component={NotFound} />
    //     </Switch>

    //     <Footer />
    //   </Wrapper>
    // </>
  )
}

export default App
