const $ = jQuery.noConflict();
$( () => {
	console.log( 'aasasasa' );
	wp.codeEditor.initialize( $( '#fancy-textarea' ), cm_settings );
} );
