import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Angebot as AngebotType } from '../../angebote';
import { Helmet } from 'react-helmet-async';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth: 600,
    marginBottom: '1rem',
    minWidth: '340px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    paddingBottom: '2rem',
    fontSize: '1.5rem'
  },
  pos: {
    marginBottom: 12,
  },
  price: {
    fontWeight: 'bold'
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  h5: {
    paddingBottom: '0.8rem'
  },
  ul: {
    listStylePosition: 'outside',
    padding: '0 1rem'
  }
});

type Props = {
  angebot: AngebotType
}

const Angebot = ({ angebot }: Props) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  // const angebot = angebote.hochzeit;

  return (
    <React.Fragment>
      <Helmet>
        <title>{angebot.title}</title>
        <meta name="description" content="Sha hat für jede Lebenssituation das richtige Angebot."></meta>
      </Helmet>

      <Typography variant="h1">
        {angebot.title}
      </Typography>

      <div className={classes.cards}>

        <Typography variant="h2">
          Coming soon...
        </Typography>

        {/* <LeftRight>
          {angebot.items.map((item, index) => (
            <Card kex={index} className={classes.root}>
              <CardContent>
                <Typography className={classes.h5} variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body1" component="div">

                  {item.bullets.map((bullet, bulletIndex) => (
                    <ul key={bulletIndex} className={classes.ul}>
                      <li>{bullet}</li>
                    </ul>
                  ))}
                </Typography>
                <Typography className={classes.price} align="center" variant="subtitle1">
                  {item.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </LeftRight> */}
      </div>
    </React.Fragment>
  )
}

export default Angebot