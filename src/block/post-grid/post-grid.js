
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
                [['core/group', { className: 'gmfgb-pg-wrap border-none', style: { border: { style: 'solid', width: '0', radius: '0', color: '#dcdcdc' } }, templateLock: true },
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
        gridItem: {
            type: 'number',
            default: 2,
        },
        gap: {
            type: 'number',
            default: 20,
        },
        redirect: {
            type: 'boolean',
            default: false,
        },
    },

    //onChange: sliderIsUpdated(),
    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { gridItem } = attributes;
        const { gap } = attributes;
        const { redirect } = attributes;

        return (
            <>
                <InspectorControls key="setting">
                    <Panel>
                        <PanelBody title={__('PostGrid Settings', 'grid-masonry-for-guten-blocks')}>
                            <legend className="custom-label">
                                {__('Select Grid Items', 'grid-masonry-for-guten-blocks')}
                            </legend>
                            <RangeControl
                                value={gridItem}
                                onChange={(newGridItem) => setAttributes({ gridItem: newGridItem })}
                                min={1}
                                max={3}
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
                </InspectorControls>
                <div {...useBlockProps({ className: `gmfgb-pg-grid grid-size-${gridItem}`, templateLock: true, })}>
                    <InnerBlocks
                        template={POST_GRID_TEMPLATE}
                    />
                    <style>
                        {`
                            .gmfgb-pg-grid.grid-size-${gridItem} ul{
                                display:flex;
                                flex-wrap:wrap;
                                gap:${gap}px;
                            }
                            .gmfgb-pg-grid.grid-size-${gridItem} .wp-block-post {
                                    width: calc((100% / ${gridItem}) - ((${gap}px * (${gridItem} - 1)) / ${gridItem})) !important;
                                    margin:0;
                            }
                            .wp-block-post {
                                padding: ${gap}px;
                                margin: 0;
                            }
                                
                        `}
                    </style>
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { gridItem } = attributes;
        const { gap } = attributes;
        const { redirect } = attributes;
        return (
            <div {...useBlockProps.save({ className: `gmfgb-pg-grid gmfgb-grid grid-size-${gridItem} ${redirect ? 'anchor' : 'no-anchor'}` })}>
                <InnerBlocks.Content />
                <style>
                    {`
                            .gmfgb-pg-grid.grid-size-${gridItem} ul{
                                display:flex;
                                flex-wrap:wrap;     
                                gap:${gap}px;
                            }
                           .gmfgb-pg-grid.grid-size-${gridItem} .wp-block-post {
                                    width: calc((100% / ${gridItem}) - ((${gap}px * (${gridItem} - 1)) / ${gridItem})) !important;
                                    margin:0;
                                    padding: 0;
                                    position: relative !important;
                                    left: unset !important;
                                    top: unset !important;
                            }
                            .wp-block-post {
                                padding: ${gap}px;
                                margin: 0;
                            }
                            .anchor .gmfgb-pg-link::before{
                                content: "";
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                display: block;
                                left: 0;
                                top: 0;
                                background: transparent;
                            }
                            .anchor .gmfgb-pg-link:focus{
                                outline: none;
                            }
                            .no-anchor .gmfgb-pg-link::before {
                                display: none;
                            }
                    `}
                </style>
            </div>
        );
    },
});