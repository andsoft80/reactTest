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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {

    Redirect

} from "react-router-dom";
import { render } from '@testing-library/react';

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

function click() {
    return (
        <Redirect to='/signup' />)


}

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'coconut' };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
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
      
      axios.post("http://localhost:8080/login", body, config)
        .then(response => {
          console.log(response);
          alert(JSON.stringify(response));
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
    render(){
        const { classes } = this.props;

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                {/* <form className={classes.form} noValidate action = "http://localhost:8080/login" method="POST"> */}
                <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            {/* <Link href="#" variant="body2">
                                Forgot password?
                            </Link> */}
                            <NavLink to="/forgotpass"> {"Forgot password?"} </NavLink>
                        </Grid>
                        <Grid item>
                            {/* <div>
                                <Link href="#" onClick={click} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </div> */}
                            <NavLink to="/signup"> {"Don't have an account? Sign Up"} </NavLink>


                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
     );
    }
}

export default withStyles(styles)(SignIn);
