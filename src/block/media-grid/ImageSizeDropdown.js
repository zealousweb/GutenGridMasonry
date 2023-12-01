import { SelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

const ImageSizeDropdown = ({ imageSizes, onSelectImageSize }) => {
    return (
        <SelectControl
            label="Select Image Size"
            value={imageSizes[0]} // Set the default value or handle it as needed
            options={imageSizes.map(size => ({ label: size, value: size }))}
            onChange={onSelectImageSize}
        />
    );
};

// Use withSelect to inject imageSizes data into the component
const ImageSizeDropdownWithSelect = withSelect((select) => {
    const { getSettings } = select('core/editor');
    const imageSizes = getSettings().imageSizes.map((size) => size.slug);

    return {
        imageSizes,
    };
})(ImageSizeDropdown);

export default ImageSizeDropdownWithSelect;
