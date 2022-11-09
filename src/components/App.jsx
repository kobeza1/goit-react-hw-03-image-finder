import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    pictures: [],
    query: '',
    page: 1,
  };

  componentDidMount() {
    console.log('Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // }
  }

  showImages = () => {
    console.log('showImages()');
    // this.setState(prevState => ({
    //   isShown: !prevState.isShown,
    // }));
  };

  handleQuery = query => {
    this.setState({ query: query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleQuery} />;
      </>
    );
  }
}

export default App;
