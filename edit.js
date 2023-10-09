/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, Button } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './recent_post.js';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

/*
const MyRadioControl = () => {
    const [ option, setOption ] = useState( 'a' );

    return (
        <RadioControl
            label="User type"
            help="The type of the current user"
            selected={ option }
            options={ [
                { label: 'Author', value: 'a' },
                { label: 'Editor', value: 'e' },
            ] }
            onChange={ ( value ) => setOption( value ) }
        />
    );
};
*/
export default function Edit({ attributes, setAttributes }) {
    const { selectedOption } = attributes;

    const handleOptionChange = (option) => {
        setAttributes({ selectedOption: option });
    };

    if( selectedOption && selectedOption == 'media-gallery' ){
    	const [newItem, setNewItem] = useState({
		      name: '',
		      //email: '',
		      //description: '',
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
		        //email: '',
		        //description: '',
		        mediaId: null,
		      });
		    };

		    const handleRemoveItem = (index) => {
		      const updatedItems = [...attributes.items];
		      updatedItems.splice(index, 1);
		      setAttributes({ items: updatedItems });
		    };
    }

    
    
	return (
		<div>
	        <RadioControl
	            label="Select an option"
	            selected={selectedOption}
	            options={[
	                { label: 'Media Gallery', value: 'media-gallery' },
	                { label: 'Post', value: 'post-gallery' },
	            ]}
	            onChange={handleOptionChange}	            
	        />        
	        {
	        	selectedOption &&
	        		selectedOption == 'media-gallery'
	            	? <div>
				        Hello Media
				      </div>
	            	: 
	            		selectedOption == 'post-gallery'
	            		? <recent_post />
	            		: 'Please Select Option'
	            	
	        }
	    </div>
    );
}
