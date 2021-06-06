import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
import KinderCubbyLogoIcon from "../../assets/images/KinderCubbyLogoIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 200px)",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 50,
  },
  login_wrapper: {
    width: 400,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 10,
    },
  },
  login_box: {
    padding: 35,
    borderRadius: 12,
    boxShadow: "1px 1px 5px 1px #ddd",
  },
  title: {
    fontWeight: 400,
    fontSize: "1.7rem",
  },
  input: {
    marginBottom: 30,
  },
  inputField: {
    padding: "5px",
    height: 45,
    borderRadius: 7,
  },
  inputLabel: {
    top: -5,
  },
  button: {
    padding: "10px !important",
    marginTop: -10,
  },
  logoIcon: {
    textAlign: "center",
    marginBottom: 14,
  },
  link: {
    margin: "30px 0px 15px 30px",
    textAlign: "center",
  },
  center: {
    textAlign: "center",
    display: "block",
    color: "#999",
  },
  link_text: {
    color: "#0B4295",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.login_wrapper}>
        <div className={classes.logoIcon}>
          <img width="35px" src={KinderCubbyLogoIcon} alt="" />
        </div>
        <Typography variant="h4" className={classes.title}>
          Log into KinderCubby
        </Typography>
        <div className={classes.login_box}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            className={classes.input}
            InputProps={{
              className: classes.inputField,
            }}
            InputLabelProps={{
              className: classes.inputLabel,
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            className={classes.input}
            InputProps={{
              className: classes.inputField,
            }}
            InputLabelProps={{
              className: classes.inputLabel,
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={`${classes.button} button`}
          >
            Log In
          </Button>
          <div className={classes.link}>
            <Link to="/change-password">
              <Typography variant="body2" className={classes.link_text}>
                Forgot Password?
              </Typography>
            </Link>
          </div>
          <Typography variant="body" className={classes.center}>
            Don’t have an account?{" "}
            <Link to="/sign-up-option" className={classes.link_text}>
              Sign up{" "}
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
