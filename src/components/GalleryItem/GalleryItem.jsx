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
