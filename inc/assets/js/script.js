var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
$(() => {

    /** Post Grid Isotope Masonry options */
    $('.ggm-pg-grid .ggm-pg-loop-wrap').isotope({
        itemSelector: '.wp-block-post',
        percentPosition: true,
        masonry: {
            gutter: 20,
            columnWidth: '.ggm-pg-wrap'
            // use outer width of grid-sizer for columnWidth
            //columnWidth: '.grid-sizer'
        }
    });

    /** Media Grid Isotope Masonry options */
    $('.ggm-mg-grid').isotope({
        itemSelector: '.ggm-mg-media',
        percentPosition: true,
        masonry: {
            gutter: 20,
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.ggm-mg-media'
        }
    });

    $(window).resize();

    /** Fancybox bindings for Media Grid */
    Fancybox.bind('[data-fancybox="video-gallery"]', {
        mainClass: "ggm-fancy-custom",
    });
});
/** ----------------------------------------------------------------------------
Script on ready end */