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

/**
 * Import style for backend and front end
*/



/**
 * import placeholder image to shown defalt
 */


/**
* WordPress dependencies
*/
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  TextareaControl,
  ToggleControl,
  RangeControl,
  Panel,
  PanelBody
} = wp.components;

/**
 * Media Grid block registration
 */
registerBlockType('gutengridmasonry/media-grid', {
  title: __('Media Grid', 'gutengridmasonry'),
  description: __('Media grid Masnary is having ability to add Images tht will have option to view in model area like popup in full screen and also having an option to play video to the image', 'gutengridmasonry'),
  icon: 'format-gallery',
  category: 'guten-grid-masonry',
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
    }
  },
  /**
   * Main Editor Structure 
   * @param {*} props 
   * @returns 
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
    const {
      gridItem
    } = attributes;
    const addRepeaterItem = () => {
      const newItems = [...attributes.items, {
        image: null,
        image_caption: '',
        popup_url: ''
      }];
      setAttributes({
        items: newItems
      });
    };

    /** update Repeater data */
    const updateRepeaterItem = (image, image_caption, popup_url, index) => {
      const newItems = [...attributes.items];
      newItems[index].image = image;
      newItems[index].image_caption = image_caption;
      newItems[index].popup_url = popup_url;
      setAttributes({
        items: newItems
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "MediaGrid Settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Enable Fancybox",
      checked: fancyBoxEnabled,
      onChange: newIsfancyBoxEnabled => setAttributes({
        fancyBoxEnabled: newIsfancyBoxEnabled
      }),
      className: "custom-label"
    }), fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Enable Video Option",
      checked: videoOptionEnabled,
      onChange: newVideoOptionEnabled => setAttributes({
        videoOptionEnabled: newVideoOptionEnabled
      }),
      className: "custom-label"
    }) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "custom-label"
    }, __('Select Grid Items', 'gutengridmasonry')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: gridItem,
      onChange: newGridItem => setAttributes({
        gridItem: newGridItem
      }),
      min: 1,
      max: 5
    }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      ...useBlockProps.save({
        className: `alignwide ggm-mg-grid grid-size-${gridItem} ${fancyBoxEnabled ? 'hasfancy' : ''}`
      })
    }, attributes.items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ggm-mg-wrap",
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: image => updateRepeaterItem(image, item.image_caption, item.popup_url, index),
      allowedTypes: ['image'],
      value: item.image && item.image.id,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ggm-mg-image",
        onClick: open
      }, item.image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.thumbnail.url,
        alt: ""
      }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: ""
      }))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ggm-mg-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
      placeholder: "Image Caption",
      className: "mg-image-caption",
      value: item.image_caption,
      onChange: image_caption => updateRepeaterItem(item.image, image_caption, item.popup_url, index)
    }), videoOptionEnabled && fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl
    //label="Video Popup URL"
    , {
      placeholder: "Video Popup URL",
      className: "mg-popup-video",
      value: item.popup_url,
      onChange: popup_url => updateRepeaterItem(item.image, item.image_caption, popup_url, index)
    }) : ''))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      class: "ggm-mg-button button button-primary button-large",
      onClick: addRepeaterItem
    }, "Add Row")));
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
        ...useBlockProps.save({
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
      }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: ""
      }))), item.image_caption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.image_caption))))
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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Import Styles 
 */



/**
* WordPress dependencies
*/


const {
  RangeControl,
  Panel,
  PanelBody
} = wp.components;


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
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Your amazing blog posts', 'gutengridmasonry'),
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
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create a Quick and Easy Post Grid', 'gutengridmasonry'),
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
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Read More →', 'gutengridmasonry'),
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
  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Read All Posts', 'gutengridmasonry')
}]]]]]];

/**
 * Post Grid block registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('gutengridmasonry/post-grid', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Post Grid', 'gutengridmasonry'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('An advanced block that allows displaying post types based on different query parameters and visual configurations.', 'gutengridmasonry'),
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
  category: 'guten-grid-masonry',
  example: {},
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('post-list', 'gutengridmasonry'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Post Listing', 'gutengridmasonry')],
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "PostGrid Settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "custom-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select Grid Items', 'gutengridmasonry')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: gridItem,
      onChange: newGridItem => setAttributes({
        gridItem: newGridItem
      }),
      min: 1,
      max: 3
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
        className: `ggm-pg-grid grid-size-${gridItem}`
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
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
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
        className: `ggm-pg-grid ggm-grid grid-size-${gridItem}`
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null));
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
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
//import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './style.scss';

/**
 * Internal dependencies
 */
// import Edit from './edit';
// import save from './save';
// import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
//registerBlockType( metadata.name, {
/**
 * @see ./edit.js
 */
//edit: Edit,

/**
 * @see ./save.js
 */
//save,
//} );

/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */



// import './block/image-and-text/imagetextblock.js';
// import './block/card-block/cardblock.js';
// import './block/testimonials/testimonials.js';
// import './block/angled-background-column/angledbackgroundcolumn.js';

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkgutengridmasonry"] = self["webpackChunkgutengridmasonry"] || [];
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