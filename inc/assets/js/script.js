var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
jQuery(() => {

    /** Post Grid Isotope Masonry options */
    jQuery('.gmfgb-pg-grid .gmfgb-pg-loop-wrap').isotope({
        itemSelector: '.wp-block-post',
        percentPosition: true,
        masonry: {
            gutter: 20,
            columnWidth: '.gmfgb-pg-wrap'
            // use outer width of grid-sizer for columnWidth
            //columnWidth: '.grid-sizer'
        }
    });

    /** Media Grid Isotope Masonry options */
    jQuery('.gmfgb-mg-grid').isotope({
        itemSelector: '.gmfgb-mg-media',
        percentPosition: true,
        masonry: {
            gutter: 20,
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.gmfgb-mg-media'
        }
    });

    //jQuery(window).resize();

    /** Fancybox bindings for Media Grid */
    Fancybox.bind('[data-fancybox]', {
        mainClass: "gmfgb-fancy-custom",
    });
});
/** ----------------------------------------------------------------------------
Script on ready end */