<?php
/**
 * Plugin Name:       Grid Masonry for Guten blocks
 * Description:       Seamless Masonry Layouts with Gutenberg allows users to display their posts and media in a masonry design with integrated lightbox options.
 * Requires at least: 5.9
 * Requires PHP:      7.4
 * PHP version :      7.4
 * Version:           1.0.0
 * Author:            <a href="https://www.zealousweb.com/">ZealousWeb</a>
 * License:           GPLv3 or later License
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       grid-masonry-for-guten-blocks
 *
 * @category  MasonryGridBlocks
 * @package   Grid-Masonry-for-Guten-Blocks
 * @author    ZealousWeb <support@zealousweb.com>
 * @copyright 2023 ZealousWeb
 * @license   GPLv3 or later License
 * @link      http://www.gnu.org/licenses/gpl-3.0.html
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

if (!defined('GRID_MASONRY_FILE')) {
    define('GRID_MASONRY_FILE', __FILE__);
}

if (!defined('GRID_MASONRY_DIR')) {
    define('GRID_MASONRY_DIR', dirname(__FILE__));
}

if (!defined('GRID_MASONRY_BLOCK_PLUGIN_NAME')) {
    define('GRID_MASONRY_BLOCK_PLUGIN_NAME', 'Grid Masonry for Gutenberg');
}

if (!defined('GRID_MASONRY_VERSION')) {
    define('GRID_MASONRY_VERSION', time());
}

if (!defined('GRID_MASONRY')) {
    define('GRID_MASONRY', 'GRID MASONRY');
}

//print_r(plugin_dir_url(GRID_MASONRY_FILE ).GRID_MASONRY_BLOCK_PLUGIN_NAME);
// Add custom function file.
require_once GRID_MASONRY_DIR . '/inc/custom-functions.php';

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
function Grid_Masonry_For_Gutenberg_Block_init()
{
    
    wp_enqueue_script(
        'masonry-lib',
        plugins_url('/inc/assets/js/3.0.6_dist_isotope.pkgd.min.js', __FILE__),
        array('jquery'),
        '3.0.6',
        true
    );
    
    
    wp_enqueue_script(
        'fancyapp-lib',
        plugins_url('/inc/assets/js/fancybox.umd.js', __FILE__),
        array('jquery'),
        '5.0.24',
        true
    );
    
    wp_enqueue_script(
        'script-custom',
        plugins_url('/inc/assets/js/script.js', __FILE__),
        array('jquery', 'fancyapp-lib', 'masonry-lib'),
        GRID_MASONRY_VERSION,
        true
    );
    
    wp_enqueue_style(
        'fancyapp-css',
        plugins_url('/inc/assets/css/fancybox.css', __FILE__),
        '5.0.24',
        true
    );
    
    wp_enqueue_style(
        'front-styles',
        plugins_url('/build/style-index.css', __FILE__),
        '5.0.24',
        true
    );
    
    // wp_localize_script('main-script', 'admin_theme_object', array('themeurl' => get_theme_file_uri()));
    register_block_type(__DIR__ . '/build');
    
}
add_action('init', 'Grid_Masonry_For_Gutenberg_Block_init');

/**
 * Undocumented function
 *
 * @param array $categories - list of category.
 * 
 * @return mixed Return description.
 */
function Ggm_Plugin_Block_categories( $categories )
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
add_action('block_categories_all', 'Ggm_Plugin_Block_Categories', 10, 2);