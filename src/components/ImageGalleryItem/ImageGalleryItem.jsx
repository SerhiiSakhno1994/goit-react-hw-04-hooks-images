import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ largeImageURL, webformatURL, handleClickImg }) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => handleClickImg(largeImageURL)}
    >
      <img src={webformatURL} alt="" className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  handleClickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
