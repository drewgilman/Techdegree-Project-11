import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//App components
import Header from './components/Header';
import Start from './components/Start';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Fish from './components/Fish';
import Search from './components/Search';




class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="container" >
        <Header />
          <Switch>
            <Route exact path="/" component={Start}/>
            <Route path="/cats" render={ () => <Cats term="cats"/>} />
            <Route path="/dogs" render={ () => <Dogs term="dogs"/>} />
            <Route path="/fish" render={ () => <Fish term="fish"/>} />
            <Route path="/search" render={ () => <Search term="ball"/>}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
