/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/media-grid/media-grid.js":
/*!********************************************!*\
  !*** ./src/block/media-grid/media-grid.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block/media-grid/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/block/media-grid/editor.scss");
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/block/media-grid/placeholder-image.png");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);

/**
 * Import style for backend and front end
*/



/**
 * import placeholder image to shown defalt
 */

//import ImageSizeDropdown from './ImageSizeDropdown';

/**
* WordPress dependencies
* @return void
*/








//import { useRef, useState } from 'react';

/**
 * Media Grid block registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.registerBlockType)('gridmasonryforguten/media-grid', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Media Grid', 'gridmasonryforguten'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Media grid Masonry is having ability to add Images tht will have option to view in model area like popup in full screen and also having an option to play video to the image', 'gridmasonryforguten'),
  icon: 'format-gallery',
  category: 'grid-masonry-for-guten',
  attributes: {
    /** Repeater Array containing Image, Description, and VideoURL */
    items: {
      type: 'array',
      default: []
    },
    /** Enable Disable option for FancyApp Lightbox */
    fancyBoxEnabled: {
      type: 'boolean',
      default: false
    },
    /** Video Option enable disable for Field */
    videoOptionEnabled: {
      type: 'boolean',
      default: false
    },
    /** Selection for Column Count 1 to 5 */
    gridItem: {
      type: 'number',
      default: 3
    },
    selectedSize: {
      type: 'string'
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
    const {
      attributes,
      setAttributes
    } = props;
    const {
      fancyBoxEnabled
    } = attributes;
    const {
      videoOptionEnabled
    } = attributes;
    //const { captionOptionsEnabled } = attributes;
    const {
      gridItem
    } = attributes;
    const {
      selectedSize
    } = attributes;

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
      const newItems = [...attributes.items, {
        image: null,
        image_caption: '',
        popup_url: '',
        checkboxx: true
      }];
      setAttributes({
        items: newItems
      });

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

    const deleteRepeaterItem = index => {
      //console.log({ index });
      const newItems = [...attributes.items];
      newItems.splice(index, 1);
      setAttributes({
        items: newItems
      });
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
      setAttributes({
        items: newItems
      });
    };
    const imageSizes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.select)('core/editor').getEditorSettings().imageSizes.map(size => size.slug);
    //const [selectedSize, setSelectedSize] = useState('full'); // Default size
    //const dispatch = useDispatch();
    const handleSizeChange = size => {
      setAttributes({
        selectedSize: size
      });
      setSelectedSize(size);

      // You can dispatch an action or handle the selected size as needed
      // For example, dispatch an action to update block attributes
      //dispatch('core/editor').editPost({ meta: { imageSize: size } });
    };

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
      title: "MediaGrid Settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
      label: "Enable Fancybox",
      checked: fancyBoxEnabled,
      onChange: newIsfancyBoxEnabled => setAttributes({
        fancyBoxEnabled: newIsfancyBoxEnabled
      }),
      className: "custom-label"
    }), fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
      label: "Enable Video Option",
      checked: videoOptionEnabled,
      onChange: newVideoOptionEnabled => setAttributes({
        videoOptionEnabled: newVideoOptionEnabled
      }),
      className: "custom-label"
    }) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: "Select Image Size",
      value: selectedSize,
      options: imageSizes.map(size => ({
        label: size,
        value: size
      }))
      //onChange={(onSelectImageSize) => setSize(onSelectImageSize)}
      //onChange={handleSizeChange}
      ,
      onChange: newSelectedSize => setAttributes({
        selectedSize: newSelectedSize
      })
      // Handle the selected image size
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "custom-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Grid Items', 'gridmasonryforguten')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RangeControl, {
      value: gridItem,
      onChange: newGridItem => setAttributes({
        gridItem: newGridItem
      }),
      min: 1,
      max: 5
    }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      ..._wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps.save({
        className: `alignwide ggm-mg-grid grid-size-${gridItem} ${fancyBoxEnabled ? 'hasfancy' : ''}`
      })
    }, attributes.items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ggm-mg-wrap",
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
      className: "remove-item",
      onClick: () => deleteRepeaterItem(index)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      fill: "#ff0000",
      width: "20",
      id: "Capa_1",
      viewBox: "0 0 482.428 482.429"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_bgCarrier",
      "stroke-width": "0"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_tracerCarrier",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_iconCarrier"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"
    }), " "), " "), " "))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
      label: "Enable Video Option",
      checked: item.checkboxx
      //onChange={(checkboxx) => setAttributes({ checkboxx: item.checkboxx })}
      ,
      onChange: checkboxx => updateRepeaterItem(item.image, item.image_caption, item.popup_url, checkboxx, index)
      //onChange={(checkboxx) => setAttributes({ checkboxx: true })}
      ,
      className: "toggle-caption"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
      onSelect: image => updateRepeaterItem(image, item.image_caption, item.popup_url, item.checkboxx, index)
      //ref={mediaUploadRef[index]}
      ,

      allowedTypes: ['image'],
      value: item.image && item.image.id,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ggm-mg-image",
        onClick: open
      }, item.image && selectedSize && item.image.sizes[selectedSize] ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes[selectedSize].url,
        alt: ""
      }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: ""
      }))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ggm-mg-content"
    }, item.image &&
    //item.checkboxx && 
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextareaControl, {
      placeholder: "Image Caption",
      className: "mg-image-caption",
      value: item.image_caption,
      onChange: image_caption => updateRepeaterItem(item.image, image_caption, item.popup_url, item.checkboxx, index)
    }), videoOptionEnabled && fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl
    //label="Video Popup URL"
    , {
      placeholder: "Video Popup URL",
      className: "mg-popup-video",
      value: item.popup_url,
      onChange: popup_url => updateRepeaterItem(item.image, item.image_caption, popup_url, item.checkboxx, index)
    }) : '')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      class: "ggm-mg-button button button-primary button-large",
      onClick: addRepeaterItem
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "50",
      viewBox: "0 0 32 32",
      fill: "#000000"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_bgCarrier",
      "stroke-width": "0"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_tracerCarrier",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_iconCarrier"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "plus"), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("desc", null, "Created with Sketch Beta."), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, " "), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Page-1",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Icon-Set-Filled",
      transform: "translate(-362.000000, -1037.000000)",
      fill: "#000000"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049",
      id: "plus"
    }, " "), " "), " "), " ")))));
  },
  /**
   * Main Save Structure
   * @param {*} param0 
   * @returns 
   */
  save: function ({
    attributes
  }) {
    /** Get constant values contains values to save */
    const {
      fancyBoxEnabled
    } = attributes;
    const {
      videoOptionEnabled
    } = attributes;
    const {
      gridItem
    } = attributes;
    return (/** Structure to show for update data */
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
        ..._wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps.save({
          className: `alignwide ggm-mg-grid grid-size-${gridItem} ${fancyBoxEnabled ? 'hasfancy' : ''}`
        })
      }, " ", attributes.items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ggm-mg-media",
        key: index
      }, item.image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, item.popup_url && videoOptionEnabled ? /** have Video available and also enabled the video popup from the side panel */
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.popup_url,
        className: "ggm-mg-video",
        "data-fancybox": "video-gallery",
        "data-caption": item.image_caption
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "34.875",
        height: "34.875",
        viewBox: "0 0 34.875 34.875"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        id: "Icon_awesome-play-circle",
        "data-name": "Icon awesome-play-circle",
        d: "M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.135,19.125-12.375,7.1a1.691,1.691,0,0,1-2.51-1.477V10.688a1.692,1.692,0,0,1,2.51-1.477l12.375,7.523A1.693,1.693,0,0,1,26.135,19.688Z",
        transform: "translate(-0.563 -0.563)"
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: ""
      })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.image.sizes.full.url,
        "data-fancybox": "video-gallery",
        "data-caption": item.image_caption
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: ""
      }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: ""
      })), item.image_caption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "image-caption"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.image_caption))))))
    );
  }
});

