import React from 'react';

import { Link } from 'react-router-dom';

import LabelImage from '../common/LabelImage';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import { portfolio } from '../../portfolios';

import LeftRightPortfolio from './LeftRightPortfolio';

const useStyles = makeStyles(() => ({
  title: {
    paddingBottom: '2rem',
    fontSize: '1.5rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  spacer: {
    width: '2rem',
    flexShrink: 0
  }
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const gutter = 32;

  return (

    <div>
      <Typography variant="h1">
        Portfolio
      </Typography>
      {
        isMobile &&
        portfolio.map((item, i) => (
          <Link to={"/portfolio/" + item.header} key={i}>
            <LabelImage marginBottom={gutter} label={item.header} alt={item.header} src={item.items[0].small.src}></LabelImage>
          </Link>
        ))
      }
      {
        !isMobile && <LeftRightPortfolio items={portfolio} gutter={gutter} ></LeftRightPortfolio>
      }
    </div>
  )
}

export default Portfolio;
