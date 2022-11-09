import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = event => {
    const { value } = event.currentTarget;
    this.setState({
      query: value,
    });
  };

  handeSubmit = event => {
    // this.props.onSubmit
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast('Please enter a request');
      return;
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handeSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
        <ToastContainer />
      </header>
    );
  }
}

export default Searchbar;
