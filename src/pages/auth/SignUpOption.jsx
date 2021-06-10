import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
import KinderCubbyLogoIcon from "../../assets/images/KinderCubbyLogoIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 200px)",
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

  button: {
    padding: "10px !important",
    marginTop: 20,
  },
  logoIcon: {
    textAlign: "center",
    marginBottom: 14,
  },
  link: {
    margin: "30px 0px 0px 30px",
    textAlign: "center",
   
  },
  link_text: {
    color: "#0B4295",
  },
}));

const SignUpOption = () => {
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
          <Link to="/sign-up">
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={`${classes.button} button`}
            >
              Owner or Directors
            </Button>
          </Link>

          <Link to="/sign-up">
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={`${classes.button} button`}
            >
              Teachers
            </Button>
          </Link>

          <Link to="/sign-up-parent">
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={`${classes.button} button`}
            >
              Parents
            </Button>
          </Link>

          <div className={classes.link}>
            <Link to="/login">
              <Typography variant="body2"  className={classes.link_text}>Already have an account</Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpOption;
