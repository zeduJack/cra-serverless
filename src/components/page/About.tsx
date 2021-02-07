import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet-async';

const useStyles = makeStyles({
  title: {
    padding: '2rem 0',
    fontSize: '1.5rem'
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Photosha - Sha stellt sich vor</title>
        <meta name="description" content="Erfahren Sie was Sie von Sha erwarten können."></meta>
      </Helmet>

      <div>
        <h3 className={classes.title}>Über mich</h3>
      </div>
    </>

  )
}

export default About
