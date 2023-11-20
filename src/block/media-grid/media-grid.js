
/**
 * Import style for backend and front end
*/
import './style.scss';
import './editor.scss';

/**
 * import placeholder image to shown defalt
 */
import PlaceholderImage from './placeholder-image.png';

/**
* WordPress dependencies
*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck, InspectorControls, useBlockProps } = wp.blockEditor;
const { TextControl, TextareaControl, ToggleControl, RangeControl, Panel, PanelBody } = wp.components;

/**
 * Media Grid block registration
 */
registerBlockType('gutengridmasonry/media-grid', {
    title: __( 'Media Grid', 'gutengridmasonry' ),
	icon: 'format-gallery',
	category: 'guten-grid-masonry',
	attributes: {

        /** Repeater Array containing Image, Description, and VideoURL */
		items: {
			type: 'array',
			default: [],
		},
        /** Enable Disable option for FancyApp Lightbox */
		fancyBoxEnabled: {
			type: 'boolean',
			default: false,
		},
        /** Video Option enable disable for Field */
		videoOptionEnabled: {
			type: 'boolean',
			default: false,
		},
        /** Selection for Column Count 1 to 5 */
		gridItem: {
			type: 'number',
			default: 3,
		},
	},

    /**
     * Main Editor Structure 
     * @param {*} props 
     * @returns 
     */
	edit: function (props) {

        /** Constant values to contain default values */
		const { attributes, setAttributes } = props;
		const { fancyBoxEnabled } = attributes;
		const { videoOptionEnabled } = attributes;
		const { gridItem } = attributes;
		const addRepeaterItem = () => {
			const newItems = [...attributes.items, { image: null, image_caption: '', popup_url: '' }];
			setAttributes({ items: newItems });
		};

        /** update Repeater data */
		const updateRepeaterItem = (image, image_caption, popup_url, index) => {
			const newItems = [...attributes.items];
			newItems[index].image = image;
			newItems[index].image_caption = image_caption;
			newItems[index].popup_url = popup_url;
			setAttributes({ items: newItems });
		};

		return (
			<>
            {/** Side Panel Settings contains FancyApp Lightbox Enable Disable, Video URL Enable Disable, and Grid Column Selection */}
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title="MediaGrid Settings">
                        {/** Fancybox Toggle button */}
						<ToggleControl
							label="Enable Fancybox"
							checked={fancyBoxEnabled}
							onChange={(newIsfancyBoxEnabled) => setAttributes({ fancyBoxEnabled: newIsfancyBoxEnabled })}
							className="custom-label"
						/>

                        {/** Video URL field Enable Disable option */}
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

                        {/** Grid Column Selection */}
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

            {/** Structure to show for update data */}
			<section { ...useBlockProps.save( { className: `alignwide ggm-mg-grid grid-size-${gridItem} ${ fancyBoxEnabled ? 'hasfancy' : '' }` } ) }>
				{attributes.items.map((item, index) => (
					<div className="ggm-mg-wrap" key={index}>

                        {/** Media Field Uplod/Select option */}
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

                            {/** Image Caption Description Field */}
							<TextareaControl
								placeholder="Image Caption"
								className="mg-image-caption"
								value={item.image_caption}
								onChange={(image_caption) => updateRepeaterItem(item.image, image_caption, item.popup_url, index)}
							/>

                            {/** Popup URL Option Field */}
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

                {/** Add Media Image Button for Repeater */}
				<button class="ggm-mg-button button button-primary button-large" onClick={addRepeaterItem}>Add Row</button>
			</section>
			</>
		);
	},

    /**
     * Main Save Structure
     * @param {*} param0 
     * @returns 
     */
	save: function ({ attributes }) {
        /** Get constant values contains values to save */
		const { fancyBoxEnabled } = attributes;
		const { videoOptionEnabled } = attributes;
		const { gridItem } = attributes;
		return (
            /** Structure to show for update data */
			<section { ...useBlockProps.save( { className: `alignwide ggm-mg-grid grid-size-${gridItem} ${ fancyBoxEnabled ? 'hasfancy' : '' }` } ) }> { /* }//className={`ggm-mg-grid grid-size-${gridItem} ${ fancyBoxEnabled ? 'hasfancy' : '' }`}>{*/}

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
                                            ? /** have Video available and also enabled the video popup from the side panel */
                                            <a href={item.popup_url} className="ggm-mg-video" data-fancybox="video-gallery" data-caption={item.image_caption}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
                                                    <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle" d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.135,19.125-12.375,7.1a1.691,1.691,0,0,1-2.51-1.477V10.688a1.692,1.692,0,0,1,2.51-1.477l12.375,7.523A1.693,1.693,0,0,1,26.135,19.688Z" transform="translate(-0.563 -0.563)" />
                                                </svg>
											    <img src= {item.image.sizes.full.url} alt="" />
											</a>
											: <a href={item.image.sizes.full.url} data-fancybox="gallery" data-caption={item.image_caption}>
												<img src={item.image.sizes.full.url} alt="" />
											</a>
										}
									</>
									: <a>
										<img src={item.image.sizes.full.url} alt="" />
									</a>
								}
							</>
						)}
                        {
                            item.image_caption &&(
                                <p>{item.image_caption}</p>
                            )
                        }
					</div>
				))}
			</section>
		);
	},
});