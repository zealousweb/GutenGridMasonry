/**
 * Import style for backend and front end
*/
import './style.scss';
import './editor.scss';

/**
 * import placeholder image to shown defalt
 */
import PlaceholderImage from './placeholder-image.png';
//import ImageSizeDropdown from './ImageSizeDropdown';

/**
* WordPress dependencies
* @return void
*/
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, InspectorControls, useBlockProps } from '@wordpress/blockEditor';
import { TextControl, TextareaControl, ToggleControl, RangeControl, Panel, PanelBody, Button } from '@wordpress/components';
import { SelectControl } from '@wordpress/components';
import { select, useDispatch } from '@wordpress/data';
import { useState } from 'react';



//import { useRef, useState } from 'react';



/**
 * Media Grid block registration
 */
registerBlockType('gridmasonryforguten/media-grid', {
    title: __('Media Grid', 'gridmasonryforguten'),
    description: __('Media grid Masonry is having ability to add Images tht will have option to view in model area like popup in full screen and also having an option to play video to the image', 'gridmasonryforguten'),
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
        selectedSize: {
            type: 'string',
        }
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
        //const { captionOptionsEnabled } = attributes;
        const { gridItem } = attributes;
        const { selectedSize } = attributes;
        
        


        //const { isChecked } = attributes;

        // const MyCheckbox = ({ isChecked, onCheckboxChange }) => {
        //     return (
        //         <CheckboxControl
        //             label="Enable Feature"
        //             checked={isChecked}
        //             onChange={(newState) => onCheckboxChange(newState)}
        //         />
        //     );
        // };

        // const handleCheckboxChange = (newState) => {
        //     setAttributes({ isFeatureEnabled: newState });
        // };

        //const mediaUploadRef = useRef(null);
        //const mediaUploadRef = Array.from({ length: attributes.items.length }, () => useRef(null));

        // const handleButtonClick = () => {
        //     //console.log('media-grid-' + attributes.items.length);
        //     // Check if the ref has been assigned to the MediaUpload component
        //     //document.getElementById('media-grid-' + attributes.items.length).open();
        // };

        

        const addRepeaterItem = () => {
            // const oldItems = [attributes.items];
            // console.log(oldItems.length);
            // for (let i = 0; i <= oldItems.length; i++) {
            //     //console.log(oldItems[0][i].checkboxx);
            //     oldItems[0][i].checkboxx = false;
            // }
            const newItems = [...attributes.items, { image: null, image_caption: '', popup_url: '', checkboxx: true }];
            setAttributes({ items: newItems });

            //console.log('ee');
            // console.log(lastIndex);
            // const lastIndex = newItems.length - 1;
            // setAttributes({ items: newItems }, () => {
            //     // Trigger the image selection for the newly added row
            //     const lastIndex = newItems.length - 1;
            //     // if (mediaUploadRef[lastIndex] && mediaUploadRef[lastIndex].current) {
            //     //     mediaUploadRef[lastIndex].current.open();
            //     // }
            // });
            //const current = attributes.items.length; 
            //console.log('media-grid-' + attributes.items.length);
            
            //document.getElementById('media-grid-' + attributes.items.length).open();
            //document.getElementById('media-grid-' + attributes.items.length).trigger('click');

            //mediaUploadRef[attributes.items.length].trigger('click');
            //attributes.items.mediaUploadRef.open();
            //handleButtonClick(attributes.items.length);
        };

        const deleteRepeaterItem = (index) => {
            //console.log({ index });
            const newItems = [...attributes.items];
            newItems.splice(index, 1);
            setAttributes({ items: newItems });
        };

        /** update Repeater data */
        const updateRepeaterItem = (image, image_caption, popup_url, checkboxx, index) => {
            //const newItems = [...attributes.items, { image: null, image_caption: '', popup_url: '', checkboxx: false }];
            // {
                //     attributes.items.map((item, index) => {
                    //         return <li key={index}>{item.checkboxx}</li>
                    //     })
                    // }
            //document.getElementsByClassName('components-form-toggle__input').click();        
            const oldItems = [attributes.items];
            console.log(oldItems[0].length);
            for (let i = 0; i <= oldItems[0].length; i++) {
                //setAttributes({ items:  });
                console.log(oldItems[0][i]);
                // if ( oldItems[0][i].checkboxx  ){
                //     if ( oldItems[0][i].checkboxx == true){
                //         oldItems[0][i].checkboxx = false;
                //     }
                // }
            }
            //setAttributes({ items: oldItems });
            const newItems = [...attributes.items];
            newItems[index].image = image;
            newItems[index].image_caption = image_caption;
            newItems[index].popup_url = popup_url;
            newItems[index].checkboxx = checkboxx;
            setAttributes({ items: newItems });
        };

        
        const imageSizes = select('core/editor').getEditorSettings().imageSizes.map((size) => size.slug);
        //const [selectedSize, setSelectedSize] = useState('full'); // Default size
        //const dispatch = useDispatch();
        const handleSizeChange = (size) => {
            setAttributes({ selectedSize: size })
            setSelectedSize(size);

            // You can dispatch an action or handle the selected size as needed
            // For example, dispatch an action to update block attributes
            //dispatch('core/editor').editPost({ meta: { imageSize: size } });
        };
        

        


        return (
            <>
                {/** Side Panel Settings contains FancyApp Lightbox Enable Disable, Video URL Enable Disable, and Grid Column Selection */}
                <InspectorControls key="setting">
                    <Panel>
                        <PanelBody title="MediaGrid Settings">                            

                            {/* <ImageSizeDropdown onSelectImageSize={onSelectImageSize} /> */}

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

                            <SelectControl
                                label="Select Image Size"
                                value={selectedSize}
                                options={imageSizes.map((size) => ({ label: size, value: size }))}
                                //onChange={(onSelectImageSize) => setSize(onSelectImageSize)}
                                //onChange={handleSizeChange}
                                onChange={(newSelectedSize) => setAttributes({ selectedSize: newSelectedSize })}
                            // Handle the selected image size
                            />

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
                            </Button>


                            <ToggleControl
                                label="Enable Video Option"
                                checked={item.checkboxx}
                                //onChange={(checkboxx) => setAttributes({ checkboxx: item.checkboxx })}
                                onChange={(checkboxx) => updateRepeaterItem(item.image, item.image_caption, item.popup_url, checkboxx, index)}
                                //onChange={(checkboxx) => setAttributes({ checkboxx: true })}
                                className="toggle-caption"
                            />

                            {/* <MyCheckbox
                                isChecked={isFeatureEnabled}
                                onCheckboxChange={(checkboxx) => updateRepeaterItem(item.image_caption, item.popup_url, checkboxx, index)}
                            /> */}

                            
                            {/* <Button className="tests" onClick={() => handleButtonClick(index)}>
                                add image
                            </Button> */}
                            
                            {/** Media Field Uplod/Select option */}
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(image) => updateRepeaterItem(image, item.image_caption, item.popup_url, item.checkboxx, index)}
                                    //ref={mediaUploadRef[index]}
                                    
                                    allowedTypes={['image']}
                                    value={item.image && item.image.id}
                                    render={({ open }) => (
                                        <div className="ggm-mg-image" onClick={open}>
                                            {/* {item.image ? (
                                                // <img src={item.image.sizes.thumbnail.url} alt={selectedSize} />
                                                <img src={item.image.sizes[selectedSize].url} alt={selectedSize} />
                                            ) : (
                                                    <img src={PlaceholderImage} alt="" />
                                            )} */}
                                            {item.image && selectedSize && item.image.sizes[selectedSize] ? (
                                                <img src={item.image.sizes[selectedSize].url} alt="" />
                                            ) : (
                                                <img src={PlaceholderImage} alt="" />
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>

                            <div className="ggm-mg-content">
                                {
                                    item.image && //item.checkboxx && 
                                    <div>
                                    {/** Image Caption Description Field */}
                                    <TextareaControl
                                        placeholder="Image Caption"
                                        className="mg-image-caption"
                                        value={item.image_caption}
                                        onChange={(image_caption) => updateRepeaterItem(item.image, image_caption, item.popup_url, item.checkboxx, index)}
                                    />

                                    {/** Popup URL Option Field */}
                                    {
                                        videoOptionEnabled && fancyBoxEnabled
                                            ? <TextControl
                                                //label="Video Popup URL"
                                                placeholder="Video Popup URL"
                                                className="mg-popup-video"
                                                value={item.popup_url}
                                                onChange={(popup_url) => updateRepeaterItem(item.image, item.image_caption, popup_url, item.checkboxx, index)}
                                            />
                                            : ''
                                    }
                                </div>                                
                                }
                            </div>
                        </div>
                    ))}
                    {/** <InspectorControls key="setting">
                                    <Panel>
                                        <PanelBody title="Media Image Settings">
                                            </PanelBody>
                                        </Panel>
                                    </InspectorControls>*/}
                    {/** Add Media Image Button for Repeater */}
                    <button class="ggm-mg-button button button-primary button-large" onClick={addRepeaterItem}>
                        <svg width="50" viewBox="0 0 32 32" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-362.000000, -1037.000000)" fill="#000000"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus"> </path> </g> </g> </g></svg>
                    </button>
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
                                        : <div>
                                            <img src={item.image.sizes.full.url} alt="" />
                                        </div>
                                }
                                {
                                    item.image_caption && (
                                        <div class="image-caption">
                                            <p>{item.image_caption}</p>
                                        </div>
                                    )
                                }
                            </>
                        )}
                    </div>
                ))}
            </section>
        );
    },
});