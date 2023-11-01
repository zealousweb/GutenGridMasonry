import './style.scss';
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';

import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TESTIMONIALS_TEMPLATE = [
	[ 'core/group', { className: 'utk-testi-main-grp' }, [
		[ 'core/heading', { placeholder: __( 'Section Heading', 'utk-testi-main-heading' ), textAlign: 'center', level: 2, style: { typography: { fontWeight: 'bold', fontSize: '40px' }, spacing: { margin: { bottom: '40px', top: '0px', right: '0px', left: '0px' } } } } ],
		[ 'core/group', { }, [
			[ 'core/group', { className: 'utk-testi-inner-grp', layout: { type: 'flex', flexWrap: 'wrap', orientation: 'horizontal', justifyContent: 'space-between' } }, [
				[ 'core/group', { className: 'utk-testi-main-col', layout: { contentSize: '285px' } }, [
					[ 'core/image', { className: 'utk-testi-thumb-image is-style-default', sizeSlug: 'thumbnail', align: 'center', style: { width: 150, height: 150, border: { radius: '100%' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
					[ 'core/paragraph', { className: 'utk-testi-sub-heading', textAlign: 'center', content: 'Highlight', placeholder: __( 'Highlight', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-star', textAlign: 'center', content: '⭐⭐⭐⭐⭐', placeholder: __( '⭐⭐⭐⭐⭐', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' }, border: { radius: '30px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-description', align: 'center', content: 'Enter The Testimonial', placeholder: __( 'Enter The Testimonial', 'utk-unified-blocks' ), style: { typography: { fontSize: '16px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-name', align: 'center', content: 'Author Name', placeholder: __( 'Author Name', 'utk-unified-blocks' ), style: { typography: { fontWeight: 'bold', lineHeight: '1.4' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-location', align: 'center', content: 'Author Location', placeholder: __( 'Author Location', 'utk-unified-blocks' ), style: { color: { text: '#8d8d8d' }, typography: { fontSize: '16px' } } } ],
				] ],
				[ 'core/group', { className: 'utk-testi-main-col', layout: { contentSize: '285px' } }, [
					[ 'core/image', { className: 'utk-testi-thumb-image is-style-default', sizeSlug: 'thumbnail', align: 'center', style: { width: 150, height: 150, border: { radius: '100%' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
					[ 'core/paragraph', { className: 'utk-testi-sub-heading', textAlign: 'center', content: 'Highlight', placeholder: __( 'Highlight', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-star', textAlign: 'center', content: '⭐⭐⭐⭐⭐', placeholder: __( '⭐⭐⭐⭐⭐', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' }, border: { radius: '30px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-description', align: 'center', content: 'Enter The Testimonial', placeholder: __( 'Enter The Testimonial', 'utk-unified-blocks' ), style: { typography: { fontSize: '16px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-name', align: 'center', content: 'Author Name', placeholder: __( 'Author Name', 'utk-unified-blocks' ), style: { typography: { fontWeight: 'bold', lineHeight: '1.4' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-location', align: 'center', content: 'Author Location', placeholder: __( 'Author Location', 'utk-unified-blocks' ), style: { color: { text: '#8d8d8d' }, typography: { fontSize: '16px' } } } ],
				] ],
				[ 'core/group', { className: 'utk-testi-main-col', layout: { contentSize: '285px' } }, [
					[ 'core/image', { className: 'utk-testi-thumb-image is-style-default', sizeSlug: 'thumbnail', align: 'center', style: { width: 150, height: 150, border: { radius: '100%' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
					[ 'core/paragraph', { className: 'utk-testi-sub-heading', textAlign: 'center', content: 'Highlight', placeholder: __( 'Highlight', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-star', textAlign: 'center', content: '⭐⭐⭐⭐⭐', placeholder: __( '⭐⭐⭐⭐⭐', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' }, border: { radius: '30px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-description', align: 'center', content: 'Enter The Testimonial', placeholder: __( 'Enter The Testimonial', 'utk-unified-blocks' ), style: { typography: { fontSize: '16px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-name', align: 'center', content: 'Author Name', placeholder: __( 'Author Name', 'utk-unified-blocks' ), style: { typography: { fontWeight: 'bold', lineHeight: '1.4' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-location', align: 'center', content: 'Author Location', placeholder: __( 'Author Location', 'utk-unified-blocks' ), style: { color: { text: '#8d8d8d' }, typography: { fontSize: '16px' } } } ],
				] ],
				[ 'core/group', { className: 'utk-testi-main-col', layout: { contentSize: '285px' } }, [
					[ 'core/image', { className: 'utk-testi-thumb-image is-style-default', sizeSlug: 'thumbnail', align: 'center', style: { width: 150, height: 150, border: { radius: '100%' }, spacing: { margin: { bottom: '10px', top: '0px', right: '0px', left: '0px' } } } } ],
					[ 'core/paragraph', { className: 'utk-testi-sub-heading', textAlign: 'center', content: 'Highlight', placeholder: __( 'Highlight', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-star', textAlign: 'center', content: '⭐⭐⭐⭐⭐', placeholder: __( '⭐⭐⭐⭐⭐', 'utk-unified-blocks' ), align: 'center', style: { typography: { fontWeight: 'bold', fontSize: '20px' }, border: { radius: '30px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-description', align: 'center', content: 'Enter The Testimonial', placeholder: __( 'Enter The Testimonial', 'utk-unified-blocks' ), style: { typography: { fontSize: '16px' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-name', align: 'center', content: 'Author Name', placeholder: __( 'Author Name', 'utk-unified-blocks' ), style: { typography: { fontWeight: 'bold', lineHeight: '1.4' } } } ],
					[ 'core/paragraph', { className: 'utk-testi-author-location', align: 'center', content: 'Author Location', placeholder: __( 'Author Location', 'utk-unified-blocks' ), style: { color: { text: '#8d8d8d' }, typography: { fontSize: '16px' } } } ],
				] ],
			] ],
		] ],
	] ],
];

registerBlockType( 'unified-blocks/testimonials', {
	apiVersion: 2,
	title: __( 'Testimonials', 'utk-unified-blocks' ),
	description: __( 'Slider with Image and Text which you can use for Testimonials slider.', 'utk-unified-blocks' ),
	icon: 'format-quote',
	category: 'utk-blocks',
	example: {},
	keywords: [
		__( 'slider', 'utk-unified-blocks' ),
		__( 'Testimonials', 'utk-unified-blocks' ),
	],
	supports: {
		align: true,
	},
	attributes: {
		align: {
			type: 'string',
			default: 'wide',
		},
		autoplay: {
			type: 'string',
			default: 'true',
		},
		slidetoshow: {
			type: 'string',
			default: '3',
		},
		speed: {
			type: 'number',
			default: 300,
		},
		autoplayspeed: {
			type: 'number',
			default: 3000,
		},
	},
	edit: function( props ) {
		const { autoplay, slidetoshow, speed, autoplayspeed } = props.attributes;

		function updateSliderSetting( value ) {
			props.setAttributes( value );
		}
		return (
			<div { ...useBlockProps( { className: 'utk-testi-block' } ) }>
				<InnerBlocks
					template={ TESTIMONIALS_TEMPLATE }
				/>
				<InspectorControls>
					<PanelBody className="utk-slider-settings" title={ __( 'Slider Settings', 'utk-unified-blocks' ) } >
						<PanelRow>
							<RadioControl
								label={ __( 'Autoplay', 'utk-unified-blocks' ) }
								selected={ autoplay }
								options={ [
									{ label: 'True', value: 'true' },
									{ label: 'False', value: 'false' },
								] }
								onChange={ option => {
									updateSliderSetting( { autoplay: option } );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label={ __( 'Slide To Show', 'utk-unified-blocks' ) }
								selected={ slidetoshow }
								options={ [
									{ label: 'Two', value: '2' },
									{ label: 'Three', value: '3' },
								] }
								onChange={ option => {
									updateSliderSetting( { slidetoshow: option } );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={ __( 'Speed ( ms )', 'utk-unified-blocks' ) }
								onChange={ ( value ) => {
									updateSliderSetting( { speed: parseInt( value ) } );
								} }
								min={ 300 }
								value={ speed }
							/>
						</PanelRow>
						{ autoplay === 'true' &&
							<PanelRow>
								<NumberControl
									label={ __( 'Autoplay Interval ( ms ) ', 'utk-unified-blocks' ) }
									onChange={ ( value ) => {
										updateSliderSetting( { autoplayspeed: parseInt( value ) } );
									} }
									min={ 3000 }
									value={ autoplayspeed }
								/>
							</PanelRow>
						}
					</PanelBody>
				</InspectorControls>
			</div>
		);
	},
	save: function( props ) {
		const { autoplay, slidetoshow, speed, autoplayspeed } = props.attributes;
		return (
			<div { ...useBlockProps.save( { className: 'utk-testi-block' } ) } >
				<div
					id={ 'utk-testi-attr' }
					data-utkTestiAutoplay={ autoplay }
					data-utkTestiSlidetoshow={ slidetoshow }
					data-utkTestiSpeed={ speed }
					data-utkTestiAutoplayspeed={ autoplayspeed }
				></div>
				<div>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
