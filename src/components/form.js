import React, { Component } from 'react';
import Input from './input';

class subscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert($this.state.email);
  }

  isValid() {
    if (this.state.email === '') {
      return false;
    }

    return true;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button disable={!this.isValid()} type="submit">Submit</button>
      </form>
    );
  }
}

export default subscribeForm;
