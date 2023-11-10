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

if ( ! defined( 'GUTENGRID_MASONRY_VERSION' ) ) {
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

	// Register block styles for both frontend + backend.
	wp_register_style(
		'gutengridmasonry-comman-style-css',
		plugins_url( '/dist/blocks.comman.style.build.css', __FILE__ ),
		is_admin() ? array( 'wp-editor' ) : null,
		GUTENGRID_MASONRY_VERSION
	);

	// Register style frontend as well as backend.
	wp_register_style(
		'gutengridmasonry-style-css',
		plugins_url( '/dist/blocks.style.build.css', __FILE__ ),
		is_admin() ? array( 'wp-editor' ) : null,
		GUTENGRID_MASONRY_VERSION
	);

	// Register block editor script for backend.
	wp_register_script(
		'gutengridmasonry-block-js',
		plugins_url( '/dist/blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		GUTENGRID_MASONRY_VERSION,
		true
	);

	// Register block editor styles for backend.
	wp_register_style(
		'gutengridmasonry-block-editor-css',
		plugins_url( '/dist/blocks.editor.build.css', __FILE__ ),
		is_admin() ? array( 'wp-edit-blocks' ) : null,
		GUTENGRID_MASONRY_VERSION
	);

	/** Masonry */
	wp_enqueue_script(
		'isotope-masonry',
		plugins_url( '/assets/js/unpkg.com_isotope-layout@3.0.6_dist_isotope.pkgd.min.js', __FILE__ ),
		array( 'jquery' ),
		'3.0.6',
		true
	);

	wp_enqueue_script(
		'fancyapp-lib',
		plugins_url( '/assets/js/fancybox.umd.js', __FILE__ ),
		array( 'jquery' ),
		'',
		true
	);

	wp_enqueue_script(
		'script-custom',
		plugins_url( '/assets/js/script.js', __FILE__ ),
		array( 'jquery', 'fancyapp-lib' ),
		GUTENGRID_MASONRY_VERSION,
		true
	);

	wp_enqueue_style( 'fancyapp-css/assets/',
		plugins_url( '/assets/css/fancybox.css', __FILE__ ),
		'',
		true
	);

	// Register card block CSS and JS.
	// register_block_type(
	// 	'gutengridmasonry/post-grid',
	// 	array(
	// 		'style'         => 'gutengridmasonry-style-css',
	// 		'style-comman'  => 'gutengridmasonry-comman-style-css',
	// 		'editor_script' => 'gutengridmasonry-block-js',
	// 		'editor_style'  => 'gutengridmasonry-block-editor-css',
	// 	)
	// );

	register_block_type( __DIR__ . '/build' );
	// register_block_type( __DIR__ . '/src/block/post-grid/post-grid.js' );
}
add_action( 'init', 'create_block_gutengridmasonry_block_init' );


/**
 * Enqueue a script in the WordPress admin on edit.php.
 *
 * @param int $hook Hook suffix for the current admin page.
 */
/*function create_block_gutengridmasonry_admin_block_init( $hook ) {
    if ( 'edit.php' != $hook ) {
        return;
    }
	wp_enqueue_script(
		'isotope-masonry',
		plugins_url( '/assets/js/unpkg.com_isotope-layout@3.0.6_dist_isotope.pkgd.min.js', __FILE__ ),
		'array( 'jquery' )',
		'3.0.6',
		true
	);

	wp_enqueue_script(
		'script-custom',
		plugins_url( '/assets/js/script.js', __FILE__ ),
		array( 'jquery' ),
		GUTENGRID_MASONRY_VERSION,
		true
	);
} */
//add_action( 'admin_enqueue_scripts', 'create_block_gutengridmasonry_admin_block_init' );



// function create_block_gutengrid_block_init() {
// 	//register_block_type( __DIR__ . '/build/blog-post' );
// 	register_block_type( __DIR__ . '/build/masonry' );
// 	//register_block_type( __DIR__ . '/build/my-repeater' );
// 	register_block_type( __DIR__ . '/build/new-repeater' );
// 	register_block_type( __DIR__ . '/build/post-grid' );
// }
// add_action( 'init', 'create_block_gutengrid_block_init' );


/**
* Enqueue Gutenberg block assets for both frontend + backend.
*
* Assets enqueued:
* 1. gutengridmasonry.style.build.css - Frontend + Backend.
* 2. gutengridmasonry.build.js - Backend.
* 3. gutengridmasonry.editor.build.css - Backend.
*
* @uses  {wp-blocks} for block type registration & related functions.
* @uses  {wp-element} for WP Element abstraction — structure of blocks.
* @uses  {wp-i18n} to internationalize the block's text.
* @uses  {wp-editor} for WP editor styles.
* @since 1.0.0
*/



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
					'title' => __( 'GutenGrid Masonry', 'gutengridmasonry' ),
					'icon'  => '',
				),
			)
		);
	}
	return $categories;
}
add_action( 'block_categories_all', 'ggm_plugin_block_categories', 10, 2 );


/**
 * Enqueues 3rd party JavaScript and CSS.
 *
 * @return void
 */
function ggm_enqueue_external_assets() {
	if ( ! is_admin() ) {
		wp_enqueue_script(
			'slick-carousel',
			plugins_url( '/src/block/testimonials/slick.min.js', __FILE__ ),
			array( 'jquery' ),
			UTK_BLOCKS_VERSION,
			true
		);
		wp_enqueue_script(
			'script-custom',
			plugins_url( '/src/block/testimonials/script.js', __FILE__ ),
			! is_admin() ? array( 'wp-editor', 'unified_blocks-block-js' ) : null,
			UTK_BLOCKS_VERSION,
			true
		);
	}
}
//add_action( 'enqueue_block_assets', 'ggm_enqueue_external_assets' );
