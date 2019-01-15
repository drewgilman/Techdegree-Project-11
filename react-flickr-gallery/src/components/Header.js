import React, {Component} from 'react';
import Form from './Form';
import Navigation from './Navigation';

class Header extends Component {
  render () {
    return(
      <div>
        <Form handleSubmit={this.props.handleSubmit} onSearchChange={this.props.onSearchChange}/>
        <Navigation />
      </div>
    );
  }
}


export default Header;
