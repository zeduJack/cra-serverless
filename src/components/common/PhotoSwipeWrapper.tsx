import React, { useEffect, useRef } from 'react';

import '../../../node_modules/photoswipe/dist/photoswipe.css';
import '../../../node_modules/photoswipe/dist/default-skin/default-skin.css';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';


declare global {
    interface Window {
        pswp: PhotoSwipe<PhotoSwipeUI_Default.Options>
    }
}

const PhotoSwipeWrapper = (props: any) => {

    let pswpElement = useRef<HTMLDivElement>(null);

    const options = {
        index: props.index || 0,
        closeOnScroll: false,
        history: false,
        clickToCloseNonZoomable: false,
        shareButtons: [
            { id: 'facebook', label: 'Share on Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u={{image_url}}' },
            { id: 'twitter', label: 'Tweet', url: 'https://twitter.com/intent/tweet?text={{text}}&url={{image_url}}' },
            { id: 'pinterest', label: 'Pin it', url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}' }
        ],
        getImageURLForShare: function (shareButtonData: any) {
            // `shareButtonData` - object from shareButtons array
            // 
            // `pswp` is the gallery instance object,
            // you should define it by yourself
            // 
            return window.location.origin + window.pswp.currItem.src || '';
        }
    };

    useEffect(() => {

        const photoSwipe = new PhotoSwipe(pswpElement.current as HTMLElement, PhotoSwipeUI_Default, props.items, options);

        window.pswp = photoSwipe;

        if (photoSwipe) {
            if (props.isOpen) {
                photoSwipe.init();

                photoSwipe.listen('destroy', () => {
                    props.onClose();
                });

                photoSwipe.listen('close', () => {
                    props.onClose();
                });
            }
            if (!props.isOpen) {
                props.onClose();
            }
        }
    }, [props.isOpen, props.index]);

    return (
        <div
            className="pswp"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            ref={pswpElement}
        >
            <div className="pswp__bg" />
            <div className="pswp__scroll-wrap">
                <div className="pswp__container">
                    <div className="pswp__item" />
                    <div className="pswp__item" />
                    <div className="pswp__item" />
                </div>
                <div className="pswp__ui pswp__ui--hidden">
                    <div className="pswp__top-bar">
                        <div className="pswp__counter" />
                        <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                        <button className="pswp__button pswp__button--share" title="Share" />
                        {/* can not use full screen because of WindowDimensionsProvider. */}
                        {/* WindowDimensionsCtx changes its value on full screen and so photoSwipe is initialized twice */}
                        {/* <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" /> */}
                        <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                        <div className="pswp__preloader">
                            <div className="pswp__preloader__icn">
                                <div className="pswp__preloader__cut">
                                    <div className="pswp__preloader__donut" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div className="pswp__share-tooltip" />
                    </div>
                    <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
                    <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
                    <div className="pswp__caption">
                        <div className="pswp__caption__center" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoSwipeWrapper;