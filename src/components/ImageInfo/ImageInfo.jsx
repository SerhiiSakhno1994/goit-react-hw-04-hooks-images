import React, { Component } from 'react';
import Notiflix from 'notiflix';

import FetchPixabay from 'components/services/pixabayApi';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import LargeImage from 'components/LargeImage/LargeImage';
import s from './ImageInfo.module.css';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

export default class ImageInfo extends Component {
  state = {
    hits: [],
    picturesName: '',
    page: 1,
    total: 0,
    largeImageURL: '',
    isModal: false,
    loader: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.picturesName !== this.state.picturesName ||
      prevState.page !== this.state.page
    ) {
      this.fetchPicturesName();
    }
  }

  fetchPicturesName = () => {
    const { picturesName, page } = this.state;
    this.setState({
      loader: true,
    });
    FetchPixabay(picturesName, page).then(r => {
      if (r.totalHits === 0 && r.hits.length === 0) {
        Notiflix.Report.failure(
          'WARNING',
          `Sorry, there is no image named ${picturesName}`,
          'Close'
        );
      }

      this.setState(prevState => ({
        hits: [...prevState.hits, ...r.hits],
        total: r.total,
        loader: false,
      }));
    });
  };

  onSubmit = searchPicturesName => {
    this.setState({
      hits: [],
      picturesName: searchPicturesName,
      page: 1,
    });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClickImg = largeImageURL => {
    this.setState({
      largeImageURL,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { hits, total, page, largeImageURL, loader, showModal } = this.state;
    const loadMore =
      total > page * 12 && loader ? (
        <Loader color={'#3f51b5'} height={100} width={100} />
      ) : (
        total > page * 12 && (
          <Button onClick={this.handleClick} text={'Load more'} />
        )
      );
    return (
      <div className={s.ImageInfo}>
        <Searchbar onSubmit={this.onSubmit} />
        {hits.length > 0 && (
          <ImageGallery hits={hits} handleClickImg={this.handleClickImg} />
        )}
        {loadMore}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <LargeImage largeImageURL={largeImageURL} />
          </Modal>
        )}
      </div>
    );
  }
}
