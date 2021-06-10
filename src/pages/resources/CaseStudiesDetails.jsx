import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import StarKidsLogo from "../../assets/images/StarKidsLogo.png";
import StarKidsImage from "../../assets/images/StarKidsImage.png";
import ChildCareCenter2 from "../../assets/images/ChildCareCenter2.png";
import ChildCareCenter1 from "../../assets/images/ChildCareCenter1.png";
import ChildCareCenter3 from "../../assets/images/ChildCareCenter3.png";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  wrapper2: {
    padding: "30px 90px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 30px",
    },
  },
  banner: {
    background: "#E3EBFC",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  banner2: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  banner3: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: "60px 160px 10px 160px",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 5px 10px 5px",
    },
  },

  banner_image: {
    flex: 6,
    textAlign: "center",
  },
  banner_image2: {
    flex: 4,
    textAlign: "center",
  },

  flex_style: {
    borderRadius: 10,
    padding: "30px 60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: "30px 20px",
    },
  },
  flex_div1_style: {
    flex: 7,
  },
  flex_div2_style: {
    flex: 3,
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  banner_button: {
    padding: "13px 35px  !important",
  },
  banner_button2: {
    padding: "13px 23px  !important",
  },

  paper: {
    textAlign: "start",
  },

  center_button: {
    textAlign: "center",
    marginBottom: 10,
  },
  list_container: {
    textAlign: "start",
    marginTop: "30px",
  },
  title_style: {
    fontSize: "1.5rem",
    fontWeight: "500px",
  },
  breadcrumbs_title_style: {
    fontSize: "1.2rem",
    color: "#707070",
  },
  breadcrumbs_last_title_style: {
    fontSize: "1.2rem",
    color: "#8F9FCC",
  },
  margin_bottom10: {
    marginBottom: 10,
  },
  margin_bottom20: {
    marginBottom: 20,
  },
  margin_bottom30: {
    marginBottom: 30,
  },
  address_font_color: {
    color: "#707070",
    fontSize: "12px",
  },
  tab_title: {
    color: "#707070",
    fontSize: "18px",
    marginBottom: 15,
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
  box_title: {
    fontSize: "1.3rem",
    fontWeight: 600,
    borderBottom: "2px solid #ddd",
    padding: 7,
    textAlign: "center",
  },
  box_title2: {
    fontSize: "1.3rem",
    fontWeight: 600,
    borderBottom: "2px solid #DF6D38",
    padding: 7,
    textAlign: "center",
  },
  box_price: {
    fontSize: "2.5rem",
    fontWeight: 600,
    padding: 25,
    textAlign: "center",
  },
  box_text: {
    textAlign: "center",
    paddingBottom: 25,
  },
  padding_bottom25: {
    paddingBottom: 25,
  },
  tab_headline2: {
    fontWeight: 600,
    fontSize: "18px",
    color: "#F26522",
    marginBottom: "15px",
    textAlign: "center",
  },
  icon_style: {
    position: "relative",
    top: "7px",
    left: "4px",
  },
  auto_margin: {
    margin: "20px auto 40px auto",
  },
  margin_top: {
    marginTop: "45px",
    marginBottom: "60px",
  },
  h4: {
    marginBottom: "45px",
  },
  card_style: {
    [theme.breakpoints.down("sm")]: {
      padding: "12px 30px !important",
    },
  },
}));

