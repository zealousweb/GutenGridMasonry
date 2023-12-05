var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
$(() => {

    console.log('tt');

    //console.log('adi');
    // init Isotope
    /*$('.ggm-pg-loop-wrap .wp-block-post-template').isotope({
        itemSelector: '.wp-block-post',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            //columnWidth: '.grid-sizer'
        }
    });*/

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

    Fancybox.bind('[data-fancybox="video-gallery"]', {
        //
        mainClass: "ggm-fancy-custom",
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        //
        mainClass: "ggm-fancy-custom",
    });
});
/** ----------------------------------------------------------------------------
Script on ready end */


$((resize) => {
    //console.log('re');
    // setTimeOut(function(){
    // 	$('.ggm-pg-grid').isotope({
    // 		itemSelector: '.wp-block-post',
    // 		percentPosition: true,
    // 		masonry: {
    // 			// use outer width of grid-sizer for columnWidth
    // 			//columnWidth: '.grid-sizer'
    // 		}
    // 	});
    //
    // 	$('.ggm-mg-grid').isotope({
    // 		itemSelector: '.ggm-mg-media',
    // 		percentPosition: true,
    // 		masonry: {
    // 			// use outer width of grid-sizer for columnWidth
    // 			//columnWidth: '.grid-sizer'
    // 		}
    // 	});
    // },700);
});

/*
document.addEventListener('DOMContentLoaded', function () {
    const toggleControl = document.getElementsByClassName('toggle-caption');
    const selectDeselectButton = document.getElementsByClassName('ggm-mg-wrap');

    selectDeselectButton.addEventListener('click', function () {
        // Replace 'your-condition' with the actual condition based on your class
        const shouldSelect = document.querySelector('.toggle-caption') !== null;

        toggleControl.checked = shouldSelect;
    });
});*/