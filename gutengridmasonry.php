<?php
/**
* Plugin Name:       Guten Grid Masonry
* Description:       Example block scaffolded with Create Block tool.
* Requires at least: 6.1
* Requires PHP:      7.0
* Version:           0.1.0
* Author:            The WordPress Contributors
* License:           GPL-2.0-or-later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:       gutengridmasonry
*
* @package           create-block
*/


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'GUTENGRID_MASONRY_FILE' ) ) {
	define( 'GUTENGRID_MASONRY_FILE', __FILE__ );
}

if ( ! defined( 'GUTENGRID_MASONRY_DIR' ) ) {
	define( 'GUTENGRID_MASONRY_DIR', dirname( __FILE__ ) );
}

if ( ! defined( 'GUTENGRID_MASONRY_ROOT' ) ) {
	define( 'GUTENGRID_MASONRY_ROOT', dirname( plugin_basename( GUTENGRID_MASONRY_FILE ) ) );
}

if ( ! defined( 'GUTENGRID_BLOCK_PLUGIN_NAME' ) ) {
	define( 'GUTENGRID_BLOCK_PLUGIN_NAME', 'GUTENGRID MASONRY' );
}

if ( ! defined( 'GUTENGRID_MASONRY_VERSION' ) ) {
	define( 'GUTENGRID_MASONRY_VERSION', time() );
}

if ( ! defined( 'GUTENGRID_BLOCK_PLUGIN_SHORT_NAME' ) ) {
	define( 'GUTENGRID_BLOCK_PLUGIN_SHORT_NAME', 'GUTENGRID' );
}

// Add custom function file.
require_once GUTENGRID_MASONRY_DIR . '/inc/custom-functions.php';


/**
* Registers the block using the metadata loaded from the `block.json` file.
* Behind the scenes, it registers also all assets so they can be enqueued
* through the block editor in the corresponding context.
*
* @see https://developer.wordpress.org/reference/functions/register_block_type/
*/
/**
* Register block assets.
*
* @return void
*/

function create_block_gutengridmasonry_block_init() {	

	/** Masonry library */
	wp_enqueue_script(
		'isotope-masonry',
		plugins_url( '/assets/js/unpkg.com_isotope-layout@3.0.6_dist_isotope.pkgd.min.js', __FILE__ ),
		array( 'jquery' ),
		'3.0.6',
		true
	);

    /** Fancyapp library */
	wp_enqueue_script(
		'fancyapp-lib',
		plugins_url( '/assets/js/fancybox.umd.js', __FILE__ ),
		array( 'jquery' ),
		'',
		true
	);

    /** Custom scripts functions */
	wp_enqueue_script(
		'script-custom',
		plugins_url( '/assets/js/script.js', __FILE__ ),
		array( 'jquery', 'fancyapp-lib', 'isotope-masonry' ),
		GUTENGRID_MASONRY_VERSION,
		true
	);

    /** Fancyapp CSS */
	wp_enqueue_style( 'fancyapp-css/assets/',
		plugins_url( '/assets/css/fancybox.css', __FILE__ ),
		'',
		true
	);

   // wp_localize_script('main-script', 'admin_theme_object', array('themeurl' => get_theme_file_uri()));
	register_block_type( __DIR__ . '/build' );

}
add_action( 'init', 'create_block_gutengridmasonry_block_init' );


/**
 * Add category in blocks lists.
 *
 * @param  array $categories - get category array.
 * @return array
 */
function ggm_plugin_block_categories( $categories ) {
	if ( array_search( 'guten-grid-masonry', array_column( $categories, 'slug' ), true ) === false ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'guten-grid-masonry',
					'title' => __( 'ZealBlocks', 'gutengridmasonry' ),
					'icon'  => '',
				),
			)
		);
	}
	return $categories;
}
add_action( 'block_categories_all', 'ggm_plugin_block_categories', 10, 2 );
