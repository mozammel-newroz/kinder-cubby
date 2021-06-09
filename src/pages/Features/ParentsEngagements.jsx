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
import InstantMessaging from "../../assets/images/InstantMessaging.png";
import ShareMoments from "../../assets/images/ShareMoments.png";
import ChildsGrowth from "../../assets/images/Child'sGrowth.png";

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
    height: 330,
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  parent_cart_top: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
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
    [theme.breakpoints.down("xs")]: {
      "&::before": {
        right: -40,
        top: -10,
      },
    },
  },
  parent_cart_title: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  parent_cart_bottom: {
    padding: "40px 20px 20px 20px",
  },
  card_image: {
    width: "100%",
    height: "170px",
  },
  h5: {
    paddingLeft: 40,
    textAlign: "left",
  },
}));

const ParentEngagements = () => {
  const classes = useStyles();
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}  md={12}>
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
          <Grid item lg={12} md={12} >
            <Typography variant="h4">Make parents feel connected</Typography>
            <Typography variant="h6">
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie
            </Typography>
          </Grid>

          <Grid item lg={4}  md={4} className={classes.activity_box}>
            <div className={classes.card_image}>
              <img
                className={classes.activity_image}
                src={InstantMessaging}
                alt=""
              />
            </div>

            <div>
              <Typography variant="h5">Instant Messaging</Typography>
              <Typography variant="body1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4}  md={4} className={classes.activity_box}>
            <div className={classes.card_image}>
              <img
                className={classes.activity_image}
                src={ShareMoments}
                alt=""
              />
            </div>

            <div>
              <Typography variant="h5">Share moments</Typography>
              <Typography variant="body1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4}  md={4} className={classes.activity_box}>
            <div className={classes.card_image}>
              <img
                className={classes.activity_image}
                src={ChildsGrowth}
                alt=""
              />
            </div>

            <div>
              <Typography variant="h5">Child’s growth</Typography>
              <Typography variant="body1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <div className={classes.wrapper2}>
          <Grid container spacing={3} className={classes.activity_wrapper2}>
            <Grid item lg={12}  md={12}>
              <Typography variant="h4">
                Share kids moment with friends and family
              </Typography>
              <Typography variant="h6" className={classes.padding_0}>
                No need to switch to different app for sharing. KinderCubby
                allows family and
                <br /> friends to be onboard.
              </Typography>
            </Grid>

            <Grid item lg={6} md={6}>
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

            <Grid item lg={6}  md={6}>
              <div className={classes.parent_cart}>
                <div className={classes.parent_cart_top}>
                  <div className={classes.parent_cart_title}>
                    <Typography variant="h5" className={classes.h5}>
                      Your data is safe. <br />
                      Parents can control what to share.
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
          <Grid item lg={12}  md={12}>
            <Typography variant="h4">
              Save time with our
              <br /> Automated event broadcasting
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
          </Grid>
          <Grid item lg={4}  md={4} className={classes.activity_box}>
            <div>
              <Typography variant="h5">Message templates</Typography>
              <Typography variant="body1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4}  md={4} className={classes.activity_box}>
            <div>
              <Typography variant="h5">Send to mass contacts</Typography>
              <Typography variant="body1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4}  md={4} className={classes.activity_box}>
            <div>
              <Typography variant="h5">Schedule for later</Typography>
              <Typography variant="body1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>
          <Grid item lg={12}  md={12} sm={12} >
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
    </>
  );
};

export default ParentEngagements;
