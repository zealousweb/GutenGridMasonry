<?php
/**
 * Custom functions.
 * 
 * @category  MasonryGridBlocks
 * @package   Grid_Masonry_For_Guten
 * @author    ZealousWeb <support@zealousweb.com>
 * @copyright 2023 ZealousWeb
 * @license   GPLv3 or later License
 * @link      http://www.gnu.org/licenses/gpl-3.0.html
 */

/**
 * Generate unique ID for grid blocks
 * 
 * @param string $prefix The prefix for the ID
 * @return string Unique ID
 */
function gmfgb_generate_unique_id($prefix = 'grid') {
    static $counter = 0;
    $counter++;
    return $prefix . '-' . uniqid() . '-' . $counter;
}

/**
 * Add unique IDs to grid blocks to prevent conflicts
 * 
 * @param string $content The post content
 * @return string Modified content with unique IDs
 */
function gmfgb_add_unique_ids_to_grids($content) {
    // Add unique IDs to media grids
    $content = preg_replace_callback(
        '/<div([^>]*class="[^"]*gmfgb-mg-grid[^"]*"[^>]*)>/',
        function($matches) {
            $div_attrs = $matches[1];
            // Check if ID already exists
            if (strpos($div_attrs, 'id=') === false) {
                $unique_id = gmfgb_generate_unique_id('mg');
                return '<div' . $div_attrs . ' id="' . $unique_id . '">';
            }
            return $matches[0];
        },
        $content
    );
    
    // Add unique IDs to post grids
    $content = preg_replace_callback(
        '/<div([^>]*class="[^"]*gmfgb-pg-grid[^"]*"[^>]*)>/',
        function($matches) {
            $div_attrs = $matches[1];
            // Check if ID already exists
            if (strpos($div_attrs, 'id=') === false) {
                $unique_id = gmfgb_generate_unique_id('pg');
                return '<div' . $div_attrs . ' id="' . $unique_id . '">';
            }
            return $matches[0];
        },
        $content
    );
    
    return $content;
}

// Apply the filter to add unique IDs
add_filter('the_content', 'gmfgb_add_unique_ids_to_grids', 20);

/**
 * Add data attributes to grid blocks for responsive functionality
 * 
 * @param string $block_content The block content
 * @param array $block The block data
 * @return string Modified block content
 */
function gmfgb_add_data_attributes_to_grids($block_content, $block) {
    // Handle Media Grid blocks
    if ($block['blockName'] === 'grid-masonry-for-guten-blocks/media-grid') {
        $attributes = $block['attrs'];
        
        // Extract grid settings
        $grid_desktop = isset($attributes['gridItemDesktop']) ? $attributes['gridItemDesktop'] : 3;
        $grid_tablet = isset($attributes['gridItemTablet']) ? $attributes['gridItemTablet'] : 2;
        $grid_mobile = isset($attributes['gridItemMobile']) ? $attributes['gridItemMobile'] : 1;
        
        // Add data attributes if they don't exist
        if (strpos($block_content, 'data-grid-desktop') === false) {
            $block_content = str_replace(
                'class="gmfgb-mg-grid',
                'class="gmfgb-mg-grid" data-grid-desktop="' . $grid_desktop . '" data-grid-tablet="' . $grid_tablet . '" data-grid-mobile="' . $grid_mobile . '"',
                $block_content
            );
        }
    }
    
    // Handle Post Grid blocks
    if ($block['blockName'] === 'grid-masonry-for-guten-blocks/post-grid') {
        $attributes = $block['attrs'];
        
        // Extract grid settings
        $grid_desktop = isset($attributes['gridItemDesktop']) ? $attributes['gridItemDesktop'] : 2;
        $grid_tablet = isset($attributes['gridItemTablet']) ? $attributes['gridItemTablet'] : 2;
        $grid_mobile = isset($attributes['gridItemMobile']) ? $attributes['gridItemMobile'] : 1;
        
        // Add data attributes if they don't exist
        if (strpos($block_content, 'data-grid-desktop') === false) {
            $block_content = str_replace(
                'class="gmfgb-pg-grid',
                'class="gmfgb-pg-grid" data-grid-desktop="' . $grid_desktop . '" data-grid-tablet="' . $grid_tablet . '" data-grid-mobile="' . $grid_mobile . '"',
                $block_content
            );
        }
    }
    
    return $block_content;
}

// Apply the filter to add data attributes
add_filter('render_block', 'gmfgb_add_data_attributes_to_grids', 10, 2);

/**
 * Add CSS custom properties to grid blocks for responsive functionality
 * 
 * @param string $block_content The block content
 * @param array $block The block data
 * @return string Modified block content
 */
function gmfgb_add_css_custom_properties($block_content, $block) {
    // Handle Media Grid blocks
    if ($block['blockName'] === 'grid-masonry-for-guten-blocks/media-grid') {
        $attributes = $block['attrs'];
        
        // Extract grid settings
        $grid_desktop = isset($attributes['gridItemDesktop']) ? $attributes['gridItemDesktop'] : 3;
        $grid_tablet = isset($attributes['gridItemTablet']) ? $attributes['gridItemTablet'] : 2;
        $grid_mobile = isset($attributes['gridItemMobile']) ? $attributes['gridItemMobile'] : 1;
        
        // Add CSS custom properties if they don't exist
        if (strpos($block_content, '--grid-desktop') === false) {
            $style_attr = 'style="--grid-desktop: ' . $grid_desktop . '; --grid-tablet: ' . $grid_tablet . '; --grid-mobile: ' . $grid_mobile . ';"';
            $block_content = str_replace(
                'class="gmfgb-mg-grid',
                'class="gmfgb-mg-grid" ' . $style_attr,
                $block_content
            );
        }
    }
    
    // Handle Post Grid blocks
    if ($block['blockName'] === 'grid-masonry-for-guten-blocks/post-grid') {
        $attributes = $block['attrs'];
        
        // Extract grid settings
        $grid_desktop = isset($attributes['gridItemDesktop']) ? $attributes['gridItemDesktop'] : 2;
        $grid_tablet = isset($attributes['gridItemTablet']) ? $attributes['gridItemTablet'] : 2;
        $grid_mobile = isset($attributes['gridItemMobile']) ? $attributes['gridItemMobile'] : 1;
        
        // Add CSS custom properties if they don't exist
        if (strpos($block_content, '--grid-desktop') === false) {
            $style_attr = 'style="--grid-desktop: ' . $grid_desktop . '; --grid-tablet: ' . $grid_tablet . '; --grid-mobile: ' . $grid_mobile . ';"';
            $block_content = str_replace(
                'class="gmfgb-pg-grid',
                'class="gmfgb-pg-grid" ' . $style_attr,
                $block_content
            );
        }
    }
    
    return $block_content;
}

// Apply the filter to add CSS custom properties
add_filter('render_block', 'gmfgb_add_css_custom_properties', 15, 2);
