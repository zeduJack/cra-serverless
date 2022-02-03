import React from 'react'
import Portfolio from './Portfolio';
import About from './About';
import Angebot from './Angebot';
import Kontakt from './Kontakt';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioContent from './PortfolioContent';
import PhotoSwipeTest from './PhotoSwipeTest';
import ScrollToTop from '../common/ScrollToTop';
import  { Redirect } from 'react-router-dom';

import { navigation, SubNavItem, Nav } from '../../nav';
import { angebote, Angebot as AngebotType } from '../../angebote';

import {
  Switch,
  Route
} from "react-router";


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: '2rem 1rem',
  }
}));

type Props = {
  setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Page = ({ setSidenavOpen }: Props) => {
  const classes = useStyles();
  const navAngebote = Nav.Angebot.items as SubNavItem[];

  return (
    <div onClick={() => setSidenavOpen(false)} className={classes.content}>
      <ScrollToTop />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {navAngebote.map((nav: SubNavItem, index) => (
          <Route exact={true} key={index} path={nav.route}
            render={() => (<Angebot angebot={angebote.filter(x => x.name === nav.key)[0]} />)} />
        ))}
        <Route path="/kontakt">
          <Kontakt />
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioContent></PortfolioContent>
        </Route>
        <Route path="/photoswipe">
          <PhotoSwipeTest></PhotoSwipeTest>
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Redirect to='/portfolio' />
        </Route>
      </Switch>
    </div>
  )
}

export default Page