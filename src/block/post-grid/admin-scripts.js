var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
$(() => {

	console.log('adi');
	// init Isotope
	/*$('.ggm-pg-loop-wrap .wp-block-post-template').isotope({
		itemSelector: '.wp-block-post',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			//columnWidth: '.grid-sizer'
		}
	});*/

	$('.ggm-pg-grid').isotope({
		itemSelector: '.wp-block-post',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			//columnWidth: '.grid-sizer'
		}
	});
});
/** ----------------------------------------------------------------------------
Script on ready end */


$((load) => {
	console.log('re');
});
