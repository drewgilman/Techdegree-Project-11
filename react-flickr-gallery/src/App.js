import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//App components
import Header from './components/Header';
import Start from './components/Start';
import Legos from './components/Legos';
import Guitars from './components/Guitars';
import Fire from './components/Fire';
import Search from './components/Search';


class App extends Component {

//Retrieve history to push, and input field text from within the Form
  handleSubmit = (e, history, newText) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${newText}`;
    history.push(url);
  }

  render () {
    return (
      <BrowserRouter>
      <div className="container" >
      <Route path="/" render={ props =>
        <Header history={props.history} handleSubmit={this.handleSubmit}/>} />
          <Route exact path="/" component={Start}/>
          <Route path="/legos" render={ () => <Legos term="lego"/>} />
          <Route path="/guitars" render={ () => <Guitars term="guitar"/>} />
          <Route path="/fire" render={ () => <Fire term="fire"/>} />
          <Route path="/search/:searchTerm" render={ (props) => <Search term={props.match.params.searchTerm}/>}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
