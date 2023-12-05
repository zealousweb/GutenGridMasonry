<?php
/**
 * Plugin Name:       Grid Masonry for Gutenberg
 * Description:       Seamless Masonry Layouts with Gutenberg allows users to display their posts and media in a masonry design with integrated lightbox options.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            <a href="https://www.zealousweb.com/">ZealousWeb</a>
 * PHP Version:       7.0
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gridmasonryforgutenberg
 *
 * @category  MasonryGridBlocks
 * @package   Grid_Masonry_For_Gutenberg
 * @author    ZealousWeb <support@zealousweb.com>
 * @copyright 2023 ZealousWeb
 * @license   GPL-2.0-or-later https: //www.gnu.org/licenses/gpl-2.0.html
 * @link      https: //www.gnu.org/licenses/gpl-2.0.html
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
    if (array_search('grid-masonry-for-gutenberg', array_column($categories, 'slug'), true) === false) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'grid-masonry-for-gutenberg',
                    'title' => __('ZealBlocks', 'gridmasonryforgutenberg'),
                    'icon' => '',
                ),
            )
        );
    }
    return $categories;
}
add_action('block_categories_all', 'Ggm_Plugin_Block_Categories', 10, 2);