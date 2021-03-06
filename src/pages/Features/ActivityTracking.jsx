import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import automated from "../../assets/images/automated.png";
import ChasingActivityImage1 from "../../assets/images/ChasingActivityImage1.png";
import ChasingActivityImage2 from "../../assets/images/ChasingActivityImage2.png";
import ChasingActivityImage3 from "../../assets/images/ChasingActivityImage3.png";

import StartNow_image from "../../assets/images/StartNow.png";
import DemoVideo_image from "../../assets/images/DemoVideo.png";
import YoutubeIcon from "../../assets/images/YoutubeIcon.png";
import activities from "../../assets/images/activities.png";

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
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
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
  play: {
    color: "#0B4295",
    marginLeft: 10,
    padding: "13px 35px  !important",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      border: "1px solid #FD5E47",
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
    maxWidth: "80%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      padding: 30,
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
}));

const ActivityTracking = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12}>
            <div className={classes.banner}>
              <div className={classes.banner_image}>
                <img src={automated} alt="" />
              </div>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Automated
                </Typography>
                <Typography className={classes.banner_content_text}>
                  Sed a magna semper, porta purus eu, ullamcorper ligula. Nam
                  sit amet consectetur
                </Typography>
                <div>
                  <Link to="/try-it-free">
                    <Button
                      variant="contained"
                      color="primary"
                      className={`${classes.banner_button} button`}
                    >
                      Try it Free
                    </Button>
                  </Link>
                  <Button
                    // variant="contained"
                    color="secondary"
                    className={`${classes.play} button`}
                    startIcon={<PlayCircleOutlineIcon />}
                  >
                    Watch In Action
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.activity_wrapper}>
          <Grid item lg={12} md={12}>
            <Typography variant="h4">
              No more chasing after kids to <br />
              record their activity
            </Typography>
          </Grid>

          <Grid item lg={4} md={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={ChasingActivityImage1}
              alt=""
            />

            <div>
              <Typography variant="h5">Activity Feed</Typography>
              <Typography variant="subtitle1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={ChasingActivityImage2}
              alt=""
            />

            <div>
              <Typography variant="h5">Photos & Videos</Typography>
              <Typography variant="subtitle1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={ChasingActivityImage3}
              alt=""
            />

            <div>
              <Typography variant="h5">Activity Reports</Typography>
              <Typography variant="subtitle1">
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
            <Grid item lg={12} md={12}>
              <Typography variant="h4">
                Activities that we are keeping track of
              </Typography>
            </Grid>
            <div className={classes.activity2}>
              <Grid item lg={6} md={6}>
                <img className={classes.image} src={activities} alt="" />
              </Grid>
              <Grid item lg={6} md={6}>
                <Typography variant="subtitle1" className={classes.margin10}>
                  <strong>Food: </strong>
                  semper, porta purus eu, ullamcorper ligula. Nam sit amet
                  consectetur sapien. Etiam dui ipsum, viverra
                </Typography>
                <Typography variant="subtitle1" className={classes.margin10}>
                  <strong>Nap Time: </strong>
                  magna semper, porta purus eu, ullamcorper ligula. Nam sit amet
                  consectetur sapien.
                </Typography>
                <Typography variant="subtitle1" className={classes.margin10}>
                  <strong>Reading: </strong> magna semper, porta purus eu,
                  ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui
                </Typography>
                <Typography variant="subtitle1" className={classes.margin10}>
                  <strong>Playing: </strong> magna semper, porta purus eu,
                  ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui
                </Typography>
                <Typography variant="subtitle1" className={classes.margin10}>
                  <strong>Incident: </strong> magna semper, porta purus eu,
                  ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui
                </Typography>
                <Typography variant="subtitle1" className={classes.margin10}>
                  <strong>Kid's health: </strong> magna semper, porta purus eu,
                  ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui
                </Typography>
                <Typography variant="subtitle1" className={classes.margin10}>
                  <strong>Kid's activity: </strong> magna semper, porta purus
                  eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam
                  dui
                </Typography>
              </Grid>
            </div>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12} md={12}>
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
              <Link to="/try-it-free">
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Start Now
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12}>
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
          <Grid item lg={12} md={12}>
            <Typography variant="h4">
              Get better insight & actionable information <br /> with
              KinderCubby
            </Typography>
            <div className={classes.center_button}>
              <Link to="/try-it-free">
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Yes! Let???s try it.
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ActivityTracking;
