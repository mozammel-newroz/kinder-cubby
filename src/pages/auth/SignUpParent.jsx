import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import logo from "../../assets/images/logo.png";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  divider: {
    background: "#E5EBFD",
    height: "3px",
   
  },
  image_style: {
    margin: "15px auto",
    textAlign: "center",
  },
  header_title: {
    fontSize: "2rem",
    textAlign: "center",
    margin: "40px",
  },
  header_title2: {
    fontSize: "1.3rem",
    marginBottom: "20px",
  },
  margin_bottom20: {
    marginBottom: 20,
  },
  banner: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: 50,

    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   padding: 0,
    // },
  },
  banner2: {
    borderRadius: 10,
    padding: 50,

    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  banner_button: {
    padding: "13px 35px  !important",
  },
  text_field:{
    width:300
  }
}));

const SignUpParent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.image_style}>
        <img src={logo} alt="" />
      </div>
      <Divider className={classes.divider} />
      <div>
        <Typography className={classes.header_title}>
          Hello! Thanks for showing interest in our
          <br /> childcare software
        </Typography>
        <Container maxWidth="lg">
          <Grid container className={classes.wrapper}>
            <Grid item lg={12} md={12}>
              <div className={classes.banner}>
                <Typography className={classes.header_title2}>
                  Hello! Thanks for showing interest in our
                  <br /> childcare software
                </Typography>
                <Typography variant="body2" className={classes.margin_bottom20}>
                  Use the link below to login to KinderCubby to access web
                  portal
                </Typography>

                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.banner_button} button`}
                  >
                    Click here to login
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container className={classes.wrapper}>
            <Grid item lg={12} md={12}>
              <div className={classes.banner2}>
                <Typography className={classes.header_title2}>
                  My center doesn’t use KinderCubby and I would like to send a
                  referral
                </Typography>
                <Typography variant="body2" className={classes.margin_bottom20}>
                  Thank you for recommending KinderCubby.
                  <br /> Please enter your center’s email address so we can send
                  them an invitation.
                </Typography>

                <div className={classes.margin_bottom20}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    placeholder="Center’s Email Address"
                    variant="outlined"
                    className={classes.text_field}
                  />
                </div>
                <div className={classes.margin_bottom20}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.banner_button} button`}
                  >
                    Send Invitation
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Divider className={classes.divider} />
    </>
  );
};

export default SignUpParent;
