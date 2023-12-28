
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
import { RangeControl, Panel, PanelBody } from '@wordpress/components';

/** Post Template */
const POST_GRID_TEMPLATE = [
    /** Additional Heading and Description */
    ['core/group', { className: 'ggm-pg-title', style: { border: { style: 'solid', width: '0', radius: '0', color: '#dcdcdc' } } },
        [
            ['core/paragraph', { className: 'ggm-pg-sub-heading', placeholder: __('Your amazing blog posts', 'grid-masonry-for-guten-blocks'), align: 'center', style: { typography: { fontSize: '16px', fontWeight: 700, textTransform: 'uppercase' }, spacing: { margin: { bottom: '15px', top: '0px', right: '0px', left: '0px' } } } }],
            ['core/heading', { className: 'ggm-pg-main-heading', placeholder: __('Create a Quick and Easy Post Grid', 'grid-masonry-for-guten-blocks'), textAlign: 'center', style: { typography: { fontWeight: 700, }, spacing: { margin: { bottom: '25px', top: '0px', right: '0px', left: '0px' } } } }],
        ]
    ],

    /** Main Post Loop/Query with Default Wordpress Posts */
    ['core/query', { className: 'ggm-pg-loop-wrap', query: { inherit: false, offset: 0, postType: 'post', enhancedPagination: true }, templateLock: true, displayLayout: false, align: false, },
        [
            ['core/post-template', { templateLock: true, layout: false, displayLayout: false, align: false, },
                [['core/group', { className: 'ggm-pg-wrap', style: { border: { style: 'solid', width: '0', radius: '0', color: '#dcdcdc' }, templateLock: true } },
                    [
                        ['core/post-featured-image', { className: 'ggm-pg-featured-img', style: { width: '100%', height: '100%', spacing: { margin: { bottom: '0px', top: '0px', right: '0px', left: '0px' } } } }],
                        ['core/group', { className: 'ggm-pg-content', style: { spacing: { padding: { top: '100px', right: '25px', bottom: '25px', left: '25px' }, margin: { top: '0px', bottom: '0px' } } } }, [
                            // [ 'core/categories' ],
                            ['core/post-title', { className: 'ggm-pg-title', style: { color: { text: '#ffffff' }, typography: { fontSize: '20px', fontWeight: 700 }, spacing: { margin: { bottom: '15px', top: '15px', right: '0px', left: '0px' } } } }],
                            ['core/post-excerpt', { excerptLength: 20, moreText: '&nbsp;', className: 'ggm-pg-description', style: { typography: { lineHeight: 1.2 }, color: { text: '#ffffff' }, spacing: { margin: { top: '0', bottom: '20px', left: '0', right: '0' } } } }],
                            ['core/read-more', { className: 'ggm-pg-link', content: __('Read More →', 'grid-masonry-for-guten-blocks'), style: { color: { text: '#ffffff' }, typography: { textDecoration: 'underline', fontSize: '16px' }, spacing: { margin: { 'top': '0', 'bottom': '20px', 'left': '0', 'right': '0' } } } }],
                            ['core/group', { className: 'ggm-pg-date-wrap', style: { spacing: { padding: { top: '0', right: '0', bottom: '0', left: '0' }, margin: { top: '0px', bottom: '0px' } } } }, [
                                ['core/post-date', { className: 'ggm-pg-date', style: { spacing: { margin: '0' }, color: { text: '#ffffff' }, typography: { fontSize: '13px' } } }],
                                ['core/post-author', { className: 'ggm-pg-author', style: { typography: { fontSize: '13px' }, spacing: { 'margin': '0' } } }],
                            ]],
                        ]],
                    ],
                ]],
            ],
            ['core/query-pagination', { className: 'post-pagination' }],
        ],
    ],
    ['core/group', { className: 'ggm-pg-cta-button' },
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
    icon: <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"></path></svg>,
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
    },

    //onChange: sliderIsUpdated(),
    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { gridItem } = attributes;

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
                        </PanelBody>
                    </Panel>
                </InspectorControls>
                <div {...useBlockProps({ className: `ggm-pg-grid grid-size-${gridItem}` })}>
                    <InnerBlocks
                        template={POST_GRID_TEMPLATE}
                    />
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { gridItem } = attributes;
        return (
            <div {...useBlockProps.save({ className: `ggm-pg-grid ggm-grid grid-size-${gridItem}` })}>
                <InnerBlocks.Content />
            </div>
        );
    },
});