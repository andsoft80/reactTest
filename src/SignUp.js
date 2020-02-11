import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import axios from 'axios';
import {

  Redirect

} from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  state = {
    redirect: false
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    const data = new FormData(event.target);
    //alert(data.get('promo'));

    const body = new URLSearchParams(data);
    // for (const pair of data) {
    //   body.append(pair[0], pair[1]);
    // }
    //alert(body);

    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    
    axios.post("http://localhost:8080/signup", body, config)
      .then(response => {
        //console.log(response);
        //alert(JSON.stringify(response));
        if(response.data!='fail'){
          this.setState({ redirect: true })
        }
        else{
          alert("User with similar email alredy exist!");
        }
      })
      .catch(error => {
        console.log(error);
      });
  //   fetch("http://localhost:8080/signup", {
  //     body: body,
  //     headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         // "Content-Type": "multipart/form-data",
  //     },
  //     method: "post",
  // })
  event.preventDefault();

  }

  render() {
    const { classes } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/signin'/>;
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          {/* <form className={classes.form} noValidate action = "http://localhost:8080/signup" method="POST"> */}
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value={true} color="primary" name="promo" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />


              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                {/* <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link> */}
                <NavLink to="/signin"> {"Already have an account? Sign in"} </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    )
  };
}

export default withStyles(styles)(SignUp);