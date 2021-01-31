import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: (props: any) => ({
        width: '100%',
        position: 'relative',
        marginBottom: props.marginBottom
    }),
    image: {
        width: '100%',
        position: 'relative',
        display: 'block'
    },
    label: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(80, 80, 80, 0.5)',
        boxSizing: 'border-box',
        width: '100%',
        color: 'white',
        padding: '0.7rem 1rem'

    }
}));

type Props = {
    label: string;
    src: string;
    alt: string;
    marginBottom: number;
    onClick?: () => void;
}

const LabelImage = ({ label, src, alt, marginBottom, onClick }: Props) => {
    if (!marginBottom) {
        marginBottom = 0;
    }
    const classes = useStyles({ marginBottom: marginBottom });



    return (
        <div className={classes.container} onClick={() => {if(onClick) {onClick()}}}>
            <img alt={label} className={classes.image} src={src}></img>
            <div className={classes.label}>{label}</div>
        </div>
    )

}

export default LabelImage;