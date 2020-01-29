import './App.css';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <div style={{ padding: 20 }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Main />
          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