/***/ }),

/***/ "./src/block/post-grid/post-grid.js":
/*!******************************************!*\
  !*** ./src/block/post-grid/post-grid.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block/post-grid/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/block/post-grid/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Import Styles 
 */



/**
 * WordPress dependencies
 */





/** Post Template */
const POST_GRID_TEMPLATE = [/** Additional Heading and Description */
['core/group', {
  className: 'ggm-pg-title',
  style: {
    border: {
      style: 'solid',
      width: '0',
      radius: '0',
      color: '#dcdcdc'
    }
  }
}, [['core/paragraph', {
  className: 'ggm-pg-sub-heading',
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Your amazing blog posts', 'gridmasonryforguten'),
  align: 'center',
  style: {
    typography: {
      fontSize: '16px',
      fontWeight: 700,
      textTransform: 'uppercase'
    },
    spacing: {
      margin: {
        bottom: '15px',
        top: '0px',
        right: '0px',
        left: '0px'
      }
    }
  }
}], ['core/heading', {
  className: 'ggm-pg-main-heading',
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Create a Quick and Easy Post Grid', 'gridmasonryforguten'),
  textAlign: 'center',
  style: {
    typography: {
      fontWeight: 700
    },
    spacing: {
      margin: {
        bottom: '25px',
        top: '0px',
        right: '0px',
        left: '0px'
      }
    }
  }
}]]], /** Main Post Loop/Query with Default Wordpress Posts */
['core/query', {
  className: 'ggm-pg-loop-wrap',
  query: {
    inherit: false,
    offset: 0,
    postType: 'post',
    enhancedPagination: true
  },
  templateLock: true,
  displayLayout: false,
  align: false
}, [['core/post-template', {
  templateLock: true,
  layout: false,
  displayLayout: false,
  align: false
}, [['core/group', {
  className: 'ggm-pg-wrap',
  style: {
    border: {
      style: 'solid',
      width: '0',
      radius: '0',
      color: '#dcdcdc'
    },
    templateLock: true
  }
}, [['core/post-featured-image', {
  className: 'ggm-pg-featured-img',
  style: {
    width: '100%',
    height: '100%',
    spacing: {
      margin: {
        bottom: '0px',
        top: '0px',
        right: '0px',
        left: '0px'
      }
    }
  }
}], ['core/group', {
  className: 'ggm-pg-content',
  style: {
    spacing: {
      padding: {
        top: '100px',
        right: '25px',
        bottom: '25px',
        left: '25px'
      },
      margin: {
        top: '0px',
        bottom: '0px'
      }
    }
  }
}, [
// [ 'core/categories' ],
['core/post-title', {
  className: 'ggm-pg-title',
  style: {
    color: {
      text: '#ffffff'
    },
    typography: {
      fontSize: '20px',
      fontWeight: 700
    },
    spacing: {
      margin: {
        bottom: '15px',
        top: '15px',
        right: '0px',
        left: '0px'
      }
    }
  }
}], ['core/post-excerpt', {
  excerptLength: 20,
  moreText: '&nbsp;',
  className: 'ggm-pg-description',
  style: {
    typography: {
      lineHeight: 1.2
    },
    color: {
      text: '#ffffff'
    },
    spacing: {
      margin: {
        top: '0',
        bottom: '20px',
        left: '0',
        right: '0'
      }
    }
  }
}], ['core/read-more', {
  className: 'ggm-pg-link',
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Read More →', 'gridmasonryforguten'),
  style: {
    color: {
      text: '#ffffff'
    },
    typography: {
      textDecoration: 'underline',
      fontSize: '16px'
    },
    spacing: {
      margin: {
        'top': '0',
        'bottom': '20px',
        'left': '0',
        'right': '0'
      }
    }
  }
}], ['core/group', {
  className: 'ggm-pg-date-wrap',
  style: {
    spacing: {
      padding: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      margin: {
        top: '0px',
        bottom: '0px'
      }
    }
  }
}, [['core/post-date', {
  className: 'ggm-pg-date',
  style: {
    spacing: {
      margin: '0'
    },
    color: {
      text: '#ffffff'
    },
    typography: {
      fontSize: '13px'
    }
  }
}], ['core/post-author', {
  className: 'ggm-pg-author',
  style: {
    typography: {
      fontSize: '13px'
    },
    spacing: {
      'margin': '0'
    }
  }
}]]]]]]]]], ['core/query-pagination', {
  className: 'post-pagination'
}]]], ['core/group', {
  className: 'ggm-pg-cta-button'
}, [['core/buttons', {
  layout: {
    type: 'flex',
    justifyContent: 'center'
  },
  style: {
    spacing: {
      margin: {
        top: '25px'
      }
    }
  }
}, [['core/button', {
  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Read All Posts', 'gridmasonryforguten')
}]]]]]];

