import React from "react";
import { Container, Grid, Typography, Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import BePartOfKids from "../../assets/images/BePartOfKids.png";
import ParentsVideo from "../../assets/images/ParentsVideo.png";
// import TeacherVideo from "../../assets/images/TeacherVideo.png";
import RealTimeUpdates from "../../assets/images/RealTimeUpdates.png";
import MemoryArchive from "../../assets/images/MemoryArchive.png";
import InstantMessagingP5 from "../../assets/images/InstantMessagingP5.png";
import ImmunisationRecord from "../../assets/images/ImmunisationRecord.png";
import SharingWithFamily from "../../assets/images/SharingWithFamily.png";
import RedCircle from "../../assets/images/RedCircle.png";
import ChildPreciousMoment from "../../assets/images/ChildPreciousMoment.png";
import owner_youtube from "../../assets/images/owner_youtube.png";
import Active from "../../assets/images/Active.png";
import InviteFamilyAndFriends from "../../assets/images/InviteFamilyAndFriends.png";

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
      marginLeft: 3,
    },
  },
  wrapper2: {
    marginTop: 120,
    padding: "120px 120px 60px 120px",
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
    padding: "15px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
    },
  },

  activity_image: {
    maxWidth: "100%",
    background: `url(${RedCircle})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: 20,
    marginBottom: 15,
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
  activity_wrapper2: {
    padding: "60px 120px 0px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },
  activity_wrapper5: {
    padding: "60px 120px 0px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  activity_wrapper3: {
    padding: "20px 120px 0px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },
  activity_wrapper4: {
    padding: "100px 120px 100px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },
  h4: {
    marginBottom: "40px",
  },
  h6: {
    marginTop: 0,
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

  tag_text: {
    marginTop: -10,
  },
  center: {
    textAlign: "center",
  },
}));

const Parents = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Be part of kids
                </Typography>
                <Typography className={classes.banner_content_text}>
                  Sed a magna semper, porta purus eu, ullamcorper ligula. Nam
                  sit amet
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
                <img src={BePartOfKids} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={classes.wrapper2}>
          <Card className={classes.card}>
            <div className={classes.left}>
              <img src={ParentsVideo} alt="" />
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
              Innovation for worried parents
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
              src={MemoryArchive}
              alt=""
            />
            <div>
              <Typography variant="h5">Memory archive</Typography>
              <Typography variant="subtitle1">
                Nulla eleifend pulvinar purus, molestie euismod odio
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={InstantMessagingP5}
              alt=""
            />
            <div>
              <Typography variant="h5">Instant Messaging</Typography>
              <Typography variant="subtitle1">
                Nulla eleifend pulvinar purus, molestie euismod odio
              </Typography>
            </div>
          </Grid>
          <Grid container className={classes.activity_second}>
            <Grid item lg={6} className={classes.activity_box}>
              <img
                className={classes.activity_image}
                src={ImmunisationRecord}
                alt=""
              />
              <div>
                <Typography variant="h5">Immunisation record</Typography>
                <Typography variant="subtitle1">
                  Nulla eleifend pulvinar purus, molestie euismod odio
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} className={classes.activity_box}>
              <img
                className={classes.activity_image}
                src={SharingWithFamily}
                alt=""
              />
              <div>
                <Typography variant="h5">Sharing with family</Typography>
                <Typography variant="subtitle1">
                  Nulla eleifend pulvinar purus, molestie euismod odio
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper2}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Never miss you child’s
              <br /> Precious moments
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.parent_child}>
            <img src={ChildPreciousMoment} alt="" className={classes.image} />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" className={classes.align_left}>
              Attendance update
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh
            </Typography>

            <Typography variant="h5" className={classes.align_left}>
              Activity Feed
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh
            </Typography>

            <Typography variant="h5" className={classes.align_left}>
              Incident Reports
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh
            </Typography>

            <Typography variant="h5" className={classes.align_left}>
              Photos & videos
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={3}
          className={`${classes.activity_wrapper5}`}
        >
          <Grid item lg={12}>
            <Typography variant="h4">Going a little extra miles</Typography>
          </Grid>
          <Grid item lg={6} className={classes.parent_child}>
            <img src={Active} alt="" className={classes.image} />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" className={classes.align_left}>
              Pickup authorisation
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" className={classes.align_left}>
              Onboarding the whole crew
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.margin_bottom_30}
            >
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.parent_child}>
            <img
              src={InviteFamilyAndFriends}
              alt=""
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={5}
          className={`${classes.activity_wrapper3}`}
        >
          <Grid item lg={12}>
    
              <Typography variant="h4" className={classes.h4}>
              Impact of KinderCubby on parents
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
              <Typography variant="h3">100%</Typography>
              <Typography variant="h5">of users</Typography>
              <Typography variant="body1" className={classes.tag_text}>
                Are satisfied with the experience
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className={`${classes.tag} `}>
              <Typography variant="h3">10+</Typography>
              <Typography variant="h5">of users</Typography>
              <Typography variant="body1" className={classes.tag_text}>
                Kid moments have been recorded
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={`${classes.activity_wrapper4}`}>
          <Grid item lg={12}>
            <Typography variant="h4">Invite your school</Typography>
            <Typography variant="h6" className={classes.h6}>
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

export default Parents;
