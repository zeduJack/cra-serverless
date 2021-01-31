import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    padding: '2rem 0',
    fontSize: '1.5rem'
  }
});

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.title}>Über mich</h3>
    </div>
  )
}

export default About
