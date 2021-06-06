import React from "react";
import Carousel from "nuka-carousel";
import {
  makeStyles,
  IconButton,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import FatualModel from "../assets/images/FatualModel.png";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  root: {
    display: "flex",
    padding: 20,
  },
  text: {
    flex: 3,
    padding: "50px 50px 20px 50px",
  },
  image: {
    flex: 1,
    padding: "50px 50px 20px 50px",
  },
  left: {
    textAlign: "left",
    fontSize: "1.25rem",
    padding: "20px",
  },
  button: {
    boxShadow: "0px 0px 5px 2px #eee",
  },
  first_li: {
    fontWeight: 600,
    borderRight: "1px solid #999",
  },
  li_text: {
    fontSize: "1.2rem",
  },
  title: {
    "& ul": {
      display: "block",
      background: "red",
      "& li": {
        listStyle: "none",
        float: "left",
        padding: "5px 20px",
      },
    },
  },
}));

const SliderImage = () => {
  const classes = useStyle();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12}>
            <Carousel
              autoplay={true}
              cellAlign="center"
              renderCenterLeftControls={({ previousSlide }) => (
                <IconButton
                  onClick={previousSlide}
                  className={classes.button}
                  color="primary"
                >
                  <ArrowBackIosRoundedIcon />
                </IconButton>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <IconButton
                  onClick={nextSlide}
                  className={classes.button}
                  color="primary"
                >
                  <ArrowForwardIosRoundedIcon />
                </IconButton>
              )}
            >
              <div className={classes.root}>
                <div className={classes.text}>
                  <Typography className={classes.left}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt dignissimos ea distinctio possimus aliquid, ad
                    labore, quia quaerat numquam fugiat temporibus ut obcaecati
                    doloribus officia odio voluptates ipsa quas dolore?
                  </Typography>
                  <div className={classes.title}>
                    <ul>
                      <li className={classes.first_li}>
                        <Typography className={classes.li_text}>
                          <strong>Sara Lee</strong>
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.li_text}>
                          Director
                        </Typography>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.image}>
                  <img src={FatualModel} />
                </div>
              </div>
              <div className={classes.root}>
                <div className={classes.text}>
                  <Typography className={classes.left}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt dignissimos ea distinctio possimus aliquid, ad
                    labore, quia quaerat numquam fugiat temporibus ut obcaecati
                    doloribus officia odio voluptates ipsa quas dolore?
                  </Typography>
                  <div className={classes.title}>
                    <ul>
                      <li className={classes.first_li}>
                        <Typography className={classes.li_text}>
                          <strong>Sara Lee</strong>
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.li_text}>
                          Director
                        </Typography>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.image}>
                  <img src={FatualModel} />
                </div>
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SliderImage;
