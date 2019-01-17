import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//App components
import Header from './components/Header';
import Start from './components/Start';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Fish from './components/Fish';
import Search from './components/Search';
import NotFound from './components/NotFound';


class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit = (e, history) => {
    e.preventDefault();
    e.currentTarget.reset();
    let searchText= this.state.searchText;
    let url = `search/${searchText}`;
    history.push(url);
  }


  render () {
    let searchText= this.state.searchText;
    return (
      <BrowserRouter>
      <div className="container" >
      <Route path="/" render={ props =>
        <Header history={props.history} onSearchChange={this.onSearchChange} handleSubmit={this.handleSubmit}/>} />
          <Switch>
            <Route exact path="/" component={Start}/>
            <Route path="/cats" render={ () => <Cats term="cats"/>} />
            <Route path="/dogs" render={ () => <Dogs term="dogs"/>} />
            <Route path="/fish" render={ () => <Fish term="fish"/>} />
            <Route path="/search" render={ () => <Search term={searchText}/>}/>
            <Route path="/notfound" component={NotFound} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
