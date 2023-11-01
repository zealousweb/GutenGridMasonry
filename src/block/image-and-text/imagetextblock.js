import './style.scss';
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';
import {
	InnerBlocks,
	__experimentalBlockVariationPicker as BlockVariationPicker,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const RIGHT_TEMPLATE = [
	[ 'core/columns', { align: 'wide', isStackedOnMobile: 'true', style: { spacing: { padding: { bottom: '5%' } } } }, [
		[ 'core/column', { verticalAlignment: 'center', style: { spacing: { padding: { right: '5%' } } } }, [
			[ 'core/heading', { placeholder: __( 'Heading', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 700, textTransform: 'uppercase' }, spacing: { margin: '0px' } } } ],
			[ 'core/paragraph', { placeholder: __( 'Description', 'utk-unified-blocks' ) } ],
			[ 'core/buttons', {}, [ 
				[ 'core/button', { text: __( 'Read more', 'utk-unified-blocks' ), style: { color: { background: '#f1373d', text: '#fff' }, border: { radius: '7px' } } } ] 
			] ],
		] ],
		[ 'core/column', {}, [
			[ 'core/image', { sizeSlug: 'full', style: { border: { radius: '15px' }, spacing: { margin: '0px' } } } ],
		] ],
	] ],
];

const LEFT_TEMPLATE = [
	[ 'core/columns', { align: 'wide', isStackedOnMobile: 'true', style: { spacing: { padding: { bottom: '5%' } } } }, [
		[ 'core/column', {}, [
			[ 'core/image', { sizeSlug: 'full', style: { border: { radius: '15px' }, spacing: { margin: '0px' } } } ],
		] ],
		[ 'core/column', { verticalAlignment: 'center', style: { spacing: { padding: { left: '5%' } } } }, [
			[ 'core/heading', { placeholder: __( 'Heading', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 700, textTransform: 'uppercase' }, spacing: { margin: '0px' } } } ],
			[ 'core/paragraph', { placeholder: __( 'Description', 'utk-unified-blocks' ) } ],
			[ 'core/buttons', {}, [ 
				[ 'core/button', { text: __( 'Read more', 'utk-unified-blocks' ), style: { color: { background: '#f1373d', text: '#fff' }, border: { radius: '7px' } } } ] 
			] ],
		] ],
	] ],
];

const variations = [ {
	name: 'right-side-image-text',
	title: __( 'Right Side Image and Text', 'utk-unified-blocks' ),
	icon: 'align-pull-right',
	scope: [ 'block' ],
}, {
	name: 'left-side-image-text',
	title: __( 'Left Side Image and Text', 'utk-unified-blocks' ),
	icon: 'align-pull-left',
	scope: [ 'block' ],
} ];

registerBlockType( 'unified-blocks/image-and-text', {
	apiVersion: 2,
	title: __( 'Image & Text', 'utk-unified-blocks' ),
	description: __( 'Set Media and text side-by-side for a richer layout.', 'utk-unified-blocks' ),
	icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"></path></svg>,
	category: 'utk-blocks',
	example: {},
	keywords: [
		__( 'side-by-side', 'utk-unified-blocks' ),
		__( 'Image and Text', 'utk-unified-blocks' ),
	],
	supports: {
		align: true,
	},
	attributes: {
		variation: {
			type: 'string',
			default: '',
		},
		align: {
			type: 'string',
			default: 'wide',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		if ( ! attributes.variation ) {
			return (
				<div { ...useBlockProps() }>
					<BlockVariationPicker
						variations={ variations }
						label="Image With Text"
						onSelect={ ( variation = variations[ 0 ] ) => {
							setAttributes( {
								...variation.attributes,
								variation: variation.name,
							} );
						} }
					/>
				</div>
			);
		}

		if ( 'left-side-image-text' === attributes.variation ) {
			return (
				<div { ...useBlockProps() }>
					<InnerBlocks
						template={ LEFT_TEMPLATE }
					/>
				</div>
			);
		}
		return (
			<div { ...useBlockProps() }>
				<InnerBlocks
					template={ RIGHT_TEMPLATE }
				/>
			</div>
		);
	},
	save: () => (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	),
} );
