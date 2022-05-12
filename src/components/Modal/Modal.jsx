// import React, { Component } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    console.log('я визвався');
    window.addEventListener('keydown', handeleKeyDown);
    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      window.removeEventListener('keydown', handeleKeyDown);
    };
  });

  const handeleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handeleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={handeleBackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handeleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handeleKeyDown);
//   }

//   handeleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handeleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.handeleBackdropClick}>
//         <div className={s.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
