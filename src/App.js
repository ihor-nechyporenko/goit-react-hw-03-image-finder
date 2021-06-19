import { Component } from 'react';

import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button/';
import Modal from './components/Modal';
import api from './service/images-api';

import './common.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    largeImageUrl: '',
    description: '',
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    this.scrollToBottom();
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    api
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showSelectedImage = (url, alt) => {
    this.setState({
      largeImageUrl: url,
      description: alt,
    });

    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, largeImageUrl, description } =
      this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onImageClick={this.showSelectedImage} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal
            url={largeImageUrl}
            alt={description}
            onClose={this.toggleModal}
          />
        )}
      </Container>
    );
  }
}

export default App;
