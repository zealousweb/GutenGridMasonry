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

	Fancybox.bind('[data-fancybox="video-gallery"]', {
	//
	});

	Fancybox.bind('[data-fancybox="gallery"]', {
	//
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
