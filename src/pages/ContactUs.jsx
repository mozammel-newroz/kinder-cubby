import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import logo from "../assets/images/logo.png";

import HiRobot from "../assets/images/HiRobot.png";
import SearchingRobot from "../assets/images/SearchingRobot.png";
import Footer2 from "../components/Footer2";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  banner_button: {
    padding: "13px 35px  !important",
  },
  background_style: {
    backgroundColor: "#E5EBFD",
    marginTop: 30,
  },
  background_style2: {
    padding: "60px 0 60px 200px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 30px",
    },
  },

  paper: {
    padding: theme.spacing(3),
    textAlign: "start",
    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 19%)",
  },

  center_maging: {
    textAlign: "center",
    marginTop: "15px",
  },

  h6: {
    margin: "0px 0 15px 0 !important",
    textAlign: "start",
  },

  font_color: {
    color: "#21409A",
    marginLeft: 10,
  },

  banner: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      display: "block",
      textAlign: "center",
    },
  },
  banner_wrapper: {
    padding: "30px 150px",

    [theme.breakpoints.down("sm")]: {
      padding: "20px 0",
    },
  },
  banner_content_left: {
    flex: 1,
  },
  banner_content: {
    flex: 6,
    padding: "30px",
  },

  banner_image: {
    flex: 3,
    [theme.breakpoints.down("sm")]: {
      // display: "none",
      "& img": {
        width: "30%",
      },
    },
  },
  banner_image2: {
    flex: 3,

    [theme.breakpoints.down("sm")]: {
      // display: "none",
      "& img": {
        width: "30%",
      },
    },
  },
  banner_content2: {
    flex: 7,
  },
  text_start: {
    textAlign: "start",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  divider: {
    background: "#E5EBFD",
    height: "3px",

    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "32px",
    },
  },
  flex_wrapper: {
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  inner_wrapper: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  header_nav_item: {
    fontSize: 20,
    fontWeight: 600,
    padding: "0px 15px 3px 15px",
  },
  banner_button2: {
    padding: "13px 35px  !important",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 30px  !important",
      marginTop: 10,
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.flex_wrapper}>
          <div className={classes.inner_wrapper}>
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <Typography className={classes.header_nav_item}>
                Support
              </Typography>
            </div>
          </div>
          <div>
            <Button
              variant="outlined"
              color="secondary"
              className={`${classes.banner_button2} button`}
            >
              Go to KinderCubby
            </Button>
          </div>
        </div>
      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.banner_wrapper}>
            <div className={classes.banner}>
              <div className={classes.banner_image2}>
                <img width="70%" src={HiRobot} alt="" />
              </div>
              <div className={classes.banner_content2}>
                <Typography variant="h4" className={classes.text_start}>
                  Connect with KinderCubby
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Our teams are here to help
                </Typography>
              </div>
            </div>
            <Divider className={classes.divider} />
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.banner_wrapper}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" className={classes.h6}>
                    Customer Support
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Mobile{" "}
                    <span className={classes.font_color}>213 974 3211</span>
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Email{" "}
                    <span className={classes.font_color}>
                      support@kindercubby.com
                    </span>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" className={classes.h6}>
                    Sales
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Mobile{" "}
                    <span className={classes.font_color}>213 974 3911</span>
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Email{" "}
                    <span className={classes.font_color}>
                      sales@kindercubby.com
                    </span>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" className={classes.h6}>
                    Press & Media
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Mobile{" "}
                    <span className={classes.font_color}>213 974 3211</span>
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Email{" "}
                    <span className={classes.font_color}>
                      pr@kindercubby.com
                    </span>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" className={classes.h6}>
                    Careers
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Mobile{" "}
                    <span className={classes.font_color}>213 974 3911</span>
                  </Typography>

                  <Typography variant="subtitle2" gutterBottom>
                    Email{" "}
                    <span className={classes.font_color}>
                      careers@kindercubby.com
                    </span>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>

      <div className={classes.background_style}>
        <div className={classes.background_style2}>
          <div className={classes.banner}>
            <div className={classes.banner_content_left}></div>
            <div className={classes.banner_content}>
              <Typography variant="h4">
                Do you want to check our help centre?
              </Typography>
              <div className={classes.center_maging}>
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Try it Free
                </Button>
              </div>
            </div>
            <div className={classes.banner_image}>
              <img width="50%" src={SearchingRobot} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </>
  );
};

export default ContactUs;
