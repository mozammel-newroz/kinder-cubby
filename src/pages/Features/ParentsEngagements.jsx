import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import automated from "../../assets/images/automated.png";
import ChasingActivityImage1 from "../../assets/images/ChasingActivityImage1.png";
import activity_image from "../../assets/images/activity.png";
import StartNow_image from "../../assets/images/StartNow.png";
import DemoVideo_image from "../../assets/images/DemoVideo.png";
import YoutubeIcon from "../../assets/images/YoutubeIcon.png";
import FriendsAndFamily from "../../assets/images/FriendsAndFamily.png";
import SafeData from "../../assets/images/SafeData.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  wrapper2: {
    padding: "0px 50px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  banner: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: 50,
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

  activity_wrapper: {
    padding: "60px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },

  activity_box: {
    textAlign: "center",
  },
  activity_image: {
    maxWidth: "100%",
    padding: "0px 40px 15px 40px",
  },

  margin10: {
    marginBottom: 30,
  },
  activity_wrapper2: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: "40px 80px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  image: {
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  demo: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: "60px 70px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
      width: "100%",
    },
  },
  demo_image: {
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {},
  },
  demo_headline: {
    marginBottom: 50,
  },
  activity2: {
    display: "flex",
    alignItems: "center",
  },
  improve: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  improve_image: {
    maxWidth: "100%",
  },
  center_button: {
    textAlign: "center",
    marginTop: 40,
  },
  youtube: {
    position: "relative",
  },
  YoutubeIcon: {
    position: "absolute",
    left: "40%",
    top: "40%",
    [theme.breakpoints.down("xs")]: {
      left: "15%",
      top: "0%",
    },
  },
  padding_0: {
    marginTop: 0,
  },
  parent_cart: {
    background: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    height: 330
  },
  parent_cart_top: {
    display: "flex",
    alignItems: "center",
  },
  parent_cart_image: {
    position: "relative",
    zIndex: 99,
    "&::before": {
      content: '""',
      display: "block",
      height: 60,
      position: "absolute",
      height: "120%",
      width: "100%",
      background: "#8ACACD",
      zIndex: -1,
      borderRadius: "50%",
      left: -40,
      top: -30,
    },
    "& img": {
      width: "80%",
      marginTop: 15,
    },
  },
  parent_cart_image2: {
    position: "relative",
    zIndex: 99,
    "&::before": {
      content: '""',
      display: "block",
      height: 60,
      position: "absolute",
      height: "100%",
      width: "100%",
      background: "#8ACACD",
      zIndex: -1,
      borderRadius: "50%",
      right: -40,
      top: -30,
    },
    "& img": {
      width: "80%",
      marginTop: 15,
      float: "right",
    },
  },
  parent_cart_title: {
    flex: 1,
    // padding: 20
  },
  parent_cart_bottom: {
    padding: "40px 20px 20px 20px",
  },
}));

const ParentEngagements = () => {
  const classes = useStyles();
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Dedicated app for
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
                    Try it Free
                  </Button>
                </div>
              </div>
              <div className={classes.banner_image}>
                <img src={automated} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.activity_wrapper}>
          <Grid item lg={12}>
            <Typography variant="h4">
              No more chasing after kids to <br />
              record their activity
            </Typography>
          </Grid>

          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={ChasingActivityImage1}
              alt=""
            />

            <div>
              <Typography variant="h5">Activity Feed</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate natus consectetur temporibus
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={ChasingActivityImage1}
              alt=""
            />

            <div>
              <Typography variant="h5">Activity Feed</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate natus consectetur temporibus
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={ChasingActivityImage1}
              alt=""
            />

            <div>
              <Typography variant="h5">Activity Feed</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate natus consectetur temporibus
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <div className={classes.wrapper2}>
          <Grid container spacing={3} className={classes.activity_wrapper2}>
            <Grid item lg={12}>
              <Typography variant="h4">
                Activities that we are keeping track of
              </Typography>
              <Typography variant="h6" className={classes.padding_0}>
                No need to switch to different app for sharing. KinderCubby
                allows family and friends to be onboard.
              </Typography>
            </Grid>

            <Grid item lg={6}>
              <div className={classes.parent_cart}>
                <div className={classes.parent_cart_top}>
                  <div className={classes.parent_cart_image}>
                    <img src={FriendsAndFamily} alt="" />
                  </div>
                  <div className={classes.parent_cart_title}>
                    <Typography variant="h5">
                      let parent invite <br /> friend & family
                    </Typography>
                  </div>
                </div>
                <div className={classes.parent_cart_bottom}>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae aliquam maxime ipsam fugit laborum, praesentium
                    laboriosam saepe quibusdam quisquam eius animi ut, obcaecati
                    facere dolorum dolor, nisi beatae voluptatem excepturi.
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item lg={6}>
              <div className={classes.parent_cart}>
                <div className={classes.parent_cart_top}>
                  <div className={classes.parent_cart_title}>
                    <Typography variant="h5">
                      let parent invite <br /> friend & family
                    </Typography>
                  </div>
                  <div className={classes.parent_cart_image2}>
                    <img src={SafeData} alt="" />
                  </div>
                </div>
                <div className={classes.parent_cart_bottom}>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae aliquam maxime ipsam fugit laborum, praesentium
                    laboriosam saepe quibusdam quisquam eius animi ut, obcaecati
                    facere dolorum dolor, nisi beatae voluptatem excepturi.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Improve the quality of your program & <br /> give parents the
              information they need
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              accusamus vitae? Quibusdam ad a nam nihil ea aperiam quod placeat
              unde ducimus excepturi ratione porro dolore, rem provident.
            </Typography>
            <div className={classes.improve}>
              <img
                src={StartNow_image}
                className={classes.improve_image}
                alt=""
              />
            </div>
            <div className={classes.center_button}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Start Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.demo}>
              <Typography variant="h4" className={classes.demo_headline}>
                KinderCubby activity tracking demo
              </Typography>
              <div className={classes.youtube}>
                <div className={classes.YoutubeIcon}>
                  <img src={YoutubeIcon} alt="" />
                </div>
                <img
                  className={classes.demo_image}
                  src={DemoVideo_image}
                  alt=""
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Get better insight & actionable information <br /> with
              KinderCubby
            </Typography>
            <div className={classes.center_button}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Yes! Let’s try it.
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ParentEngagements;
