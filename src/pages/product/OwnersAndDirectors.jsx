import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import GrowYour from "../../assets/images/GrowYour.png";
import DirectorDemoVideo from "../../assets/images/DirectorDemoVideo.png";
import RealTimeUpdates from "../../assets/images/RealTimeUpdates.png";
import StaffManagement from "../../assets/images/StaffManagement.png";
import BillingAndInvoicing from "../../assets/images/BillingAndInvoicing.png";
import DigitalReport from "../../assets/images/DigitalReport.png";
import ConnectedWorkflow from "../../assets/images/ConnectedWorkflow.png";
import PurpleCircle from "../../assets/images/PurpleCircle.png";
import FocusOnChildern from "../../assets/images/FocusOnChildern.png";
import owner_youtube from "../../assets/images/owner_youtube.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },

  banner: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 10,
    },
  },

  banner_image: {
    flex: 1,
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  banner_content: {
    flex: 1,
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 20,
    },
  },
  banner_button: {
    padding: "13px 35px  !important",
  },

  banner_content_text: {
    fontSize: 24,
    marginBottom: 30,
  },
  banner_headline: {
    fontWeight: 600,
    marginBottom: 80,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  margin_left_20: {
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 10,
    },
  },
  wrapper2: {
    marginTop: 120,
    padding: 120,
    width: "100%",
    background: "#E3EBFC",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  card: {
    position: "absolute",
    zIndex: 9,
    display: "flex",
    width: "700px",
    left: "calc(50% - 350px)",
    top: -80,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  right: {
    padding: "20px 25px",
  },
  right_text: {
    fontSize: 20,
  },
  play: {
    color: "#0B4295",
    padding: "13px 0px  !important",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  activity_box: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
    },
  },

  activity_image: {
    maxWidth: "100%",
    background: `url(${PurpleCircle})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: 20,
    marginBottom: 15,
  },
  activity_second: {
    padding: "50px 120px 0px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  activity_headline: {
    padding: 10,
  },
  activity_wrapper: {
    padding: "60px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },
  align_left: {
    textAlign: "left",
  },
  margin_bottom_30: {
    marginBottom: 30,
  },
  image: {
    maxWidth: "100%",
  },
  parent_child: {
    display: "flex",
    justifyContent: "center",
  },
  tag: {
    textAlign: "center",
    background: "#E3EBFC",
    borderRadius: 13,
    padding: "40px 20px",
    margin: 15,
    "& h3": {
      fontWeight: 600,
      marginBottom: 10,
    },
  },
  tag_last: {
    marginRight: 0,
  },
  tag_text: {
    marginTop: -10,
  },
  center: {
    textAlign: "center",
  },
}));

const OwnersAndDirectors = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Grow your
                </Typography>
                <Typography className={classes.banner_content_text}>
                  Sed a magna semper, porta purus eu, ullamcorper ligula. Nam
                  sit amet consectetur
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.banner_button} button`}
                  >
                    Contact Sales
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={`${classes.banner_button} ${classes.margin_left_20} button`}
                  >
                    Start free trial
                  </Button>
                </div>
              </div>
              <div className={classes.banner_image}>
                <img src={GrowYour} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={classes.wrapper2}>
          <Card className={classes.card}>
            <div className={classes.left}>
              <img src={DirectorDemoVideo} alt="" />
            </div>
            <div className={classes.right}>
              <Typography className={classes.right_text}>
                See what directors are saying about KinderCubby
              </Typography>
              <Button
                // variant="contained"
                color="secondary"
                className={`${classes.play} button`}
                startIcon={<PlayCircleOutlineIcon />}
              >
                Watch In Action
              </Button>
            </div>
          </Card>
          <Grid item lg={12}>
            <Typography variant="h4" className={classes.activity_headline}>
              Activities that we are keeping track of
            </Typography>
          </Grid>
          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={RealTimeUpdates}
              alt=""
            />
            <div>
              <Typography variant="h5">Real-time updates</Typography>
              <Typography variant="subtitle1">
              Nulla eleifend pulvinar purus, molestie euismod odio
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={StaffManagement}
              alt=""
            />
            <div>
              <Typography variant="h5">Staff Management</Typography>
              <Typography variant="subtitle1">
              Nulla eleifend pulvinar purus, molestie euismod odio
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={BillingAndInvoicing}
              alt=""
            />
            <div>
              <Typography variant="h5">Billing & Invoicing</Typography>
              <Typography variant="subtitle1">
              Nulla eleifend pulvinar purus, molestie euismod odio
              </Typography>
            </div>
          </Grid>

          <Grid container className={classes.activity_second}>
            <Grid item lg={6} className={classes.activity_box}>
              <img
                className={classes.activity_image}
                src={DigitalReport}
                alt=""
              />
              <div>
                <Typography variant="h5">Digitised Reports</Typography>
                <Typography variant="subtitle1">
                Nulla eleifend pulvinar purus, molestie euismod odio
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} className={classes.activity_box}>
              <img
                className={classes.activity_image}
                src={ConnectedWorkflow}
                alt=""
              />
              <div>
                <Typography variant="h5">Connected workflow</Typography>
                <Typography variant="subtitle1">
                Nulla eleifend pulvinar purus, molestie euismod odio
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Automate more, less paperwork <br /> more focus on children
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.parent_child}>
            <img src={FocusOnChildern} alt="" className={classes.image} />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" className={classes.align_left}>
              Activity Tracking
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic
              ducimus possimus
            </Typography>

            <Typography variant="h5" className={classes.align_left}>
              Activity Tracking
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic
              ducimus possimus
            </Typography>

            <Typography variant="h5" className={classes.align_left}>
              Activity Tracking
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic
              ducimus possimus
            </Typography>

            <Typography variant="h5" className={classes.align_left}>
              Activity Tracking
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic
              ducimus possimus
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={5} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Impact of KinderCubby on Directors
            </Typography>
            <img src={owner_youtube} alt="" className={classes.image} />
          </Grid>

          <Grid item lg={4}>
            <div className={classes.tag}>
              <Typography variant="h3">85%</Typography>
              <Typography variant="h5">of users</Typography>
              <Typography variant="body1" className={classes.tag_text}>
                Would recommend KinderCubby
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.tag}>
              <Typography variant="h3">85%</Typography>
              <Typography variant="h5">of users</Typography>
              <Typography variant="body1" className={classes.tag_text}>
                Would recommend KinderCubby
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className={`${classes.tag} `}>
              <Typography variant="h3">85%</Typography>
              <Typography variant="h5">of users</Typography>
              <Typography variant="body1" className={classes.tag_text}>
                Would recommend KinderCubby
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              KinderCubby for owners & directors
            </Typography>
            <Typography variant="h6">
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
            </Typography>
            <div className={classes.center}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Try it Free
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={`${classes.banner_button} ${classes.margin_left_20} button`}
              >
                Explore Pricing
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OwnersAndDirectors;
