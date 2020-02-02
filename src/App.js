import './App.css';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
});

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>

        <Navbar alert = {this.props.alert}/>
        <div style={{ padding: 10 }}>
          <Grid
            container
            //item xs={12}
            direction="raw"
            justify="flex-start"
            alignItems="center"
            spacing={1}
            
          >
            <Grid  item><Main /></Grid>

            


            {/* <Paper  className={classes.paper}/>
            <Paper  className={classes.paper}/>
            <Paper  className={classes.paper}/> */}
          </Grid>
        </div>

      </div>
    );
  }
}
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    alert: store.alert
  }
}  
export default connect(mapStateToProps)(App);
