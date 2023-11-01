import './style.scss';
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const CARD_BLOCK_TEMPLATE = [
	[ 'core/paragraph', { placeholder: __( 'Book Title', 'utk-unified-blocks' ), align: 'center', 
		style: { 
			color: { text: '#ffc668' }, 
			typography: { fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }, 
			spacing: { margin: { bottom: '15px', top: '0px', right: '0px', left: '0px' } } 
		} 
	} ],
	[ 'core/heading', { placeholder: __( 'Summary', 'utk-unified-blocks' ), textAlign: 'center', level: 2, style: { typography: { fontWeight: 'bold', fontSize: '40px' }, spacing: { margin: { bottom: '25px', top: '0px', right: '0px', left: '0px' } } } } ],
	[ 'core/columns', { columns: 3, isStackedOnMobile: true }, [
		[ 'core/column', {}, [
			[ 'core/group', { style: { border: { width: '1px', style: 'solid', radius: '5px', color: '#dcdcdc' }, spacing: { padding: '25px' } } }, [
				[ 'core/image', { className: 'utk-cb-thumb-image', style: { border: { radius: '30px' }, spacing: { margin: { bottom: '20px', top: '0px', right: '0px', left: '0px' } } } } ],
				[ 'core/heading', { className: 'utk-cb-heading', placeholder: __( 'Book Title', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 'bold', fontSize: '22px' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
				[ 'core/paragraph', { className: 'utk-cb-description', placeholder: __( 'Summary', 'utk-unified-blocks' ), style: { color: '#696969', spacing: { margin: { top: '0px', bottom: '25px' } } } } ],
				[ 'core/buttons', { className: 'utk-cb-buttons', style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } }, typography: { fontSize: '14px' } } }, [
					[ 'core/button', { text: __( 'Read More →', 'utk-unified-blocks' ), style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } } } } ],
				] ],
			] ],
		] ],
		[ 'core/column', {}, [
			[ 'core/group', { style: { border: { width: '1px', style: 'solid', radius: '5px', color: '#dcdcdc' }, spacing: { padding: '25px' } } }, [
				[ 'core/image', { className: 'utk-cb-thumb-image', sizeSlug: 'thumbnail', style: { border: { radius: '30px' }, spacing: { margin: { bottom: '20px', top: '0px', right: '0px', left: '0px'  } } } } ],
				[ 'core/heading', { className: 'utk-cb-heading', placeholder: __( 'Book Title', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 'bold', fontSize: '22px' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
				[ 'core/paragraph', { className: 'utk-cb-description',  placeholder: __( 'Summary', 'utk-unified-blocks' ), style: { color: '#696969', spacing: { margin: { top: '0px', bottom: '25px' } } } } ],
				[ 'core/buttons', { className: 'utk-cb-buttons', style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } }, typography: { fontSize: '14px' } } }, [
					[ 'core/button', { text: __( 'Read More →', 'utk-unified-blocks' ), style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } } } } ],
				] ],
			] ],
		] ],
		[ 'core/column', {}, [
			[ 'core/group', { style: { border: { width: '1px', style: 'solid', radius: '5px', color: '#dcdcdc' }, spacing: { padding: '25px' } } }, [
				[ 'core/image', { className: 'utk-cb-thumb-image', sizeSlug: 'thumbnail', style: { border: { radius: '30px' }, spacing: { margin: { bottom: '20px', top: '0px', right: '0px', left: '0px'  } } } } ],
				[ 'core/heading', { className: 'utk-cb-heading', placeholder: __( 'Book Title', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 'bold', fontSize: '22px' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
				[ 'core/paragraph', { className: 'utk-cb-description',  placeholder: __( 'Summary', 'utk-unified-blocks' ), style: { color: '#696969', spacing: { margin: { top: '0px', bottom: '25px' } } } } ],
				[ 'core/buttons', { className: 'utk-cb-buttons', style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } }, typography: { fontSize: '14px' } } }, [
					[ 'core/button', { text: __( 'Read More →', 'utk-unified-blocks' ), style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } } } } ],
				] ],
			] ],
		] ],
	] ],
	[ 'core/columns', { columns: 3, isStackedOnMobile: true }, [
		[ 'core/column', {}, [
			[ 'core/group', { style: { border: { width: '1px', style: 'solid', radius: '5px', color: '#dcdcdc' }, spacing: { padding: '25px' } } }, [
				[ 'core/image', { className: 'utk-cb-thumb-image', sizeSlug: 'thumbnail', style: { border: { radius: '30px' }, spacing: { margin: { bottom: '20px', top: '0px', right: '0px', left: '0px'  } } } } ],
				[ 'core/heading', { className: 'utk-cb-heading', placeholder: __( 'Book Title', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 'bold', fontSize: '22px' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
				[ 'core/paragraph', { className: 'utk-cb-description',  placeholder: __( 'Summary', 'utk-unified-blocks' ), style: { color: '#696969', spacing: { margin: { top: '0px', bottom: '25px' } } } } ],
				[ 'core/buttons', { className: 'utk-cb-buttons', style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } }, typography: { fontSize: '14px' } } }, [
					[ 'core/button', { text: __( 'Read More →', 'utk-unified-blocks' ), style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } } } } ],
				] ],
			] ],
		] ],
		[ 'core/column', {}, [
			[ 'core/group', { style: { border: { width: '1px', style: 'solid', radius: '5px', color: '#dcdcdc' }, spacing: { padding: '25px' } } }, [
				[ 'core/image', { className: 'utk-cb-thumb-image', sizeSlug: 'thumbnail', style: { border: { radius: '30px' }, spacing: { margin: { bottom: '20px', top: '0px', right: '0px', left: '0px'  } } } } ],
				[ 'core/heading', { className: 'utk-cb-heading', placeholder: __( 'Book Title', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 'bold', fontSize: '22px' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
				[ 'core/paragraph', { className: 'utk-cb-description',  placeholder: __( 'Summary', 'utk-unified-blocks' ), style: { color: '#696969', spacing: { margin: { top: '0px', bottom: '25px' } } } } ],
				[ 'core/buttons', { className: 'utk-cb-buttons', style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } }, typography: { fontSize: '14px' } } }, [
					[ 'core/button', { text: __( 'Read More →', 'utk-unified-blocks' ), style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } } } } ],
				] ],
			] ],
		] ],
		[ 'core/column', {}, [
			[ 'core/group', { style: { border: { width: '1px', style: 'solid', radius: '5px', color: '#dcdcdc' }, spacing: { padding: '25px' } } }, [
				[ 'core/image', { className: 'utk-cb-thumb-image', sizeSlug: 'thumbnail', style: { border: { radius: '30px' }, spacing: { margin: { bottom: '20px', top: '0px', right: '0px', left: '0px'  } } } } ],
				[ 'core/heading', { className: 'utk-cb-heading', placeholder: __( 'Book Title', 'utk-unified-blocks' ), level: 2, style: { typography: { fontWeight: 'bold', fontSize: '22px' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
				[ 'core/paragraph', { className: 'utk-cb-description',  placeholder: __( 'Summary', 'utk-unified-blocks' ), style: { color: '#696969', spacing: { margin: { top: '0px', bottom: '25px' } } } } ],
				[ 'core/buttons', { className: 'utk-cb-buttons', style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } }, typography: { fontSize: '14px' } } }, [
					[ 'core/button', { text: __( 'Read More →', 'utk-unified-blocks' ), style: { color: { background: '#ffffff', text: '#ffc669' }, spacing: { padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' } } } } ],
				] ],
			] ],
		] ],
	] ],
];

registerBlockType( 'unified-blocks/card-block', {
	apiVersion: 2,
	title: __( 'Cards Block', 'utk-unified-blocks' ),
	description: __( 'Set Media and text side-by-side for a richer layout.', 'utk-unified-blocks' ),
	icon: 'screenoptions',
	category: 'utk-blocks',
	example: {},
	keywords: [
		__( 'card-list', 'utk-unified-blocks' ),
		__( 'Card Listing', 'utk-unified-blocks' ),
	],
	supports: {
		align: true,
	},
	attributes: {
		align: {
			type: 'string',
			default: 'wide',
		},
	},
	edit: ( {} ) => {
		return (
			<div { ...useBlockProps() }>
				<InnerBlocks
					template={ CARD_BLOCK_TEMPLATE }
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
