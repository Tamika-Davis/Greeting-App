import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      displayName: '',
    };
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleClick = (evt) => {
    this.setState({
      displayName: this.state.name,
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to My App</h1>
        <p>
          Hi there,{' '}
          {this.state.displayName || 'we have not been properly introduced'}
        </p>
        <p>Enter your name below so we can get better acquainted</p>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update name</button>
      </>
    );
  }
}

export default App;
