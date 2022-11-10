import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from 'utils/api-service';
import { propFilter } from 'utils/prop-filter';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    currentImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      this.getImages();
    }
    if (prevState.page !== page) {
      this.getMoreImages();
    }
  }

  handleQuery = query => {
    this.setState({ query: query });
  };

  getImages = async () => {
    this.setState({ isLoading: true });
    const { page, query } = this.state;

    await fetchImages(page, query)
      .then(response => {
        const {
          data: { hits },
        } = response;
        this.setState({
          images: [...propFilter(hits)],
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  getMoreImages = async () => {
    this.setState({ isLoading: true });
    const { page, query } = this.state;

    await fetchImages(page, query)
      .then(response => {
        const {
          data: { hits },
        } = response;
        this.setState(prevState => ({
          images: [...prevState.images, ...propFilter(hits)],
        }));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  pageIncrement = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  openModal = image => {
    this.setState({ currentImage: image });
  };

  closeModal = () => {
    this.setState({
      currentImage: null,
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleQuery} />
        <ImageGallery images={this.state.images} onClick={this.openModal} />
        {this.state.images.length !== 0 && (
          <Button text="Load more" onClick={this.pageIncrement} />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.currentImage && (
          <Modal
            currentImage={this.state.currentImage}
            onClose={this.closeModal}
          />
        )}
      </Container>
    );
  }
}

export default App;