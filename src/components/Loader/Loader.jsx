import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

import s from './Loader.module.css';

function Loader({ color, height, width }) {
  return (
    <span className={s.loader}>
      <Oval color={color} height={height} width={width} />
    </span>
  );
}

Loader.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
export default Loader;