/**
 * Post Grid block registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('gridmasonryforguten/post-grid', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Grid', 'gridmasonryforguten'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('An advanced block that allows displaying post types based on different query parameters and visual configurations.', 'gridmasonryforguten'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"
  })),
  category: 'grid-masonry-for-guten',
  example: {},
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('post-list', 'gridmasonryforguten'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Listing', 'gridmasonryforguten')],
  supports: {
    displayLayout: false,
    layout: false,
    align: false
  },
  attributes: {
    align: {
      type: 'string',
      default: 'wide'
    },
    gridItem: {
      type: 'number',
      default: 2
    }
  },
  //onChange: sliderIsUpdated(),
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      gridItem
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: "PostGrid Settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "custom-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Grid Items', 'gridmasonryforguten')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
      value: gridItem,
      onChange: newGridItem => setAttributes({
        gridItem: newGridItem
      }),
      min: 1,
      max: 3
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
        className: `ggm-pg-grid grid-size-${gridItem}`
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
      template: POST_GRID_TEMPLATE
    })));
  },
  save: ({
    attributes
  }) => {
    const {
      gridItem
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps.save({
        className: `ggm-pg-grid ggm-grid grid-size-${gridItem}`
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_post_grid_post_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/post-grid/post-grid.js */ "./src/block/post-grid/post-grid.js");
/* harmony import */ var _block_media_grid_media_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/media-grid/media-grid.js */ "./src/block/media-grid/media-grid.js");



/***/ }),

/***/ "./src/block/media-grid/editor.scss":
/*!******************************************!*\
  !*** ./src/block/media-grid/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/media-grid/style.scss":
/*!*****************************************!*\
  !*** ./src/block/media-grid/style.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/post-grid/editor.scss":
/*!*****************************************!*\
  !*** ./src/block/post-grid/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/post-grid/style.scss":
/*!****************************************!*\
  !*** ./src/block/post-grid/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/media-grid/placeholder-image.png":
/*!****************************************************!*\
  !*** ./src/block/media-grid/placeholder-image.png ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/placeholder-image.9bffabc8.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgridmasonryforguten"] = self["webpackChunkgridmasonryforguten"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map