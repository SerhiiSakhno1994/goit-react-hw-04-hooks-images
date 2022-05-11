import PropTypes from 'prop-types';

import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits, handleClickImg }) => {
  return (
    <ul className={s.ImageGallery}>
      {hits.map((hit, id) => (
        <ImageGalleryItem
          key={id.toString()}
          largeImageURL={hit.largeImageURL}
          webformatURL={hit.webformatURL}
          handleClickImg={handleClickImg}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  handleClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
