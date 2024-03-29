import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ShareIcon from '@material-ui/icons/Share';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { 
    FacebookShareButton, 
    FacebookIcon, 
    WhatsappShareButton, 
    WhatsappIcon, 
    LineShareButton, 
    LineIcon, 
    EmailShareButton, 
    EmailIcon 
} from "react-share"


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        '& > *': {
            padding: '0 1rem'
        }
    }
}));

const ShareSelection = () => {
    const classes = useStyles();
    const [shareSelectionOpen, setShareSelectionOpen] = useState(false);
    const photoshaurl = "https://photosha.ch";

    return (
        <React.Fragment>
            <ShareIcon onClick={() => setShareSelectionOpen(!shareSelectionOpen)} ></ShareIcon>
            <Drawer anchor="top" open={shareSelectionOpen} onClose={() => setShareSelectionOpen(!shareSelectionOpen)}>
                <Toolbar></Toolbar>
                <div className={classes.root}>
                    <span>
                        <FacebookShareButton
                            url={photoshaurl}>
                            <FacebookIcon path={photoshaurl} round={true} size={35}></FacebookIcon>
                        </FacebookShareButton>
                    </span>

                    <span>
                        <WhatsappShareButton
                            url={photoshaurl}
                            title="Fotografin mit Leidenschaft">
                            <WhatsappIcon path={photoshaurl} round={true} size={35}></WhatsappIcon>
                        </WhatsappShareButton>
                    </span>

                    <span>
                        <EmailShareButton
                            url={photoshaurl}
                            subject="Tolle Fotografin"
                            body="https://photosha.ch - Fotografin mit Leidenschaft ">
                            <EmailIcon path={photoshaurl} round={true} size={35}></EmailIcon>
                        </EmailShareButton>
                    </span>

                    <span>
                        <LineShareButton
                            url={photoshaurl}
                            title="Fotografin mit Leidenschaft">
                            <LineIcon path={photoshaurl} round={true} size={35}></LineIcon>
                        </LineShareButton>
                    </span>
                </div>

            </Drawer>
        </React.Fragment >
    );

};


export default ShareSelection;