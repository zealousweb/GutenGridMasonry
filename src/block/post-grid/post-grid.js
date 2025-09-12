/**
 * Import Styles 
 */
import './style.scss';
import './editor.scss';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { RangeControl, Panel, PanelBody, ToggleControl } from '@wordpress/components';
import GridColumnsSetting from '../media-grid/GridColumnsSetting';
import BorderSettings from '../media-grid/BorderSettings';


/** Post Template */
const POST_GRID_TEMPLATE = [
    /** Additional Heading and Description */
    ['core/group', { className: 'gmfgb-pg-title' },
        [
            ['core/paragraph', { className: 'gmfgb-pg-sub-heading', placeholder: __('Your amazing blog posts', 'grid-masonry-for-guten-blocks'), align: 'center', style: { typography: { fontSize: '16px', fontWeight: 700, textTransform: 'uppercase' }, spacing: { margin: { bottom: '15px', top: '0px', right: '0px', left: '0px' } } } }],
            ['core/heading', { className: 'gmfgb-pg-main-heading', placeholder: __('Create a Quick and Easy Post Grid', 'grid-masonry-for-guten-blocks'), textAlign: 'center', style: { typography: { fontWeight: 700, }, spacing: { margin: { bottom: '25px', top: '0px', right: '0px', left: '0px' } } } }],
        ]
    ],

    /** Main Post Loop/Query with Default Wordpress Posts */
    ['core/query', { className: 'gmfgb-pg-loop-wrap', query: { inherit: false, offset: 0, postType: 'post', enhancedPagination: true }, templateLock: true, displayLayout: false, align: false, },
        [
            ['core/post-template', { templateLock: true, layout: false, displayLayout: false, align: false, },
                [['core/group', { 
                    className: 'gmfgb-pg-wrap', 
                    templateLock: true 
                },
                    [
                        ['core/post-featured-image', { className: 'gmfgb-pg-featured-img', style: { width: '100%', height: '100%', spacing: { margin: { bottom: '0px', top: '0px', right: '0px', left: '0px' } } } }],
                        ['core/group', { className: 'gmfgb-pg-content', style: { spacing: { padding: { top: '100px', right: '25px', bottom: '25px', left: '25px' }, margin: { top: '0px', bottom: '0px' } } } }, [
                            ['core/post-title', { className: 'gmfgb-pg-title', style: { color: { text: '#ffffff' }, typography: { fontSize: '20px', fontWeight: 700 }, spacing: { margin: { bottom: '15px', top: '15px', right: '0px', left: '0px' } } } }],
                            ['core/post-excerpt', { excerptLength: 20, moreText: '&nbsp;', className: 'gmfgb-pg-description', style: { typography: { lineHeight: 1.2 }, color: { text: '#ffffff' }, spacing: { margin: { top: '0', bottom: '20px', left: '0', right: '0' } } } }],
                            ['core/read-more', { className: 'gmfgb-pg-link', content: __('Read More →', 'grid-masonry-for-guten-blocks'), style: { color: { text: '#ffffff' }, typography: { textDecoration: 'underline', fontSize: '16px' }, spacing: { margin: { 'top': '0', 'bottom': '20px', 'left': '0', 'right': '0' } } } }],
                            ['core/group', { className: 'gmfgb-pg-date-wrap', style: { spacing: { padding: { top: '0', right: '0', bottom: '0', left: '0' }, margin: { top: '0px', bottom: '0px' } } } }, [
                                ['core/post-date', { className: 'gmfgb-pg-date', style: { spacing: { margin: '0' }, color: { text: '#ffffff' }, typography: { fontSize: '13px' } } }],
                                ['core/post-author', { className: 'gmfgb-pg-author', style: { typography: { fontSize: '13px' }, spacing: { 'margin': '0' } } }],
                            ]],
                        ]],
                    ],
                ]],
            ],
            ['core/query-pagination', { className: 'post-pagination' }],
        ],
    ],
    ['core/group', { className: 'gmfgb-pg-cta-button' },
        [
            ['core/buttons', { layout: { type: 'flex', justifyContent: 'center' }, style: { spacing: { margin: { top: '25px' } } } }, [['core/button', { text: __('Read All Posts', 'grid-masonry-for-guten-blocks') }]]],
        ]
    ]
];


