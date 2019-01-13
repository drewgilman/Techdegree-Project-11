import React, {Component} from 'react';
import Form from './Form';
import Navigation from './Navigation';

class Header extends Component {

  state = {
    term: ''
  }

  render () {
    return(
      <div>
        <Form />
        <Navigation />
      </div>
    );
  }
}


export default Header;

{/* When the state.term of <Form /> is updated,
  pass that value, to the state.term of this component as see above*/}
