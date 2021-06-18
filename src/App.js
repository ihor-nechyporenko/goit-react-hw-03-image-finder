import { Component } from 'react';

import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button/';
import api from './service/images-api';

import './common.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
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
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .finally(() => this.setState({ isLoading: false }));

    this.scrollToBottom();
  };

  scrollToBottom = () => {
    // window.scrollBy({
    //     top: window.innerHeight,
    //     behavior: 'smooth',
    // });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
      </Container>
    );
  }
}

export default App;
