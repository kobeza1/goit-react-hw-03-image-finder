import PropTypes from 'prop-types';
import { GalleryItemStyled, Image } from './GalleryItem.styled';

export const GalleryItem = ({ imageObject, onClick }) => {
  const { id, tags, webformatURL } = imageObject;
  return (
    <GalleryItemStyled key={id} className="gallery-item">
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(imageObject)}
      />
    </GalleryItemStyled>
  );
};

GalleryItem.propTypes = {
  imageObject: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
