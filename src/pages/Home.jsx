import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SchoolImage from "../assets/images/SchoolImage.png";
import DemoVideoP1 from "../assets/images/DemoVideoP1.png";
import EverythingInOnePlace from "../assets/images/EverythingInOnePlace.png";
import SuccessfulGreenIcon2x from "../assets/images/SuccessfulGreenIcon@2x.png";

import SliderImage from "../components/SliderImage";
import SliderImage2 from "../components/SliderImage2";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "40px 30px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  wrapper2: {
    padding: "0px 100px",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  wrapper3: {
    marginTop: 80,
    marginBottom: 30,
    padding: "40px 100px 60px 100px",
    background: "#E3EBFC",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  wrapper4: {
    padding: "45px 150px 60px 150px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  box: {
    boxShadow: "1px 1px 3px 2px #ddd",
    borderRadius: 7,
    padding: "20px 50px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  center: {
    textAlign: "center",
  },
  banner_button: {
    padding: "13px 35px  !important",
  },
  margin_left_20: {
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 3,
    },
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 600,
    textAlign: "center",
  },
  h5: {
    padding: "10px 10px 25px 10px",
    width: "70%",
    margin: "auto",
    fontWeight: 400,
  },
  title2: {
    fontSize: "1.6rem",
    fontWeight: 600,
    marginBottom: 10,
  },
  image: {
    maxWidth: "100%",
  },
  h6: {
    margin: "20px 0px",
    textAlign: "left",
  },
  demo_top: {
    margin: "0px 0px",
  },
  margin30: {
    margin: "60px 0px",
  },
  h4: {
    textAlign: "left",
    paddingBottom: 0,
  },
  subtitle1: {},
  flex_center: {
    display: "flex",
    alignItems: "center",
    padding: '30px 60px',
  },
  image_center: {
    display: "flex",
    justifyContent: "center",
  },
  box2: {
    textAlign: "center",
    boxShadow: "1px 1px 3px 1px #ddd",
    borderRadius: 12,
    padding: 20,
    margin: 3,
  },
  box2_icon: {
    margin: 12,
    width: "50px",
  },
  link: {
    textDecoration: "underline",
    fontWeight: 600,
    margin: 20,
    color: "#EE6741",
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
            <Typography className={classes.title}>
              Easiest & holistic solution
              <br />
              for your childcare
            </Typography>
            <Typography variant="h5" className={classes.h5}>
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet
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
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper2}>
          <Grid lg={12}>
            <Grid container spacing={3} className={classes.box}>
              <Grid item lg={6}>
                <Typography className={classes.title2}>
                  Join childcare system <br />
                  used by 1000+ organaisation
                </Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  eaque vitae consectetur laboriosam
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: 15 }}
                  className={`${classes.banner_button} button`}
                >
                  Contact Sales
                </Button>
              </Grid>
              <Grid item lg={6}>
                <img src={SchoolImage} alt="" className={classes.image} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper3}>
          <Grid lg={12}>
            <Typography className={classes.title} style={{ textAlign: "left" }}>
              Why KinderCubby?
            </Typography>
          </Grid>
          <Grid lg={8}>
            <Grid container spacing={3}>
              <Grid item lg={6}>
                <Typography variant="h6" className={classes.h6}>
                  Effortless Attendance
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  illum autem officia dignissimos nostrum et
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant="h6" className={classes.h6}>
                  Effortless Attendance
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  illum autem officia dignissimos nostrum et
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant="h6" className={classes.h6}>
                  Effortless Attendance
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  illum autem officia dignissimos nostrum et
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant="h6" className={classes.h6}>
                  Effortless Attendance
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  illum autem officia dignissimos nostrum et
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={4}>
            <Typography variant="h6" className={classes.demo_top}>
              SEE IN ACTION
            </Typography>
            <img src={DemoVideoP1} className={classes.image} alt="" />
            <div className={classes.center}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Watch The Demo
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={classes.wrapper4}>
          <Grid lg={12}>
            <Typography className={classes.title}>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing
            </Typography>
          </Grid>
          <Grid container spacing={3} className={classes.flex_center}>
            <Grid lg={6} className={classes.margin30}>
              <Typography variant="h4" className={classes.h4}>
                Everything in one place
              </Typography>
              <Typography variant="h6" className={classes.h6}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                expedita laboriosam quam consectetur
              </Typography>
            </Grid>
            <Grid lg={6} className={classes.image_center}>
              <img
                src={EverythingInOnePlace}
                className={classes.image}
                alt=""
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={4}>
              <div className={classes.box2}>
                <img
                  src={SuccessfulGreenIcon2x}
                  alt=""
                  className={classes.box2_icon}
                />
                <Typography variant="h5">Activity Tracking</Typography>
                <Typography variant="subtitle1" className={classes.subtitle1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </Typography>
                <Link to="#">
                  <Typography variant="body2" className={classes.link}>
                    Learn More
                  </Typography>
                </Link>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className={classes.box2}>
                <img
                  src={SuccessfulGreenIcon2x}
                  alt=""
                  className={classes.box2_icon}
                />
                <Typography variant="h5">Activity Tracking</Typography>
                <Typography variant="subtitle1" className={classes.subtitle1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </Typography>
                <Link to="#">
                  <Typography variant="body2" className={classes.link}>
                    Learn More
                  </Typography>
                </Link>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className={classes.box2}>
                <img
                  src={SuccessfulGreenIcon2x}
                  alt=""
                  className={classes.box2_icon}
                />
                <Typography variant="h5">Activity Tracking</Typography>
                <Typography variant="subtitle1" className={classes.subtitle1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </Typography>
                <Link to="#">
                  <Typography variant="body2" className={classes.link}>
                    Learn More
                  </Typography>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper3}>
          <Grid lg={12}>
            <Typography  className={classes.title} >
              Manage the function 
            </Typography>
            <Typography variant="h5" className={classes.h5}>
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet
            </Typography>
            <SliderImage2 />
          </Grid>
          
          
        </Grid>
      </Container>
      <div className={classes.slider}>
        <Typography className={classes.title}>Factual Impact</Typography>
        <SliderImage />
      </div>
    </>
  );
};

export default Home;
