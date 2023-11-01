const $ = jQuery.noConflict();
$( () => {
	if ( jQuery( '.utk-testi-inner-grp' ).length > 0 ) {
		const utktestiarr = document.getElementById( 'utk-testi-attr' );
		const utkAutoplay = utktestiarr.getAttribute( 'data-utktestiautoplay' );
		const utkSlidetoshow = utktestiarr.getAttribute( 'data-utktestislidetoshow' );
		const utkSpeed = utktestiarr.getAttribute( 'data-utktestispeed' );
		const utkAutoplayspeed = utktestiarr.getAttribute( 'data-utktestiautoplayspeed' );
		setTimeout( function() {
			jQuery( '.utk-testi-inner-grp' ).slick( {
				infinite: true,
				slidesToShow: utkSlidetoshow,
				autoplay: JSON.parse( utkAutoplay ),
				speed: utkSpeed,
				autoplaySpeed: utkAutoplayspeed,
				responsive: [ {
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						infinite: true,
					},
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						dots: true,
					},
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						dots: true,
					},
				}, {
					breakpoint: 300,
					settings: 'unslick',
				} ],
			} );
		}, 500 );
	}
} );
