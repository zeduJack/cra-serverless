import React, { useState, Fragment } from 'react';

import PhotoSwipeWrapper from '../common/PhotoSwipeWrapper';

const PhotoSwipeTest = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const items = [
        {
            src: 'https://placekitten.com/600/400',
            w: 600,
            h: 400
        },
        {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
        }
    ];

    const handleOpen = (index: number) => {
        setIsOpen(true);
        setIndex(index);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <Fragment>
            <div>
                {items.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            handleOpen(i);
                        }}
                    >
                        Image {i}
                    </div>
                ))}
            </div>
            <PhotoSwipeWrapper isOpen={isOpen} index={index} items={items} onClose={handleClose} />
        </Fragment>
    )
}

export default PhotoSwipeTest