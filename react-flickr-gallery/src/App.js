import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Container from './components/Container';




const App = () => {
  return (
    <BrowserRouter>
    <div className="container" >
      <Container />
      <Header />
      <Gallery />
    </div>
    </BrowserRouter>
  );
}

export default App;
