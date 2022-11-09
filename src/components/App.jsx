import React, { Component } from 'react';

class App extends Component {
  state = {
  };

  componentDidMount() {
    console.log('Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // }
  }
 

  render() {
    return ();
  }
}

export default App;
