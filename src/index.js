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

import './block/post-grid/post-grid.js';
import './block/media-grid/media-grid.js';
// import './block/image-and-text/imagetextblock.js';
// import './block/card-block/cardblock.js';
// import './block/testimonials/testimonials.js';
// import './block/angled-background-column/angledbackgroundcolumn.js';
