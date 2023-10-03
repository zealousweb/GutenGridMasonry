/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RadioControl, Button } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';



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
	            		? <div { ...useBlockProps() }  className={ 'alignwide' }>
				            <InnerBlocks
								template={[
									['core/query', {
											queryId:44,
											query: {
												offset:0,
												postType: 'post',
												order: 'desc',
												orderBy: 'date',
												perPage: 6,
												author: '',
												search: '',
												sticky:'',
											},
											displayLayout: { type: 'flex', columns: 3 },
											align: 'wide'							
										},
										[
											['core/post-template', { align: 'wide' },
												[
													['core/post-featured-image', { isLink: 1 }],
													['core/group', {											
															style: {
																color:{background: '#f7fbfb'},												
																border: { radius: { bottomLeft: '15px', bottomRight: '15px' } },
																spacing: { padding: { bottom: '25px', top: '25px', right: '25px', left: '25px' } },
															}
														},
														[
															['core/post-title', {
																isLink: 1,
																style: {
																	typography: { fontSize: '26px', fontWeight: 700 },
																}
															}],
															
															['core/post-excerpt', {
																textAlign: 'left',
																moreText: 'Learn More',
																className: 'blog_post_learn_more',
																style: {
																	typography: { fontSize: '16px'},
																}
															}],
														]
													]
												]
											],
											['core/separator', { className: 'alignwide is-style-wide' }],
											['core/query-pagination', {
													paginationArrow: 'arrow',
													align: 'wide',
													layout: {type:'flex', justifyContent:'space-between'},
												},
												[
													['core/query-pagination-previous', {}],
													['core/query-pagination-numbers', {}],
													['core/query-pagination-next', {}],
												],
											],
										]
									]
				                ] }
				                templateLock="all"
				            />
				        </div>
	            		: 'Please Select Option'
	            	
	        }
	    </div>
    );
}
