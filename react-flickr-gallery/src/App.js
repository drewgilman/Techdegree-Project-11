import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//App components
import Header from './components/Header';
import Start from './components/Start';
import Cats from './components/Cats';
import Search from './components/Search';




const App = () => {
  return (
    <BrowserRouter>
    <div className="container" >

      <Header />

        <Switch>
          <Route exact path="/" component={Start}/>
          <Route path="/cats" render={ () => <Cats term="cats"/>} />
          <Route path="/search" component={Search}/>
        </Switch>


    </div>
    </BrowserRouter>
  );
}

export default App;
