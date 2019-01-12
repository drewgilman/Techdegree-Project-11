import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config'
import Gallery from './Gallery';

class Container extends Component {


  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1
`)
    .then(response => {
        this.setState({
          images: response.data.photos.photo
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render () {

    return (
      <Gallery data={this.state.images}/>
    );
  }
}

export default Container;