/**
 * Post Grid block registration
 */
registerBlockType('grid-masonry-for-guten-blocks/post-grid', {
    apiVersion: 2,
    title: __('Post Grid', 'grid-masonry-for-guten-blocks'),
    description: __('An advanced block that allows displaying post types based on different query parameters and visual configurations.', 'grid-masonry-for-guten-blocks'),
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M22 9.999V20a1 1 0 0 1-1 1h-8V9.999h9zm-11 6V21H3a1 1 0 0 1-1-1v-4.001h9zM11 3v10.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v3.999h-9V3h8z"></path> </g> </g></svg>,
    category: 'zealblocks',
    example: {},
    keywords: [
        __('post-list', 'grid-masonry-for-guten-blocks'),
        __('Post Listing', 'grid-masonry-for-guten-blocks'),
    ],
    supports: {
        displayLayout: true,
        layout: true,
        align: true,
    },
    attributes: {
        align: {
            type: 'string',
            default: 'wide',
        },
        gridItemDesktop: {
            type: 'number',
            default: 2,
        },
        gridItemTablet: {
            type: 'number',
            default: 2,
        },
        gridItemMobile: {
            type: 'number',
            default: 1,
        },
        gap: {
            type: 'number',
            default: 20,
        },
        redirect: {
            type: 'boolean',
            default: false,
        },
        /** Border width */
        borderWidth: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border radius */
        borderRadius: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border type */
        borderType: {
            type: 'string',
            default: 'none',
        },
        /** Border color */
        borderColor: {
            type: 'string',
            default: '#000000',
        },
    },

    //onChange: sliderIsUpdated(),
    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { gridItemDesktop } = attributes;
        const { gridItemTablet } = attributes;
        const { gridItemMobile } = attributes;
        const { gap } = attributes;
        const { redirect } = attributes;
        const { borderWidth } = attributes;
        const { borderRadius } = attributes;
        const { borderType } = attributes;
        const { borderColor } = attributes;

        return (
            <>
                <InspectorControls key="setting">
                    <Panel>
                        <PanelBody title={__('PostGrid Settings', 'grid-masonry-for-guten-blocks')}>
                            
                            <GridColumnsSetting
                                columns={{
                                    desktop: gridItemDesktop,
                                    tablet: gridItemTablet,
                                    mobile: gridItemMobile,
                                }}
                                setColumns={({ desktop, tablet, mobile }) => {
                                    setAttributes({
                                        gridItemDesktop: desktop,
                                        gridItemTablet: tablet,
                                        gridItemMobile: mobile,
                                    });
                                }}
                            />
                            <RangeControl
                                label={__("Gap Between Two Post ", "grid-masonry-for-guten-blocks")}
                                value={gap}
                                onChange={(value) => setAttributes({ gap: value })}
                                min={10}
                                max={60}
                                step={10}
                            />
                            <ToggleControl
                                label={__("Clickable Full Post", "grid-masonry-for-guten-blocks")}
                                checked={redirect}
                                onChange={(val) => {
                                    setAttributes({ redirect: val });
                                }}
                            />
                            <p className="description">
                                Please enable the entire post to be clickable, not just the "Read More" text.
                            </p>
                        </PanelBody>
                    </Panel>

                    {/* Border Settings Panel */}
                    <Panel>
                        <PanelBody title="Border Settings">
                            <BorderSettings
                                borderWidth={borderWidth}
                                setBorderWidth={({ top, right, bottom, left }) => setAttributes({ borderWidth: { top, right, bottom, left } })}
                                borderRadius={borderRadius}
                                setBorderRadius={({ top, right, bottom, left }) => setAttributes({ borderRadius: { top, right, bottom, left } })}
                                borderType={borderType}
                                setBorderType={(value) => setAttributes({ borderType: value })}
                                borderColor={borderColor}
                                setBorderColor={(value) => setAttributes({ borderColor: value })}
                            />
                        </PanelBody>
                    </Panel>
                </InspectorControls>
                <div {...useBlockProps({ 
                    className: `gmfgb-pg-grid grid-size-${gridItemDesktop}`, 
                    templateLock: true,
                    'data-grid-desktop': gridItemDesktop,
                    'data-grid-tablet': gridItemTablet,
                    'data-grid-mobile': gridItemMobile,
                    'data-border-width-desktop': JSON.stringify(borderWidth),
                    'data-border-width-tablet': JSON.stringify(borderWidth),
                    'data-border-width-mobile': JSON.stringify(borderWidth),
                    'data-border-radius-desktop': JSON.stringify(borderRadius),
                    'data-border-radius-tablet': JSON.stringify(borderRadius),
                    'data-border-radius-mobile': JSON.stringify(borderRadius),
                    'data-border-type-desktop': borderType,
                    'data-border-type-tablet': borderType,
                    'data-border-type-mobile': borderType,
                    'data-border-color-desktop': borderColor,
                    'data-border-color-tablet': borderColor,
                    'data-border-color-mobile': borderColor,
                    style: {
                        '--grid-desktop': gridItemDesktop,
                        '--grid-tablet': gridItemTablet,
                        '--grid-mobile': gridItemMobile,
                        '--gap': gap + 'px',
                        '--border-width-desktop-top': (borderWidth?.top || 0) + 'px',
                        '--border-width-desktop-right': (borderWidth?.right || 0) + 'px',
                        '--border-width-desktop-bottom': (borderWidth?.bottom || 0) + 'px',
                        '--border-width-desktop-left': (borderWidth?.left || 0) + 'px',
                        '--border-width-tablet-top': (borderWidth?.top || 0) + 'px',
                        '--border-width-tablet-right': (borderWidth?.right || 0) + 'px',
                        '--border-width-tablet-bottom': (borderWidth?.bottom || 0) + 'px',
                        '--border-width-tablet-left': (borderWidth?.left || 0) + 'px',
                        '--border-width-mobile-top': (borderWidth?.top || 0) + 'px',
                        '--border-width-mobile-right': (borderWidth?.right || 0) + 'px',
                        '--border-width-mobile-bottom': (borderWidth?.bottom || 0) + 'px',
                        '--border-width-mobile-left': (borderWidth?.left || 0) + 'px',
                        '--border-radius-desktop-top': (borderRadius?.top || 0) + 'px',
                        '--border-radius-desktop-right': (borderRadius?.right || 0) + 'px',
                        '--border-radius-desktop-bottom': (borderRadius?.bottom || 0) + 'px',
                        '--border-radius-desktop-left': (borderRadius?.left || 0) + 'px',
                        '--border-radius-tablet-top': (borderRadius?.top || 0) + 'px',
                        '--border-radius-tablet-right': (borderRadius?.right || 0) + 'px',
                        '--border-radius-tablet-bottom': (borderRadius?.bottom || 0) + 'px',
                        '--border-radius-tablet-left': (borderRadius?.left || 0) + 'px',
                        '--border-radius-mobile-top': (borderRadius?.top || 0) + 'px',
                        '--border-radius-mobile-right': (borderRadius?.right || 0) + 'px',
                        '--border-radius-mobile-bottom': (borderRadius?.bottom || 0) + 'px',
                        '--border-radius-mobile-left': (borderRadius?.left || 0) + 'px',
                        '--border-type-desktop': borderType,
                        '--border-type-tablet': borderType,
                        '--border-type-mobile': borderType,
                        '--border-color-desktop': borderColor,
                        '--border-color-tablet': borderColor,
                        '--border-color-mobile': borderColor
                    }
                })}>
                    <InnerBlocks
                        template={POST_GRID_TEMPLATE}
                    />
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { gridItemDesktop } = attributes;
        const { gridItemTablet } = attributes;
        const { gridItemMobile } = attributes;
        const { gap } = attributes;
        const { redirect } = attributes;
        const { borderWidth } = attributes;
        const { borderRadius } = attributes;
        const { borderType } = attributes;
        const { borderColor } = attributes;
        
        return (
            <div {...useBlockProps.save({ 
                className: `gmfgb-pg-grid gmfgb-grid grid-size-${gridItemDesktop} ${redirect ? 'anchor' : 'no-anchor'}`,
                'data-grid-desktop': gridItemDesktop,
                'data-grid-tablet': gridItemTablet,
                'data-grid-mobile': gridItemMobile,
                'data-border-width-desktop': JSON.stringify(borderWidth),
                'data-border-width-tablet': JSON.stringify(borderWidth),
                'data-border-width-mobile': JSON.stringify(borderWidth),
                'data-border-radius-desktop': JSON.stringify(borderRadius),
                'data-border-radius-tablet': JSON.stringify(borderRadius),
                'data-border-radius-mobile': JSON.stringify(borderRadius),
                'data-border-type-desktop': borderType,
                'data-border-type-tablet': borderType,
                'data-border-type-mobile': borderType,
                'data-border-color-desktop': borderColor,
                'data-border-color-tablet': borderColor,
                'data-border-color-mobile': borderColor,
                style: {
                    '--grid-desktop': gridItemDesktop,
                    '--grid-tablet': gridItemTablet,
                    '--grid-mobile': gridItemMobile,
                    '--gap': gap + 'px',
                    '--border-width-desktop-top': (borderWidth?.top || 0) + 'px',
                    '--border-width-desktop-right': (borderWidth?.right || 0) + 'px',
                    '--border-width-desktop-bottom': (borderWidth?.bottom || 0) + 'px',
                    '--border-width-desktop-left': (borderWidth?.left || 0) + 'px',
                    '--border-width-tablet-top': (borderWidth?.top || 0) + 'px',
                    '--border-width-tablet-right': (borderWidth?.right || 0) + 'px',
                    '--border-width-tablet-bottom': (borderWidth?.bottom || 0) + 'px',
                    '--border-width-tablet-left': (borderWidth?.left || 0) + 'px',
                    '--border-width-mobile-top': (borderWidth?.top || 0) + 'px',
                    '--border-width-mobile-right': (borderWidth?.right || 0) + 'px',
                    '--border-width-mobile-bottom': (borderWidth?.bottom || 0) + 'px',
                    '--border-width-mobile-left': (borderWidth?.left || 0) + 'px',
                    '--border-radius-desktop-top': (borderRadius?.top || 0) + 'px',
                    '--border-radius-desktop-right': (borderRadius?.right || 0) + 'px',
                    '--border-radius-desktop-bottom': (borderRadius?.bottom || 0) + 'px',
                    '--border-radius-desktop-left': (borderRadius?.left || 0) + 'px',
                    '--border-radius-tablet-top': (borderRadius?.top || 0) + 'px',
                    '--border-radius-tablet-right': (borderRadius?.right || 0) + 'px',
                    '--border-radius-tablet-bottom': (borderRadius?.bottom || 0) + 'px',
                    '--border-radius-tablet-left': (borderRadius?.left || 0) + 'px',
                    '--border-radius-mobile-top': (borderRadius?.top || 0) + 'px',
                    '--border-radius-mobile-right': (borderRadius?.right || 0) + 'px',
                    '--border-radius-mobile-bottom': (borderRadius?.bottom || 0) + 'px',
                    '--border-radius-mobile-left': (borderRadius?.left || 0) + 'px',
                    '--border-type-desktop': borderType,
                    '--border-type-tablet': borderType,
                    '--border-type-mobile': borderType,
                    '--border-color-desktop': borderColor,
                    '--border-color-tablet': borderColor,
                    '--border-color-mobile': borderColor
                }
            })}>
                <InnerBlocks.Content />
            </div>
        );
    },
});