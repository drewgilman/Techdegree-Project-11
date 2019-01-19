import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//App components
import Header from './components/Header';
import Start from './components/Start';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Fish from './components/Fish';
import Search from './components/Search';


class App extends Component {

  handleSubmit = (e, history, newText) => {
    //{e.preventDefault();}
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
          <Route path="/cats" render={ () => <Cats term="cats"/>} />
          <Route path="/dogs" render={ () => <Dogs term="dogs"/>} />
          <Route path="/fish" render={ () => <Fish term="fish"/>} />
          <Route path="/search/:searchTerm" render={ (props) => <Search term={props.match.params.searchTerm}/>}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