const CaseStudiesDetails = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.banner}>
            <div className={classes.banner_image}>
              <img src={StarKidsImage} alt="" width="100%" />
            </div>
            <div className={classes.banner_image2}>
              <img width="60%" src={StarKidsLogo} alt="" />
            </div>
          </div>
        </div>
      </Container>

      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.flex_style}>
            <div className={classes.flex_div1_style}>
              <div className={classes.margin_bottom10}>
                <div className={classes.margin_bottom30}>
                  <Breadcrumbs
                    separator={<NavigateNextIcon />}
                    aria-label="breadcrumb"
                  >
                    <Link color="inherit" to="#" onClick={handleClick}>
                      <Typography className={classes.breadcrumbs_title_style}>
                        Customer’s Stories
                      </Typography>
                    </Link>

                    <Link color="inherit" to="#" onClick={handleClick}>
                      <Typography
                        className={`${classes.breadcrumbs_last_title_style}`}
                      >
                        Star Kids
                      </Typography>
                    </Link>
                  </Breadcrumbs>
                </div>
                <Typography className={classes.title_style}>
                  The Problem
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Pellentesque tincidunt tristique neque, eget venenatis enim
                  gravida quis. Fusce at egestas libero. Cras convallis egestas
                  ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum
                </Typography>
              </div>
              <div className={classes.margin_bottom10}>
                <Typography className={classes.title_style}>
                  The Solution
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Pellentesque tincidunt tristique neque, eget venenatis enim
                  gravida quis. Fusce at egestas libero. Cras convallis egestas
                  ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum
                </Typography>
              </div>
              <div className={classes.margin_bottom10}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Pellentesque tincidunt tristique neque, eget venenatis enim
                  gravida quis. Fusce at egestas libero. Cras convallis egestas
                  ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum
                </Typography>
              </div>
            </div>
            <div className={classes.flex_div2_style}>
              <div className={classes.margin_bottom20}>
                <Typography className={classes.address_font_color}>
                  Product License
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Standard
                </Typography>
              </div>
              <div className={classes.margin_bottom20}>
                <Typography className={classes.address_font_color}>
                  Organization type
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Childcare
                </Typography>
              </div>
              <div className={classes.margin_bottom20}>
                <Typography className={classes.address_font_color}>
                  Location
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Los Angels
                </Typography>
              </div>
              <div className={classes.margin_bottom20}>
                <Typography className={classes.address_font_color}>
                  Member since
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  2021
                </Typography>
              </div>
              <div className={classes.banner2}>
                <Typography variant="h5">
                  Make a difference at your organisation too
                </Typography>
                <div className={classes.center_button}>
                  <Link to="/try-it-free">
                    <Button
                      variant="contained"
                      color="primary"
                      className={`${classes.banner_button} button`}
                    >
                      Try it Free
                    </Button>
                  </Link>
                </div>
                <div className={classes.center_button}>
                  <Link to='/request-call'>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={`${classes.banner_button2} ${classes.margin_left_20} button`}
                  >
                    Contact Sales
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className={classes.wrapper2}>
          <Typography className={classes.tab_title}>
            More Customer’s Stories
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={4}>
              <div className={classes.card}>
                <img
                  src={ChildCareCenter1}
                  alt=""
                  className={classes.card_image}
                />

                <Typography variant="h5" className={classes.card_title}>
                  Network Bendale Acres Child Care Centre
                </Typography>

                <div>
                  <Link to="/case-studies" className={classes.next_button}>
                    <Typography color="primary">Read More</Typography>
                    <ArrowForwardIcon />
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
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
                  <Link to="/case-studies" className={classes.next_button}>
                    <Typography color="primary">Read More</Typography>
                    <ArrowForwardIcon />
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <div className={classes.card}>
                <img
                  src={ChildCareCenter3}
                  alt=""
                  className={classes.card_image}
                />

                <Typography variant="h5" className={classes.card_title}>
                  Network Bendale Acres Child Care Centre
                </Typography>

                <div>
                  <Link to="/case-studies" className={classes.next_button}>
                    <Typography color="primary">Read More</Typography>
                    <ArrowForwardIcon />
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg" className={classes.margin_top}>
        <div className={classes.wrapper}>
          <div className={classes.banner3}>
            <Typography variant="h4" className={classes.h4}>
              Step up your game!
              <br /> Implement KinderCubby at your organisation
            </Typography>
            <Grid container justify="center" alignItems="center" spacing={3}>
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={4}
                className={classes.card_style}
              >
                <Paper className={classes.paper}>
                  <Typography className={classes.box_title}>Free</Typography>

                  <Typography className={classes.box_price}>$0</Typography>
                  <div className={classes.box_text}>
                    <Typography variant="body2">
                      Always free for 10 students
                    </Typography>
                    <Typography variant="body2">1 Staff member</Typography>
                  </div>
                  <div
                    className={`${classes.center_button} ${classes.padding_bottom25}`}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      className="button"
                    >
                      Get Started
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={4}
                className={classes.card_style}
              >
                <Paper className={classes.paper}>
                  <Typography className={classes.box_title2}>
                    Standard
                  </Typography>

                  <Typography className={classes.box_price}>$50</Typography>
                  <div className={classes.box_text}>
                    <Typography variant="body2">
                      Less than 60 students
                    </Typography>
                    <Typography variant="body2">8 Staff members</Typography>
                  </div>
                  <div
                    className={`${classes.center_button} ${classes.padding_bottom25}`}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className="button"
                    >
                      Start Trail
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={4}
                className={classes.card_style}
              >
                <Paper className={classes.paper}>
                  <Typography className={classes.box_title}>Premium</Typography>
                  <Typography className={classes.box_price}>$120</Typography>
                  <div className={classes.box_text}>
                    <Typography variant="body2">Unlimited Students</Typography>
                    <Typography variant="body2">Unlimited staffs</Typography>
                  </div>
                  <div
                    className={`${classes.center_button} ${classes.padding_bottom25}`}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      className="button"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <div className={`${classes.auto_margin}`}>
                <Link to="/case-studies">
                  <Typography className={classes.tab_headline2}>
                    Learn More{" "}
                    <span className={classes.icon_style}>
                      <ArrowForwardIcon />
                    </span>
                  </Typography>
                </Link>
              </div>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CaseStudiesDetails;
