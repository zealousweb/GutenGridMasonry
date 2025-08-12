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
    ['core/group', { className: 'gmfgb-pg-title', style: { border: { style: 'solid', width: '0', radius: '0', color: '#dcdcdc' } } },
        [
            ['core/paragraph', { className: 'gmfgb-pg-sub-heading', placeholder: __('Your amazing blog posts', 'grid-masonry-for-guten-blocks'), align: 'center', style: { typography: { fontSize: '16px', fontWeight: 700, textTransform: 'uppercase' }, spacing: { margin: { bottom: '15px', top: '0px', right: '0px', left: '0px' } } } }],
            ['core/heading', { className: 'gmfgb-pg-main-heading', placeholder: __('Create a Quick and Easy Post Grid', 'grid-masonry-for-guten-blocks'), textAlign: 'center', style: { typography: { fontWeight: 700, }, spacing: { margin: { bottom: '25px', top: '0px', right: '0px', left: '0px' } } } }],
        ]
    ],

    /** Main Post Loop/Query with Default Wordpress Posts */
    ['core/query', { className: 'gmfgb-pg-loop-wrap border-none', query: { inherit: false, offset: 0, postType: 'post', enhancedPagination: true }, templateLock: true, displayLayout: false, align: false, },
        [
            ['core/post-template', { templateLock: true, layout: false, displayLayout: false, align: false, },
                [['core/group', { 
                    className: 'gmfgb-pg-wrap border-none', 
                    style: { 
                        border: { 
                            style: 'var(--border-type-desktop, none)', 
                            width: 'var(--border-width-desktop, 0px)', 
                            radius: 'var(--border-radius-desktop, 0px)', 
                            color: 'var(--border-color-desktop, #000000)' 
                        } 
                    }, 
                    templateLock: true 
                },
                    [
                        ['core/post-featured-image', { className: 'gmfgb-pg-featured-img border-none', style: { width: '100%', height: '100%', spacing: { margin: { bottom: '0px', top: '0px', right: '0px', left: '0px' } } } }],
                        ['core/group', { className: 'gmfgb-pg-content border-none', style: { spacing: { padding: { top: '100px', right: '25px', bottom: '25px', left: '25px' }, margin: { top: '0px', bottom: '0px' } } } }, [
                            ['core/post-title', { className: 'gmfgb-pg-title', style: { color: { text: '#ffffff' }, typography: { fontSize: '20px', fontWeight: 700 }, spacing: { margin: { bottom: '15px', top: '15px', right: '0px', left: '0px' } } } }],
                            ['core/post-excerpt', { excerptLength: 20, moreText: '&nbsp;', className: 'gmfgb-pg-description', style: { typography: { lineHeight: 1.2 }, color: { text: '#ffffff' }, spacing: { margin: { top: '0', bottom: '20px', left: '0', right: '0' } } } }],
                            ['core/read-more', { className: 'gmfgb-pg-link', content: __('Read More →', 'grid-masonry-for-guten-blocks'), style: { color: { text: '#ffffff' }, typography: { textDecoration: 'underline', fontSize: '16px' }, spacing: { margin: { 'top': '0', 'bottom': '20px', 'left': '0', 'right': '0' } } } }],
                            ['core/group', { className: 'gmfgb-pg-date-wrap border-none', style: { spacing: { padding: { top: '0', right: '0', bottom: '0', left: '0' }, margin: { top: '0px', bottom: '0px' } } } }, [
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
        /** Border width for Desktop */
        borderWidthDesktop: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border width for Tablet */
        borderWidthTablet: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border width for Mobile */
        borderWidthMobile: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border radius for Desktop */
        borderRadiusDesktop: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border radius for Tablet */
        borderRadiusTablet: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border radius for Mobile */
        borderRadiusMobile: {
            type: 'object',
            default: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        /** Border type for Desktop */
        borderTypeDesktop: {
            type: 'string',
            default: 'none',
        },
        /** Border type for Tablet */
        borderTypeTablet: {
            type: 'string',
            default: 'none',
        },
        /** Border type for Mobile */
        borderTypeMobile: {
            type: 'string',
            default: 'none',
        },
        /** Border color for Desktop */
        borderColorDesktop: {
            type: 'string',
            default: '#000000',
        },
        /** Border color for Tablet */
        borderColorTablet: {
            type: 'string',
            default: '#000000',
        },
        /** Border color for Mobile */
        borderColorMobile: {
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
        const { borderWidthDesktop } = attributes;
        const { borderWidthTablet } = attributes;
        const { borderWidthMobile } = attributes;
        const { borderRadiusDesktop } = attributes;
        const { borderRadiusTablet } = attributes;
        const { borderRadiusMobile } = attributes;
        const { borderTypeDesktop } = attributes;
        const { borderTypeTablet } = attributes;
        const { borderTypeMobile } = attributes;
        const { borderColorDesktop } = attributes;
        const { borderColorTablet } = attributes;
        const { borderColorMobile } = attributes;

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

                    {/* Photo Settings Panel */}
                    <Panel>
                        <PanelBody title="Photo Settings">
                            <BorderSettings
                                borderWidth={borderWidthDesktop}
                                setBorderWidth={(value) => {
                                    setAttributes({
                                        borderWidthDesktop: value,
                                        borderWidthTablet: value,
                                        borderWidthMobile: value,
                                    });
                                }}
                                borderRadius={borderRadiusDesktop}
                                setBorderRadius={(value) => {
                                    setAttributes({
                                        borderRadiusDesktop: value,
                                        borderRadiusTablet: value,
                                        borderRadiusMobile: value,
                                    });
                                }}
                                borderType={borderTypeDesktop}
                                setBorderType={(value) => {
                                    setAttributes({
                                        borderTypeDesktop: value,
                                        borderTypeTablet: value,
                                        borderTypeMobile: value,
                                    });
                                }}
                                borderColor={borderColorDesktop}
                                setBorderColor={(value) => {
                                    setAttributes({
                                        borderColorDesktop: value,
                                        borderColorTablet: value,
                                        borderColorMobile: value,
                                    });
                                }}
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
                    'data-border-width-desktop': JSON.stringify(borderWidthDesktop),
                    'data-border-width-tablet': JSON.stringify(borderWidthTablet),
                    'data-border-width-mobile': JSON.stringify(borderWidthMobile),
                    'data-border-radius-desktop': JSON.stringify(borderRadiusDesktop),
                    'data-border-radius-tablet': JSON.stringify(borderRadiusTablet),
                    'data-border-radius-mobile': JSON.stringify(borderRadiusMobile),
                    'data-border-type-desktop': borderTypeDesktop,
                    'data-border-type-tablet': borderTypeTablet,
                    'data-border-type-mobile': borderTypeMobile,
                    'data-border-color-desktop': borderColorDesktop,
                    'data-border-color-tablet': borderColorTablet,
                    'data-border-color-mobile': borderColorMobile,
                    style: {
                        '--grid-desktop': gridItemDesktop,
                        '--grid-tablet': gridItemTablet,
                        '--grid-mobile': gridItemMobile,
                        '--gap': gap + 'px',
                        '--border-width-desktop-top': (borderWidthDesktop?.top || 0) + 'px',
                        '--border-width-desktop-right': (borderWidthDesktop?.right || 0) + 'px',
                        '--border-width-desktop-bottom': (borderWidthDesktop?.bottom || 0) + 'px',
                        '--border-width-desktop-left': (borderWidthDesktop?.left || 0) + 'px',
                        '--border-width-tablet-top': (borderWidthTablet?.top || 0) + 'px',
                        '--border-width-tablet-right': (borderWidthTablet?.right || 0) + 'px',
                        '--border-width-tablet-bottom': (borderWidthTablet?.bottom || 0) + 'px',
                        '--border-width-tablet-left': (borderWidthTablet?.left || 0) + 'px',
                        '--border-width-mobile-top': (borderWidthMobile?.top || 0) + 'px',
                        '--border-width-mobile-right': (borderWidthMobile?.right || 0) + 'px',
                        '--border-width-mobile-bottom': (borderWidthMobile?.bottom || 0) + 'px',
                        '--border-width-mobile-left': (borderWidthMobile?.left || 0) + 'px',
                        '--border-radius-desktop-top': (borderRadiusDesktop?.top || 0) + 'px',
                        '--border-radius-desktop-right': (borderRadiusDesktop?.right || 0) + 'px',
                        '--border-radius-desktop-bottom': (borderRadiusDesktop?.bottom || 0) + 'px',
                        '--border-radius-desktop-left': (borderRadiusDesktop?.left || 0) + 'px',
                        '--border-radius-tablet-top': (borderRadiusTablet?.top || 0) + 'px',
                        '--border-radius-tablet-right': (borderRadiusTablet?.right || 0) + 'px',
                        '--border-radius-tablet-bottom': (borderRadiusTablet?.bottom || 0) + 'px',
                        '--border-radius-tablet-left': (borderRadiusTablet?.left || 0) + 'px',
                        '--border-radius-mobile-top': (borderRadiusMobile?.top || 0) + 'px',
                        '--border-radius-mobile-right': (borderRadiusMobile?.right || 0) + 'px',
                        '--border-radius-mobile-bottom': (borderRadiusMobile?.bottom || 0) + 'px',
                        '--border-radius-mobile-left': (borderRadiusMobile?.left || 0) + 'px',
                        '--border-type-desktop': borderTypeDesktop,
                        '--border-type-tablet': borderTypeTablet,
                        '--border-type-mobile': borderTypeMobile,
                        '--border-color-desktop': borderColorDesktop,
                        '--border-color-tablet': borderColorTablet,
                        '--border-color-mobile': borderColorMobile
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
        const { borderWidthDesktop } = attributes;
        const { borderWidthTablet } = attributes;
        const { borderWidthMobile } = attributes;
        const { borderRadiusDesktop } = attributes;
        const { borderRadiusTablet } = attributes;
        const { borderRadiusMobile } = attributes;
        const { borderTypeDesktop } = attributes;
        const { borderTypeTablet } = attributes;
        const { borderTypeMobile } = attributes;
        const { borderColorDesktop } = attributes;
        const { borderColorTablet } = attributes;
        const { borderColorMobile } = attributes;
        
        return (
            <div {...useBlockProps.save({ 
                className: `gmfgb-pg-grid gmfgb-grid grid-size-${gridItemDesktop} ${redirect ? 'anchor' : 'no-anchor'}`,
                'data-grid-desktop': gridItemDesktop,
                'data-grid-tablet': gridItemTablet,
                'data-grid-mobile': gridItemMobile,
                'data-border-width-desktop': JSON.stringify(borderWidthDesktop),
                'data-border-width-tablet': JSON.stringify(borderWidthTablet),
                'data-border-width-mobile': JSON.stringify(borderWidthMobile),
                'data-border-radius-desktop': JSON.stringify(borderRadiusDesktop),
                'data-border-radius-tablet': JSON.stringify(borderRadiusTablet),
                'data-border-radius-mobile': JSON.stringify(borderRadiusMobile),
                'data-border-type-desktop': borderTypeDesktop,
                'data-border-type-tablet': borderTypeTablet,
                'data-border-type-mobile': borderTypeMobile,
                'data-border-color-desktop': borderColorDesktop,
                'data-border-color-tablet': borderColorTablet,
                'data-border-color-mobile': borderColorMobile,
                style: {
                    '--grid-desktop': gridItemDesktop,
                    '--grid-tablet': gridItemTablet,
                    '--grid-mobile': gridItemMobile,
                    '--gap': gap + 'px',
                    '--border-width-desktop-top': (borderWidthDesktop?.top || 0) + 'px',
                    '--border-width-desktop-right': (borderWidthDesktop?.right || 0) + 'px',
                    '--border-width-desktop-bottom': (borderWidthDesktop?.bottom || 0) + 'px',
                    '--border-width-desktop-left': (borderWidthDesktop?.left || 0) + 'px',
                    '--border-width-tablet-top': (borderWidthTablet?.top || 0) + 'px',
                    '--border-width-tablet-right': (borderWidthTablet?.right || 0) + 'px',
                    '--border-width-tablet-bottom': (borderWidthTablet?.bottom || 0) + 'px',
                    '--border-width-tablet-left': (borderWidthTablet?.left || 0) + 'px',
                    '--border-width-mobile-top': (borderWidthMobile?.top || 0) + 'px',
                    '--border-width-mobile-right': (borderWidthMobile?.right || 0) + 'px',
                    '--border-width-mobile-bottom': (borderWidthMobile?.bottom || 0) + 'px',
                    '--border-width-mobile-left': (borderWidthMobile?.left || 0) + 'px',
                    '--border-radius-desktop-top': (borderRadiusDesktop?.top || 0) + 'px',
                    '--border-radius-desktop-right': (borderRadiusDesktop?.right || 0) + 'px',
                    '--border-radius-desktop-bottom': (borderRadiusDesktop?.bottom || 0) + 'px',
                    '--border-radius-desktop-left': (borderRadiusDesktop?.left || 0) + 'px',
                    '--border-radius-tablet-top': (borderRadiusTablet?.top || 0) + 'px',
                    '--border-radius-tablet-right': (borderRadiusTablet?.right || 0) + 'px',
                    '--border-radius-tablet-bottom': (borderRadiusTablet?.bottom || 0) + 'px',
                    '--border-radius-tablet-left': (borderRadiusTablet?.left || 0) + 'px',
                    '--border-radius-mobile-top': (borderRadiusMobile?.top || 0) + 'px',
                    '--border-radius-mobile-right': (borderRadiusMobile?.right || 0) + 'px',
                    '--border-radius-mobile-bottom': (borderRadiusMobile?.bottom || 0) + 'px',
                    '--border-radius-mobile-left': (borderRadiusMobile?.left || 0) + 'px',
                    '--border-type-desktop': borderTypeDesktop,
                    '--border-type-tablet': borderTypeTablet,
                    '--border-type-mobile': borderTypeMobile,
                    '--border-color-desktop': borderColorDesktop,
                    '--border-color-tablet': borderColorTablet,
                    '--border-color-mobile': borderColorMobile
                }
            })}>
                <InnerBlocks.Content />
            </div>
        );
    },
});