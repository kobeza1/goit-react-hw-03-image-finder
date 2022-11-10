import PropTypes from 'prop-types';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <GalleryItem key={image.id} imageObject={image} onClick={onClick} />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
  onClick: PropTypes.func.isRequired,
};
