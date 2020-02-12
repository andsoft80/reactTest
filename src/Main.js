import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MediaCard from './Cards';
import Home from './Home';
import DxExp from './dxExp';
import dxForm from './dxForm';
import PlaceCard from './wfc_components/PlaceCard';

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/profile' component={MediaCard} />
      
      {/* <Route exact path='/' render={(props) => <Home text="Add Alert" {...props} />} /> */}
      <Route exact path='/' render={(props) => <PlaceCard locale="en" {...props} />}  />
      

    </Switch>
  </main>
)

export default (Main);