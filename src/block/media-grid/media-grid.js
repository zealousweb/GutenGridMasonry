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
* @return void
*/
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, InspectorControls, useBlockProps } from '@wordpress/blockEditor';
import { TextControl, TextareaControl, ToggleControl, RangeControl, Panel, PanelBody, Button } from '@wordpress/components';
import { useRef } from 'react';


/**
 * Media Grid block registration
 */
registerBlockType('gridmasonryforguten/media-grid', {
    title: __('Media Grid', 'gridmasonryforguten'),
    description: __('Media grid Masnary is having ability to add Images tht will have option to view in model area like popup in full screen and also having an option to play video to the image', 'gridmasonryforguten'),
    icon: 'format-gallery',
    category: 'grid-masonry-for-guten',
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
     *  
     * @returns void
     */
    edit: function (props) {

        /** Constant values to contain default values */
        const { attributes, setAttributes } = props;
        const { fancyBoxEnabled } = attributes;
        const { videoOptionEnabled } = attributes;
        const { gridItem } = attributes;

        const mediaUploadRef = useRef(null);

        const handleButtonClick = () => {
            // Check if the ref has been assigned to the MediaUpload component
            if (mediaUploadRef.current) {
                mediaUploadRef.current.open();
            }
        };

        const addRepeaterItem = () => {
            const newItems = [...attributes.items, { image: null, image_caption: '', popup_url: '' }];
            setAttributes({ items: newItems });
            //handleButtonClick();
        };

        const deleteRepeaterItem = (index) => {
            //console.log({ index });
            const newItems = [...attributes.items];
            newItems.splice(index, 1);
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
                                    {__('Select Grid Items', 'gridmasonryforguten')}
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
                <section {...useBlockProps.save({ className: `alignwide ggm-mg-grid grid-size-${gridItem} ${fancyBoxEnabled ? 'hasfancy' : ''}` })}>
                    {attributes.items.map((item, index) => (
                        <div className="ggm-mg-wrap" key={index}>

                            <Button className="remove-item" onClick={() => deleteRepeaterItem(index)}>
                                <svg fill="#ff0000" width="20" id="Capa_1" viewBox="0 0 482.428 482.429"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"></path> <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"></path> <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"></path> <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"></path> </g> </g> </g></svg>
                                {/* <svg height="200" width="200" id="Layer_1" viewBox="0 0 512 512" fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path style="fill:#cc0000;" d="M0,256.006C0,397.402,114.606,512.004,255.996,512C397.394,512.004,512,397.402,512,256.006 C512.009,114.61,397.394,0,255.996,0C114.606,0,0,114.614,0,256.006z"></path> <path style="fill:#eb0000;" d="M512,256.005c0-4.039-0.119-8.051-0.304-12.045c-0.426-0.558-93.859-94.043-94.499-94.499 c-1.281-1.797-3.28-3.045-5.658-3.045H201.899c-1.885,0-3.7,0.756-5.026,2.099L95.436,251.029c-2.727,2.755-2.727,7.187,0,9.942 l101.437,102.514c0.015,0.015,0.036,0.019,0.051,0.034l1.581,1.598c0.015,0.015,133.868,133.851,133.883,133.866l1.055,1.067 C436.972,467.232,512,370.401,512,256.005z"></path>
                                            <g><path style="fill:#F4F6F9;" d="M411.539,146.416H201.9c-1.885,0-3.7,0.756-5.026,2.099L95.436,251.029 c-2.727,2.755-2.727,7.187,0,9.942l101.437,102.514c1.326,1.343,3.141,2.099,5.026,2.099h209.641c3.908,0,7.07-3.166,7.07-7.07 V153.486C418.609,149.582,415.447,146.416,411.539,146.416z M404.469,351.444H204.847L110.412,256l94.436-95.444h199.621V351.444z"></path> <path style="fill:#F4F6F9;" d="M258.073,306.949c1.381,1.381,3.189,2.071,4.998,2.071c1.809,0,3.618-0.69,4.998-2.071 l40.955-40.955l40.958,40.958c1.381,1.381,3.189,2.071,4.998,2.071s3.618-0.69,4.998-2.071c2.762-2.762,2.762-7.235,0-9.997 l-40.958-40.958l40.958-40.958c2.762-2.762,2.762-7.235,0-9.997c-2.762-2.762-7.235-2.762-9.997,0l-40.958,40.958l-40.955-40.955 c-2.762-2.762-7.235-2.762-9.997,0c-2.762,2.762-2.762,7.235,0,9.997l40.955,40.955l-40.955,40.955 C255.311,299.714,255.311,304.188,258.073,306.949z"></path></g>
                                        </g>
                                    </svg> */}
                            </Button>
                            
                            {/** Media Field Uplod/Select option */}
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(image) => updateRepeaterItem(image, item.image_caption, item.popup_url, index)}
                                    ref={mediaUploadRef}
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
            <section {...useBlockProps.save({ className: `alignwide ggm-mg-grid grid-size-${gridItem} ${fancyBoxEnabled ? 'hasfancy' : ''}` })}> { /* }//className={`ggm-mg-grid grid-size-${gridItem} ${ fancyBoxEnabled ? 'hasfancy' : '' }`}>{*/}

                {attributes.items.map((item, index) => (
                    <div className="ggm-mg-media" key={index}>
                        { /* console.log(item.image.sizes) */}
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
                                                        <img src={item.image.sizes.full.url} alt="" />
                                                    </a>
                                                    : <a href={item.image.sizes.full.url} data-fancybox="video-gallery" data-caption={item.image_caption}>
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
                            item.image_caption && (
                                <p>{item.image_caption}</p>
                            )
                        }
                    </div>
                ))}
            </section>
        );
    },
});