import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MediaCard from './Cards';
import Home from './Home';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/profile' component={MediaCard}/>
      <Route exact path='/' render={(props) => <Home text="Add Alert" {...props} /> } />

    </Switch>
  </main>
)

export default Main;