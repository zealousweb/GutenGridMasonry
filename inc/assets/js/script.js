var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
jQuery(() => {

    // Track initialized grids to prevent double initialization
    const initializedGrids = new Set();

    /** Responsive Grid Functionality */
    function applyResponsiveGrid() {
        // Media Grid responsive functionality
        jQuery('.gmfgb-mg-grid[data-grid-desktop][data-grid-tablet][data-grid-mobile]').each(function() {
            const $grid = jQuery(this);
            const gridId = $grid.attr('id') || 'mg-' + Math.random().toString(36).substr(2, 9);
            
            if (!$grid.attr('id')) {
                $grid.attr('id', gridId);
            }
            
            const desktop = parseInt($grid.attr('data-grid-desktop')) || 3;
            const tablet = parseInt($grid.attr('data-grid-tablet')) || 2;
            const mobile = parseInt($grid.attr('data-grid-mobile')) || 1;
            
            // Get gutter values from data attributes with 20px default
            const gutterDesktop = parseInt($grid.attr('data-gutter-desktop')) || 20;
            const gutterTablet = parseInt($grid.attr('data-gutter-tablet')) || 20;
            const gutterMobile = parseInt($grid.attr('data-gutter-mobile')) || 20;
            
            // Apply CSS custom properties with default 20px values
            $grid.css({
                '--grid-desktop': desktop,
                '--grid-tablet': tablet,
                '--grid-mobile': mobile,
                '--gutter-desktop': gutterDesktop + 'px',
                '--gutter-tablet': gutterTablet + 'px',
                '--gutter-mobile': gutterMobile + 'px'
            });
            
            // Force reflow for immediate visual update
            $grid[0].offsetHeight;
            
            // Relayout Isotope after applying responsive settings
            if ($grid.hasClass('isotope-initialized') && initializedGrids.has(gridId)) {
                try {
                    // Get current viewport gutter value
                    let currentGutter = gutterDesktop;
                    if (window.innerWidth >= 561 && window.innerWidth <= 767) {
                        currentGutter = gutterTablet;
                    } else if (window.innerWidth >= 320 && window.innerWidth <= 560) {
                        currentGutter = gutterMobile;
                    }
                    
                    $grid.isotope('option', 'masonry.gutter', currentGutter);
                    $grid.isotope('layout');
                } catch (e) {
                    console.log('Media Grid Isotope layout error for grid ' + gridId + ':', e);
                }
            }
        });
        
        // Post Grid responsive functionality
        jQuery('.gmfgb-pg-grid[data-grid-desktop][data-grid-tablet][data-grid-mobile]').each(function() {
            const $grid = jQuery(this);
            const gridId = $grid.attr('id') || 'pg-' + Math.random().toString(36).substr(2, 9);
            
            if (!$grid.attr('id')) {
                $grid.attr('id', gridId);
            }
            
            const desktop = parseInt($grid.attr('data-grid-desktop')) || 2;
            const tablet = parseInt($grid.attr('data-grid-tablet')) || 2;
            const mobile = parseInt($grid.attr('data-grid-mobile')) || 1;
            
            // Get gap value from computed styles or fallback to 20
            const computedStyle = window.getComputedStyle($grid[0]);
            const gapValue = parseInt(computedStyle.getPropertyValue('--gap')) || 20;
            
            // Apply CSS custom properties
            $grid.css({
                '--grid-desktop': desktop,
                '--grid-tablet': tablet,
                '--grid-mobile': mobile,
                '--gap': gapValue + 'px'
            });
            
            // Force reflow for immediate visual update
            $grid[0].offsetHeight;
            
            // Relayout Isotope after applying responsive settings
            if ($grid.hasClass('isotope-initialized') && initializedGrids.has(gridId)) {
                try {
                    $loopWrap = $grid.find('.gmfgb-pg-loop-wrap');
                    if ($loopWrap.length > 0) {
                        $loopWrap.isotope('option', 'masonry.gutter', gapValue);
                        $loopWrap.isotope('layout');
                    }
                } catch (e) {
                    console.log('Post Grid Isotope layout error for grid ' + gridId + ':', e);
                }
            }
        });
    }

    // Apply responsive grid immediately on page load
    applyResponsiveGrid();

    // Initialize Isotope after responsive settings are applied
    setTimeout(function() {
        /** Post Grid Isotope Masonry options - Initialize only if not already initialized */
        jQuery('.gmfgb-pg-grid:not(.isotope-initialized)').each(function() {
            const $grid = jQuery(this);
            const gridId = $grid.attr('id') || 'pg-' + Math.random().toString(36).substr(2, 9);
            
            if (!$grid.attr('id')) {
                $grid.attr('id', gridId);
            }
            
            // Skip if already initialized
            if (initializedGrids.has(gridId)) {
                return;
            }
            
            const $loopWrap = $grid.find('.gmfgb-pg-loop-wrap');
            
            if ($loopWrap.length > 0) {
                // Get gap value from CSS custom property or fallback to 20
                const computedStyle = window.getComputedStyle($grid[0]);
                const gapValue = parseInt(computedStyle.getPropertyValue('--gap')) || 20;
                
                try {
                    $loopWrap.isotope({
                        itemSelector: '.wp-block-post',
                        percentPosition: true,
                        masonry: {
                            gutter: gapValue,
                            columnWidth: '.gmfgb-pg-wrap'
                        }
                    });
                    $grid.addClass('isotope-initialized');
                    initializedGrids.add(gridId);
                    console.log('Post Grid Isotope initialized for grid: ' + gridId + ' with gap: ' + gapValue);
                } catch (e) {
                    console.log('Post Grid Isotope initialization error for grid ' + gridId + ':', e);
                }
            }
        });

        /** Media Grid Isotope Masonry options - Initialize only if not already initialized */
        jQuery('.gmfgb-mg-grid:not(.isotope-initialized)').each(function() {
            const $grid = jQuery(this);
            const gridId = $grid.attr('id') || 'mg-' + Math.random().toString(36).substr(2, 9);
            
            if (!$grid.attr('id')) {
                $grid.attr('id', gridId);
            }
            
            // Skip if already initialized
            if (initializedGrids.has(gridId)) {
                return;
            }
            
            if ($grid.find('.gmfgb-mg-media').length > 0) {
                // Get gutter values from data attributes with 20px default fallback
                const gutterDesktop = parseInt($grid.attr('data-gutter-desktop')) || 20;
                const gutterTablet = parseInt($grid.attr('data-gutter-tablet')) || 20;
                const gutterMobile = parseInt($grid.attr('data-gutter-mobile')) || 20;
                
                // Determine initial gutter based on current viewport (defaults to 20px)
                // Use actual gutter values for column gap
                let initialGutter = gutterDesktop;
                if (window.innerWidth >= 561 && window.innerWidth <= 767) {
                    initialGutter = gutterTablet;
                } else if (window.innerWidth >= 320 && window.innerWidth <= 560) {
                    initialGutter = gutterMobile;
                }
                
                try {
                    $grid.isotope({
                        itemSelector: '.gmfgb-mg-media',
                        percentPosition: true,
                        masonry: {
                            gutter: initialGutter, // Use actual gutter value for column gap
                            columnWidth: '.gmfgb-mg-media'
                        }
                    });
                    $grid.addClass('isotope-initialized');
                    initializedGrids.add(gridId);
                    console.log('Media Grid Isotope initialized for grid: ' + gridId + ' with gutter: ' + initialGutter + 'px');
                } catch (e) {
                    console.log('Media Grid Isotope initialization error for grid ' + gridId + ':', e);
                }
            }
        });

        // Re-apply responsive grid after Isotope initialization
        applyResponsiveGrid();
    }, 100);

    // Re-apply responsive grid on window resize with debouncing
    let resizeTimer;
    jQuery(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            applyResponsiveGrid();
            
            // Update Isotope gutter values for responsive breakpoints
            jQuery('.gmfgb-mg-grid.isotope-initialized').each(function() {
                const $grid = jQuery(this);
                const gutterDesktop = parseInt($grid.attr('data-gutter-desktop')) || 20;
                const gutterTablet = parseInt($grid.attr('data-gutter-tablet')) || 20;
                const gutterMobile = parseInt($grid.attr('data-gutter-mobile')) || 20;
                
                // Determine current gutter based on viewport (defaults to 20px)
                // Use actual gutter values for column gap
                let currentGutter = gutterDesktop;
                if (window.innerWidth >= 561 && window.innerWidth <= 767) {
                    currentGutter = gutterTablet;
                } else if (window.innerWidth >= 320 && window.innerWidth <= 560) {
                    currentGutter = gutterMobile;
                }
                
                try {
                    $grid.isotope('option', 'masonry.gutter', currentGutter);
                    $grid.isotope('layout');
                } catch (e) {
                    console.log('Media Grid Isotope resize update error:', e);
                }
            });
            
            // Update Post Grid gap values for responsive breakpoints
            jQuery('.gmfgb-pg-grid.isotope-initialized').each(function() {
                const $grid = jQuery(this);
                const $loopWrap = $grid.find('.gmfgb-pg-loop-wrap');
                
                if ($loopWrap.length > 0) {
                    // Get gap value from computed styles or fallback to 20
                    const computedStyle = window.getComputedStyle($grid[0]);
                    const gapValue = parseInt(computedStyle.getPropertyValue('--gap')) || 20;
                    
                    try {
                        $loopWrap.isotope('option', 'masonry.gutter', gapValue);
                        $loopWrap.isotope('layout');
                    } catch (e) {
                        console.log('Post Grid Isotope resize update error:', e);
                    }
                }
            });
        }, 250);
    });
    
    // Apply responsive grid when DOM changes (for admin editor)
    if (typeof wp !== 'undefined' && wp.data && wp.data.subscribe) {
        wp.data.subscribe(function() {
            setTimeout(applyResponsiveGrid, 100);
        });
    }

    // Fallback: Apply responsive grid settings after a longer delay to ensure everything is loaded
    setTimeout(function() {
        applyResponsiveGrid();
    }, 500);

    // Mutation observer to handle dynamically added content
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            let shouldApplyGrid = false;
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        const node = mutation.addedNodes[i];
                        if (node.nodeType === 1) { // Element node
                            if (node.classList && (node.classList.contains('gmfgb-mg-grid') || node.classList.contains('gmfgb-pg-grid'))) {
                                shouldApplyGrid = true;
                                break;
                            }
                            if (node.querySelector && (node.querySelector('.gmfgb-mg-grid') || node.querySelector('.gmfgb-pg-grid'))) {
                                shouldApplyGrid = true;
                                break;
                            }
                        }
                    }
                }
            });
            if (shouldApplyGrid) {
                setTimeout(applyResponsiveGrid, 50);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Admin editor specific handling
    if (jQuery('body').hasClass('wp-admin') || jQuery('.editor-styles-wrapper').length > 0) {
        // In admin editor, ensure grids don't conflict
        jQuery('.gmfgb-mg-grid, .gmfgb-pg-grid').each(function() {
            const $grid = jQuery(this);
            const gridId = $grid.attr('id') || Math.random().toString(36).substr(2, 9);
            
            if (!$grid.attr('id')) {
                $grid.attr('id', gridId);
            }
            
            // Ensure proper z-index stacking in admin
            $grid.css('z-index', '1');
        });
        
        // Prevent Isotope conflicts in admin editor
        jQuery('.gmfgb-mg-grid:not(.isotope-initialized)').each(function() {
            const $grid = jQuery(this);
            $grid.css({
                'display': 'flex',
                'flex-wrap': 'wrap',
                'row-gap': '20px' // Preserve row gap in admin
            });
        });
        
        jQuery('.gmfgb-pg-grid:not(.isotope-initialized) .gmfgb-pg-loop-wrap').each(function() {
            const $loopWrap = jQuery(this);
            $loopWrap.css({
                'display': 'flex',
                'flex-wrap': 'wrap',
                'gap': '20px'
            });
        });
    } else {
        // Frontend specific handling - ensure row gap is preserved
        jQuery('.gmfgb-mg-grid:not(.isotope-initialized)').each(function() {
            const $grid = jQuery(this);
            $grid.css({
                'row-gap': '20px !important',
                'column-gap': 'var(--gutter-desktop, 20px) !important'
            });
        });
    }

    /** Fancybox bindings for Media Grid */
    jQuery("[data-fancybox]").each(function () {
        $this = jQuery(this);
        $datafancyclass = jQuery(this).attr('data-fancy-class');
        console.log($datafancyclass);
        Fancybox.bind('[data-fancybox="' + $datafancyclass + '"]', {
            mainClass: `gmfgb-fancy-custom ` + $datafancyclass + '-fancy-custom',
        });
    });
});
/** ----------------------------------------------------------------------------
Script on ready end */