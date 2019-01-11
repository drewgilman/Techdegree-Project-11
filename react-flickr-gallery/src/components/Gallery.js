import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cats from './Cats';
import Start from './Start';
import NotFound from './NotFound';

class Gallery extends Component {
  render() {
    return (
      <div className="photo-container">
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route path="/cats" component={Cats}/>
          <Route component={NotFound}/>
        </Switch>
      </div>

    );
  }
}

export default Gallery;
