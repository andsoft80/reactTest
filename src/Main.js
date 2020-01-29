import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MediaCard from './Cards';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/profile' component={MediaCard}/>

    </Switch>
  </main>
)

export default Main;