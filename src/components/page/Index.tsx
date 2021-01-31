import React from 'react'
import Portfolio from './Portfolio';
import About from './About';
import Angebot from './Angebot';
import Kontakt from './Kontakt';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioContent from './PortfolioContent';
import PhotoSwipeTest from './PhotoSwipeTest';
import ScrollToTop from '../common/ScrollToTop';

import { navigation, SubNavItem } from '../../navigation';
import { angebote, Angebot as AngebotType } from '../../angebote';

import {
  Switch,
  Route
} from "react-router-dom";


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
  console.log('Index.tsx');
  const classes = useStyles();
  const navAngebote = navigation.angebot.items as SubNavItem[];
  console.log(navigation);

  return (
    <div onClick={() => setSidenavOpen(false)} className={classes.content}>
      <ScrollToTop />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {navAngebote.map((nav: SubNavItem, index) => (
          <Route exact={true} key={index} path={nav.route}
            render={() => (<Angebot angebot={angebote.filter(x => {
              console.log('x.name: ', x.name, ' - nav.key: ', nav.key)
              return x.name === nav.key
            })[0]} />)} />
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
          <Portfolio />
        </Route>
      </Switch>
    </div>
  )
}

export default Page