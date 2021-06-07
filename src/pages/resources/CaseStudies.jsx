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

import HeaderCurveDesignP24 from "../../assets/images/HeaderCurveDesignP24.png";
import ChildCareCenter2 from "../../assets/images/ChildCareCenter2.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "60px 90px",
    width: "100%",
    backgroundImage: `url(${HeaderCurveDesignP24})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 40%",
    backgroundPosition: "top",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  title: {
    fontSize: "3rem",
    fontWeight: 600,
    textAlign: "center",
  },
  h6: {
    margin: "10px 20px 40px 20px",
  },
  card: {
    background: "#fff",
    padding: 23,
    borderRadius: 15,
    boxShadow: "1px 1px 3px 1px #ddd",
  },
  next_button: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 12,
    borderTop: "1px solid #eee",
    color: "#EE6741",
  },
  card_image: {
    maxWidth: "100%",
  },
  card_title: {
    textAlign: "left",
    marginBottom: 15,
    fontSize: "1.2rem",
  },
}));

const CaseStudies = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper}>
          <Grid item lg={12}>
            <Typography className={classes.title}>
              Customer’s Stories
            </Typography>
            <Typography variant="h6" className={classes.h6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              accusamus vitae? Quibusdam ad a nam nihil ea aperiam quod placeat
              unde ducimus excepturi ratione porro dolore, rem provident.
            </Typography>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.card}>
              <img
                src={ChildCareCenter2}
                alt=""
                className={classes.card_image}
              />

              <Typography variant="h5" className={classes.card_title}>
                Network Bendale Acres Child Care Centre
              </Typography>

              <div>
                <Link to="#" className={classes.next_button}>
                  <Typography color="primary">Read More</Typography>
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.card}>
              <img
                src={ChildCareCenter2}
                alt=""
                className={classes.card_image}
              />

              <Typography variant="h5" className={classes.card_title}>
                Network Bendale Acres Child Care Centre
              </Typography>

              <div>
                <Link to="#" className={classes.next_button}>
                  <Typography color="primary">Read More</Typography>
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.card}>
              <img
                src={ChildCareCenter2}
                alt=""
                className={classes.card_image}
              />

              <Typography variant="h5" className={classes.card_title}>
                Network Bendale Acres Child Care Centre
              </Typography>

              <div>
                <Link to="#" className={classes.next_button}>
                  <Typography color="primary">Read More</Typography>
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.card}>
              <img
                src={ChildCareCenter2}
                alt=""
                className={classes.card_image}
              />

              <Typography variant="h5" className={classes.card_title}>
                Network Bendale Acres Child Care Centre
              </Typography>

              <div>
                <Link to="#" className={classes.next_button}>
                  <Typography color="primary">Read More</Typography>
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.card}>
              <img
                src={ChildCareCenter2}
                alt=""
                className={classes.card_image}
              />

              <Typography variant="h5" className={classes.card_title}>
                Network Bendale Acres Child Care Centre
              </Typography>

              <div>
                <Link to="#" className={classes.next_button}>
                  <Typography color="primary">Read More</Typography>
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.card}>
              <img
                src={ChildCareCenter2}
                alt=""
                className={classes.card_image}
              />

              <Typography variant="h5" className={classes.card_title}>
                Network Bendale Acres Child Care Centre
              </Typography>

              <div>
                <Link to="#" className={classes.next_button}>
                  <Typography color="primary">Read More</Typography>
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CaseStudies;
