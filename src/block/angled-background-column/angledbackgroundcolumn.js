import './style.scss';
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ANGLED_BG_TEMPLATE = [
	[ 'core/group', { align: 'wide', layout: { contentSize: '1000px' } }, [
		[ 'core/columns', { className: 'utk-abg-columns', align: 'wide', isStackedOnMobile: 'true', style: { spacing: { padding: { top: '5%', bottom: '5%' } } } }, [
			[ 'core/column', { verticalAlignment: 'center', width: '400px' }, [
				[ 'core/image', { className: 'utk-abg-image', align: 'center', sizeSlug: 'thumbnail', width: '300px', height: '300px', linkDestination: 'none', style: { border: { radius: '0%' }, spacing: { margin: '0px' } } } ],
			] ],
			[ 'core/column', { verticalAlignment: 'center', width: '500px' }, [
				[ 'core/heading', { className: 'utk-abg-heading', placeholder: __( 'Title', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 700, textTransform: 'uppercase' }, spacing: { margin: '0px' } } } ],
				[ 'core/paragraph', { className: 'utk-abg-subtitle', placeholder: __( 'Sub Title', 'utk-unified-blocks' ), style: { spacing: { margin: '0px' } } } ],
				[ 'core/paragraph', { className: 'utk-abg-description', placeholder: __( 'Description', 'utk-unified-blocks' ) } ],
				[ 'core/social-links', { className: 'utk-abg-links is-style-logos-only' } ],
			] ],
		] ],
	] ],
];

registerBlockType( 'unified-blocks/angled-background', {
	apiVersion: 2,
	title: __( 'Angled Background Column', 'utk-unified-blocks' ),
	description: __( 'Set Media and text side-by-side with Angled Background for a richer layout.', 'utk-unified-blocks' ),
	icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"></path></svg>,
	category: 'utk-blocks',
	example: {},
	keywords: [
		__( 'side-by-side', 'utk-unified-blocks' ),
		__( 'Image and Text', 'utk-unified-blocks' ),
		__( 'Angled Background', 'utk-unified-blocks' ),
	],
	supports: {
		align: true,
		color: {
			background: true,
		},
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
		backgroundColor: {
			type: 'string',
			default: 'tertiary',
		},
	},
	edit: () => {
		return (
			<div { ...useBlockProps( { className: 'utk-abg-wrapper' } ) }>
				<InnerBlocks
					template={ ANGLED_BG_TEMPLATE }
				/>
			</div>
		);
	},
	save: () => (
		<div { ...useBlockProps.save( { className: 'utk-abg-wrapper' } ) }>
			<InnerBlocks.Content />
		</div>
	),
} );
