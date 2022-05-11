import PropTypes from 'prop-types';

import s from './LargeImage.module.css';

function LargeImage({ largeImageURL }) {
  return (
    <img src={largeImageURL} alt={largeImageURL} className={s.LargeImage} />
  );
}

LargeImage.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};

export default LargeImage;
