import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link  from "./Link";

const useStyles = makeStyles(() => ({
    logoContainer: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        paddingTop: '5rem',
        paddingBottom: '2rem',
        maxWidth: '100%'
    },
    link: {
        maxWidth: '100%'
    }
}));


const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.logoContainer}>
            <Link to="/"><img alt="Logo" src="/logo/120707_won-photo.png" className={classes.link}></img></Link>
        </div>
    )
}
export default Logo;