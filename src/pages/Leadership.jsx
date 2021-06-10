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
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import OurPeopleGallery2 from "../assets/images/OurPeopleGallery@2x.png";
import PatrickRoss from "../assets/images/PatrickRoss.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "60px 90px",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  wrapper2: {
    padding: "0px  90px 60px 90px",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  wrapper3: {
    padding: "50px 80px",
    background: "#E3EBFC",
    borderRadius: 15,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  big_title: {
    fontSize: "3rem",
    fontWeight: 700,
    textAlign: "center",
  },
  h6: {
    margin: "10px 20px 40px 20px",
  },
  bg_color: {
    background: "#F27E5C",
    height: "290px",
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: -9,
    [theme.breakpoints.down("sm")]: {
      height: "130px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "290px",
    },
  },
  box: {},
  box_image: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: "0px 20px",
    transition: ".35s ease",
    paddingTop: 30,
    "&:hover": {
      background: "#eee",
    },
  },
  box_name: {
    fontSize: "1.3rem",
    marginTop: 20,
  },
  box_title: {
    fontSize: ".9rem",
    marginTop: 5,
  },
  box3: {
    background: "#fff",
    boxShadow: "1px 1px 3px 1px #ddd",
    borderRadius: 7,
    padding: "30px 30px 20px 30px",
    position: "relative",
  },

  left_text: {
    textAlign: "left",
    fontWeight: 400,
  },
  link2: {
    fontWeight: 600,
    fontSize: "1.1rem",
    margin: "10px 10px 10px 0px",
    color: "#EE6741",
  },
  link2_icon: {
    position: "relative",
    top: 7,
  },
}));

const Leadership = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper}>
          <Grid item lg={12} md={12}>
            <Typography className={classes.big_title}>Our People</Typography>
            <Typography variant="h6" className={classes.h6}>
              This is our team, a lot of smiling happy people who work hard to
              develop KinderCubby
            </Typography>
          </Grid>
          <Grid item lg={12} md={12}>
            <img src={OurPeopleGallery2} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper2}>
          <Grid item lg={12} md={12}>
            <Typography className={classes.big_title}>
              Our Leadership
            </Typography>
            <Typography variant="h6" className={classes.h6}>
              Meet the leaders behind KinderCubby who made it into what it is
              today
            </Typography>
          </Grid>

          <Grid item lg={4} md={4} sm={4}>
            <div className={classes.box}>
              <div className={classes.box_image}>
                <div className={classes.bg_color}></div>
                <img src={PatrickRoss} alt="" />
              </div>
              <Typography className={classes.box_name}>Patrick Ross</Typography>

              <Typography className={classes.box_title}>
                Founder & CEO
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={4}>
            <div className={classes.box}>
              <div className={classes.box_image}>
                <div className={classes.bg_color}></div>
                <img src={PatrickRoss} alt="" />
              </div>
              <Typography className={classes.box_name}>Patrick Ross</Typography>

              <Typography className={classes.box_title}>
                Founder & CEO
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={4}>
            <div className={classes.box}>
              <div className={classes.box_image}>
                <div className={classes.bg_color}></div>
                <img src={PatrickRoss} alt="" />
              </div>
              <Typography className={classes.box_name}>Patrick Ross</Typography>

              <Typography className={classes.box_title}>
                Founder & CEO
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={4}>
            <div className={classes.box}>
              <div className={classes.box_image}>
                <div className={classes.bg_color}></div>
                <img src={PatrickRoss} alt="" />
              </div>
              <Typography className={classes.box_name}>Patrick Ross</Typography>

              <Typography className={classes.box_title}>
                Founder & CEO
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={4}>
            <div className={classes.box}>
              <div className={classes.box_image}>
                <div className={classes.bg_color}></div>
                <img src={PatrickRoss} alt="" />
              </div>
              <Typography className={classes.box_name}>Patrick Ross</Typography>

              <Typography className={classes.box_title}>
                Founder & CEO
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} sm={4}>
            <div className={classes.box}>
              <div className={classes.box_image}>
                <div className={classes.bg_color}></div>
                <img src={PatrickRoss} alt="" />
              </div>
              <Typography className={classes.box_name}>Patrick Ross</Typography>

              <Typography className={classes.box_title}>
                Founder & CEO
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.wrapper3}>
          <Grid item lg={6} md={6}>
            <div className={classes.box3}>
              {" "}
              <Typography variant="h5" className={classes.left_text}>
                Daycare Owners & Directors
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                fugit sed optio necessitatibus facere labo
              </Typography>
              <Link to="#">
                <Typography variant="body2" className={classes.link2}>
                  Learn More <ArrowForwardIcon className={classes.link2_icon} />
                </Typography>
              </Link>
            </div>
          </Grid>
          <Grid item lg={6} md={6}>
            <div className={classes.box3}>
              {" "}
              <Typography variant="h5" className={classes.left_text}>
                Diversity & inclusion
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                fugit sed optio necessitatibus facere labo
              </Typography>
              <Link to="#">
                <Typography variant="body2" className={classes.link2}>
                  Learn More <ArrowForwardIcon className={classes.link2_icon} />
                </Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Leadership;
