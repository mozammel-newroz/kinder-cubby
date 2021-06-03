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

import automated from "../../assets/images/automated.png";
import ParentsVideo from "../../assets/images/ParentsVideo.png";
import RealTimeUpdates from "../../assets/images/RealTimeUpdates.png";
import PurpleCircle from "../../assets/images/PurpleCircle.png";

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
      marginBottom: 30
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
  activity_second : {
    padding: '50px 120px 0px 120px',
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  activity_headline: {
    padding: 10
  }
  
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
                <img src={automated} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container  className={classes.wrapper2}>
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
            <Typography variant="h4" className={classes.activity_headline} >
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
              <Typography variant="h5">Activity Feed</Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={RealTimeUpdates}
              alt=""
            />
            <div>
              <Typography variant="h5">Activity Feed</Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={RealTimeUpdates}
              alt=""
            />
            <div>
              <Typography variant="h5">Activity Feed</Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing
              </Typography>
            </div>
          </Grid>

          <Grid container className={classes.activity_second} >
            <Grid item lg={6} className={classes.activity_box}>
              <img
                className={classes.activity_image}
                src={RealTimeUpdates}
                alt=""
              />
              <div>
                <Typography variant="h5">Activity Feed</Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} className={classes.activity_box}>
              <img
                className={classes.activity_image}
                src={RealTimeUpdates}
                alt=""
              />
              <div>
                <Typography variant="h5">Activity Feed</Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={6}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias commodi nam modi optio mollitia eius atque recusandae culpa amet incidunt nihil laborum quidem dolores. Ad repellat nulla nisi eius.
          </Grid>
          <Grid item lg={6}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias commodi nam modi optio mollitia eius atque recusandae culpa amet incidunt nihil laborum quidem dolores. Ad repellat nulla nisi eius.
          </Grid>
        </Grid>
        </Container>
    </>
  );
};

export default OwnersAndDirectors;
