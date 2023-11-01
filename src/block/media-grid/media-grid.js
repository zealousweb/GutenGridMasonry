/**
* WordPress dependencies
*/

import './style.scss';
import './editor.scss';
import PlaceholderImage from './placeholder-image.png';
{ /*}
// import { Fancybox } from "../../../node_modules/@fancyapps/ui";
// import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js";
// import "../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
{ */}

import { __ } from '@wordpress/i18n';
const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck, InspectorControls, FileUpload } = wp.blockEditor;
const { TextControl, TextareaControl, ToggleControl, RangeControl, Panel, PanelBody, Button } = wp.components;

registerBlockType('gutengridmasonry/media-grid', {
	title: 'Media Grid',
	icon: 'format-gallery',
	category: 'guten-grid-masonry',
	attributes: {
		items: {
			type: 'array',
			default: [],
		},
		fancyBoxEnabled: {
			type: 'boolean',
			default: false,
		},
		videoOptionEnabled: {
			type: 'boolean',
			default: false,
		},
		gridItem: {
			type: 'number',
			default: 3,
		},
		// file: {
		// 	type: 'string',
		// 	default: '',
		// },
	},
	edit: function (props) {

		const { attributes, setAttributes } = props;
		const { fancyBoxEnabled } = attributes;
		const { videoOptionEnabled } = attributes;
		const { gridItem } = attributes;

		const addRepeaterItem = () => {
			const newItems = [...attributes.items, { image: null, image_caption: '', popup_url: '' }];
			setAttributes({ items: newItems });
		};

		const updateRepeaterItem = (image, image_caption, popup_url, index) => {
			const newItems = [...attributes.items];
			newItems[index].image = image;
			newItems[index].image_caption = image_caption;
			newItems[index].popup_url = popup_url;
			setAttributes({ items: newItems });
		};

		return (
			<>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title="MediaGrid Settings">

							{/*}<legend className="blocks-base-control__label custom-label">
								{ __( 'Additional Options', 'gutengridmasonry' ) }
							</legend>{*/}
							<ToggleControl
								label="Enable Fancybox"
								checked={fancyBoxEnabled}
								onChange={(newIsfancyBoxEnabled) => setAttributes({ fancyBoxEnabled: newIsfancyBoxEnabled })}
								className="custom-label"
							/>


						{
							fancyBoxEnabled
							? <ToggleControl
									label="Enable Video Option"
									checked={videoOptionEnabled}
									onChange={(newVideoOptionEnabled) => setAttributes({ videoOptionEnabled: newVideoOptionEnabled })}
									className="custom-label"
								/>
							: ''
						}

						<>

							<legend className="custom-label">
								{ __( 'Select Grid Items', 'gutengridmasonry' ) }
							</legend>
							<RangeControl
							value={gridItem}
							onChange={(newGridItem) => setAttributes({ gridItem: newGridItem })}
							min={1}
							max={5}
							/>
						</>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<section className={`ggm-mg-grid grid-size-${gridItem} ${ fancyBoxEnabled ? 'hasfancy' : '' }`}>
				{attributes.items.map((item, index) => (
					<div className="ggm-mg-wrap" key={index}>
						{/*console.log(item.image.sizes)*/}
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(image) => updateRepeaterItem(image, item.image_caption, item.popup_url, index)}
								allowedTypes={['image']}
								value={item.image && item.image.id}
								render={({ open }) => (
									<div className="ggm-mg-image" onClick={open}>
									{item.image ? (
											<img src={item.image.sizes.thumbnail.url} alt="" />
										) : (
											<img src={PlaceholderImage} alt="" />
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>

						<div className="ggm-mg-content">
							<TextareaControl
								placeholder="Image Caption"
								className="mg-image-caption"
								value={item.image_caption}
								onChange={(image_caption) => updateRepeaterItem(item.image, image_caption, item.popup_url, index)}
							/>
							{
								videoOptionEnabled && fancyBoxEnabled
								? <TextControl
									//label="Video Popup URL"
									placeholder="Video Popup URL"
									className="mg-popup-video"
									value={item.popup_url}
									onChange={(popup_url) => updateRepeaterItem(item.image, item.image_caption, popup_url, index)}
								/>
								: ''
							}

						</div>
					</div>
				))}
				<button class="ggm-mg-button button button-primary button-large" onClick={addRepeaterItem}>Add Row</button>
			</section>
			</>
		);
	},
	save: function ({ attributes }) {
		const { fancyBoxEnabled } = attributes;
		const { videoOptionEnabled } = attributes;
		const { gridItem } = attributes;
		return (
			<section className={`ggm-mg-grid grid-size-${gridItem} ${ fancyBoxEnabled ? 'hasfancy' : '' }`}>

				{attributes.items.map((item, index) => (
					<div className="ggm-mg-media" key={index}>
						{ /* console.log(item.image.sizes) */ }
						{item.image && (
							<>
								{
									fancyBoxEnabled
									? <>
										{
											item.popup_url && videoOptionEnabled
											? <a href={item.popup_url} data-fancybox="video-gallery" data-caption={item.image_caption}>
												<img src= {item.image.sizes.full.url} alt="" />
											</a>


											// <a class="wp-block-button__link wp-element-button" href={item.popup_url}>
											// 	Test
											// </a>
											: <a href={item.image.sizes.full.url} data-fancybox="gallery" data-caption={item.image_caption}>
												<img src={item.image.sizes.full.url} alt="" />
												{ /*
													item.image.width >= 767
													? <img src={item.image.sizes.full.url} alt="" />
													: 'No' */
												}
											</a>
										}
									</>
									: <a>
										<img src={item.image.sizes.full.url} alt="" />
									</a>
								}
								{ /* <img src={item.image.sizes.full.url} alt="" /> */ }
							</>
						)}
						<p>{item.image_caption}</p>
						{item.popup_url && videoOptionEnabled && (
							<a class="wp-block-button__link wp-element-button" href={item.popup_url}>
								Test
							</a>
						)}
					</div>
				))}
			</section>
		);
	},
});

/*import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, TextControl, ToggleControl } from '@wordpress/block-editor';
import { Button, Panel, PanelBody } from '@wordpress/components';

registerBlockType('gutengridmasonry/media-grid', {
	title: __( 'Media Grid', 'gutengridmasonry' ),
	icon: 'format-gallery',
	category: 'common',
	attributes: {
		galleryItems: {
			type: 'array',
			default: [],
		},
	},
	edit: ({ attributes, setAttributes }) => {
		const { galleryItems } = attributes;

		const handleAddGalleryItem = () => {
			const updatedGalleryItems = [
				...galleryItems,
				{
					mediaId: null,
					customURL: '',
					openInPopup: false
				},
			];
			setAttributes({ galleryItems: updatedGalleryItems });
		};

		const handleRemoveGalleryItem = (index) => {
			const updatedGalleryItems = [...galleryItems];
			updatedGalleryItems.splice(index, 1);
			setAttributes({ galleryItems: updatedGalleryItems });
		};

		const handleMediaSelect = (media, index) => {
			const updatedGalleryItems = [...galleryItems];
			updatedGalleryItems[index].mediaId = media.id;
			setAttributes({ galleryItems: updatedGalleryItems });
		};

		const handleInputChange = (index, key, value) => {
			const updatedGalleryItems = [...galleryItems];
			updatedGalleryItems[index][key] = value;
			setAttributes({ galleryItems: updatedGalleryItems });
		};

		const onSelectImage = (media) => {
			setAttributes({
				imageId: media.id,
				imageUrl: media.url,
			});
		};

		return (
			<div>
			<button onClick={handleAddGalleryItem}>Add Gallery Item</button>
			{galleryItems.map((item, index) => (
				<Panel key={index}>
					<MediaUpload
						onSelect={(media) => handleMediaSelect(media, index)}
						allowedTypes={['image']}
						value={item.mediaId}
						render={({ open }) => (
							<Button onClick={open}>Select Image</Button>
						)}
					/>
					<TextControl
						label="Custom URL"
						value={item.customURL}
						onChange={(value) => handleInputChange(index, 'customURL', value)}
					/>
					<ToggleControl
						label="Open in Popup"
						checked={item.openInPopup}
						onChange={() => handleInputChange(index, 'openInPopup', !item.openInPopup)}
					/>
					<Button isDestructive onClick={() => handleRemoveGalleryItem(index)}>
						Remove Item
					</Button>
				</Panel>
			))}
			</div>
		);
	},
	save: ({ attributes }) => {
		const { galleryItems } = attributes;

		return (
			<div>
			{galleryItems.map((item, index) => (
				<div key={index}>
				<img src={item.mediaId} alt={index} />
				<p>
				<a href={item.customURL} target={item.openInPopup ? '_blank' : '_self'}>
				{item.customURL}
				</a>
				</p>
				</div>
			))}
			</div>
		);
	},
});

/*
import { __ } from '@wordpress/i18n';
const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl, Button } = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { useState } = wp.element;
// Register the block
registerBlockType( 'gutengridmasonry/media-grid', {
title: __( 'Media Grid', 'gutengridmasonry' ),
description: 'Repeater Component with ReactJS.',
icon: 'list-view',
category: 'common',
attributes: {
items: {
type: 'array',
default: [],
},
},
edit: function ({ attributes, setAttributes }) {
const [newItem, setNewItem] = useState({
name: '',
email: '',
description: '',
mediaId: null,
});

const mediaUrl = (mediaId) => {
const media = wp.media.attachment(mediaId);
return media ? media.get('url') : '';
};

const handleAddItem = () => {
const updatedItems = [...attributes.items, newItem];
setAttributes({ items: updatedItems });
setNewItem({
name: '',
email: '',
description: '',
mediaId: null,
});
};

const handleRemoveItem = (index) => {
const updatedItems = [...attributes.items];
updatedItems.splice(index, 1);
setAttributes({ items: updatedItems });
};
return (
<div>
<ul>
{attributes.items.map((item, index) => (
<li key={index}>
<TextControl
label="Name"
value={item.name}
onChange={(value) => handleUpdateItemText(index, 'name', value)}
/>
<TextControl
label="Email"
value={item.email}
onChange={(value) => handleUpdateItemText(index, 'email', value)}
/>
<TextareaControl
label="Description"
value={item.description}
onChange={(value) => handleUpdateItemText(index, 'description', value)}
/>
{/*}
<MediaUploadCheck>
<MediaUpload
onSelect={(media) => setNewItem({ ...newItem, mediaId: media.id })}
allowedTypes={['image']}
value={newItem.mediaId}
render={({ open }) => (
<div>
{newItem.mediaId ? (
<img
className="first interaction"
src={mediaUrl(newItem.mediaId)}
alt=""
/>
) : (
<Button onClick={open}>Select Image</Button>
)}
</div>
)}
/>
</MediaUploadCheck>
{*--}
<Button onClick={() => handleRemoveItem(index)}>Remove</Button>
</li>
))}
</ul>
<TextControl
label="New Name"
value={newItem.name}
onChange={(value) => setNewItem({ ...newItem, name: value })}
/>
<TextControl
label="New Email"
value={newItem.email}
onChange={(value) => setNewItem({ ...newItem, email: value })}
/>
<TextareaControl
label="New Description"
value={newItem.description}
onChange={(value) => setNewItem({ ...newItem, description: value })}
/>
{/*}
<MediaUploadCheck>
<MediaUpload
onSelect={(media) => setNewItem({ ...newItem, mediaId: media.id })}
allowedTypes={['image']}
value={newItem.mediaId}
render={({ open }) => (
<div>
{newItem.mediaId ? (
<img
className="first interaction"
src={mediaUrl(newItem.mediaId)}
alt=""
/>
) : (
<Button onClick={open}>Select Image</Button>
)}
</div>
)}
/>
</MediaUploadCheck>
{*--}
<Button onClick={handleAddItem}>Add Item</Button>
</div>
);
},
save: ({ attributes }) => {
const mediaUrl = (mediaId) => {
const media = wp.media.attachment(mediaId);
return media ? media.get('url') : '';
};
return (
<div>
<ul>
{attributes.items.map((item, index) => (

<li key={index}>
{item.name}
{item.email}
{item.description}
{/* <img
src={mediaUrl( `${item.mediaId}` )}
alt=""
/> *--}
<img
className="final front"
src={mediaUrl(item.mediaId)}
alt=""
/>
</li>
))}
</ul>
</div>
); // Content is saved on the server-side
},
} );
*/
