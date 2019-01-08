import React, { Component } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Container from './components/Container';


class App extends Component {
  render() {
    return (
      <div className="container" >
        <Container />
        <Header />
        <Gallery />
      </div>
    );
  }
}

export default App;
