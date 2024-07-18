<?php
/**
 * Plugin Name:       Grid Masonry for Guten blocks
 * Description:       Seamless Masonry Layouts with Gutenberg allows users to display their posts and media in a masonry design with integrated lightbox options.
 * Requires at least: 5.9
 * Requires PHP:      7.4
 * Version:           1.0.2
 * Author:            <a href="https://www.zealousweb.com/">ZealousWeb</a>
 * License:           GPLv3 or later License
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       grid-masonry-for-guten-blocks
 *
 * @category  ZealBlocks
 * @package   Grid-Masonry-for-Guten-Blocks
 * @author    ZealousWeb <support@zealousweb.com>
 * @copyright 2024 ZealousWeb
 * @license   GPLv3 or later License
 * @link      http://www.gnu.org/licenses/gpl-3.0.html
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!defined('GMFGB_FILE')) {
    define('GMFGB_FILE', __FILE__);
}

if (!defined('GMFGB_DIR')) {
    define('GMFGB_DIR', dirname(__FILE__));
}

if (!defined('GMFGB_BLOCK_PLUGIN_NAME')) {
    define('GMFGB_BLOCK_PLUGIN_NAME', 'Grid Masonry for Gutenberg');
}

if (!defined('GMFGB_VERSION')) {
    define('GMFGB_VERSION', '1.0.2');
}

if (!defined('GMFGB')) {
    define('GMFGB', 'GRID MASONRY');
}

//print_r(plugin_dir_url(GMFGB_FILE ).GMFGB_BLOCK_PLUGIN_NAME);
// Add custom function file.
require_once GMFGB_DIR . '/inc/custom-functions.php';

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
function Gmfgb_Plugin_init()
{
    /** Masonry Library */
    wp_enqueue_script(
        'masonry-lib',
        plugins_url('/inc/assets/js/3.0.6_dist_isotope.pkgd.min.js', __FILE__),
        array('jquery'),
        '3.0.6',
        true
    );
    
    /** FancyBox/FancyApp Library */
    wp_enqueue_script(
        'fancyapp-lib',
        plugins_url('/inc/assets/js/fancybox.umd.js', __FILE__),
        array('jquery'),
        '5.0.34',
        true
    );
    
    /** Custom Plugin Script */
    wp_enqueue_script(
        'script-custom',
        plugins_url('/inc/assets/js/script.js', __FILE__),
        array('jquery', 'fancyapp-lib', 'masonry-lib'),
        GMFGB_VERSION,
        true
    );

    wp_enqueue_script(
        'script-custom-border',
        plugins_url('/inc/assets/js/border-none.js', __FILE__),
        array('jquery', 'fancyapp-lib', 'masonry-lib'),
        GMFGB_VERSION,
        true
    );
    
    /** FancyBox/FancyApp Library CSS */
    wp_enqueue_style(
        'fancyapp-css',
        plugins_url('/inc/assets/css/fancybox.css', __FILE__),
        '5.0.34',
        true
    );
    
    /** Custom Plugin Style */
    wp_enqueue_style(
        'front-styles',
        plugins_url('/build/style-index.css', __FILE__),
        GMFGB_VERSION,
        true
    );
    
    /** Register Block */
    register_block_type(__DIR__ . '/build');
    
}
add_action('init', 'Gmfgb_Plugin_init');

/**
 * Created Category function
 *
 * @param array $categories - list of category.
 * 
 * @return mixed Return description.
 */
function Gmfgb_Plugin_Block_categories( $categories )
{
    if (array_search('zealblocks', array_column($categories, 'slug'), true) === false) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'zealblocks',
                    'title' => __('ZealBlocks', 'grid-masonry-for-gutenberg'),
                    'icon' => '',
                ),
            )
        );
    }
    return $categories;
}
add_action('block_categories_all', 'Gmfgb_Plugin_Block_categories', 10, 2);


