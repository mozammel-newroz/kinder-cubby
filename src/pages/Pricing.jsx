import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import automated from "../assets/images/automated.png";
import ChasingActivityImage1 from "../assets/images/ChasingActivityImage1.png";
import activity_image from "../assets/images/activity.png";
import StartNow_image from "../assets/images/StartNow.png";
import DemoVideo_image from "../assets/images/DemoVideo.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
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
      marginTop: 10,
      padding: 0,
    },
  },

  banner_image: {
    flexGrow: 1,
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  banner_content: {
    flexGrow: 1,
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 20,
    },
  },
  banner_button: {
    padding: "13px 35px  !important",
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
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
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
  activity_box_headline: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 15,
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
    },
  },
  demo_image: {
    maxWidth: "100%",
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
  center_button: {
    textAlign: "center",
    marginTop: 40,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_image}>
                <img src={automated} alt="" />
              </div>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Automated
                </Typography>
                <Typography style={{ fontSize: 24, marginBottom: 30 }}>
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
                  <Button
                    // variant="contained"
                    color="secondary"
                    className={`${classes.play} button`}
                    startIcon={<PlayCircleOutlineIcon />}
                  >
                    Watch In Action
                  </Button>
                </div>
                <div></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
