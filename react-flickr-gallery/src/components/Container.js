import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config'
import Gallery from './Gallery';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true
    };
  }

//Load images with new page load
  componentDidMount() {
    this.performSearch(this.props.term);
  }

//Load new images with each subsequent search
  componentDidUpdate(prevProps) {
    if (this.props.term !== prevProps.term) {
      this.performSearch(this.props.term);
    }
  }

//send search term to the Flickr servers and retrieve images
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=relevance&per_page=12&format=json&nojsoncallback=1
`)
    .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render () {
    return (
      <div>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Gallery data={this.state.images}/>
        }
      </div>

    );
  }
}

export default Container;
