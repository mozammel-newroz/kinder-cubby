import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import logo from "../assets/images/logo_grey.svg";
import PlayStore from "../assets/images/PlayStore.png";
import app_store from "../assets/images/app_store.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  wrapper2: {
    padding: "30px 30px 0px 30px",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },

  footer: {
    display: "flex",
    padding: "60px 0px",
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  break: {
    boxShadow: "1px 3px 3px #ddd",
    height: 4,
  },
  footer_item: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      // width: 320,
    },
  },
  banner_button: {
    padding: "13px 35px  !important",
  },
  footer_title: {
    textAlign: "left",
    fontWeight: 600,
    marginBottom: 15,
    [theme.breakpoints.down("xs")]: {
      marginTop: 25,
    },
  },
  footer_title2: {
    fontWeight: 700,
    marginBottom: 15,
    textAlign: "left",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyle: "none",
    marginBottom: 10,
  },
  a: {
    textDecoration: "none",
    color: "#464141",
    fontSize: "1rem",
  },
  PlayStore: {
    marginRight: 15,
  },
  icon: {
    fontSize: 37,
    marginRight: 4,
    color: "#92B0EB",
  },
  footer_bottom: {
    borderTop: "1px solid #ddd",
    textAlign: "center",
    paddingTop: 15,
    color: "#999",
  },
  footer_bottom2: {
    borderTop: "1px solid #ddd",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    color: "#999",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const location = useLocation();

  if (
    location.pathname !== "/login" &&
    location.pathname !== "/change-password" &&
    location.pathname !== "/sign-up" &&
    location.pathname !== "/sign-up-option" &&
    location.pathname !== "/documentation" &&
    location.pathname !== "/try-it-free" &&
    location.pathname !== "/request-call" &&
    location.pathname !== "/sign-up-parent" &&
    location.pathname !== "/contact-us" &&
    location.pathname !== "/support-center"
  ) {
    return (
      <>
        {/* <CssBaseline /> */}
        <Container maxWidth="lg">
          <Grid container spacing={3} className={classes.wrapper}>
            <Grid item lg={12} xs={12}>
              <div className={classes.break}></div>
              <div className={classes.footer}>
                <div className={classes.footer_item}>
                  <Link to="/">
                    <img width="90%" src={logo} alt="" />
                  </Link>
                  <Typography variant="h6" className={classes.footer_title}>
                    Contact Sales
                  </Typography>
                  <Link to="/request-call">
                    <Button
                      variant="contained"
                      color="primary"
                      className={`${classes.banner_button} button`}
                    >
                      Request Call
                    </Button>
                  </Link>
                </div>

                <div className={classes.footer_item}>
                  <Typography variant="h6" className={classes.footer_title}>
                    Solution
                  </Typography>
                  <ul className={classes.ul}>
                    <li className={classes.li}>
                      <Link
                        to="/for-owners-and-directors"
                        className={classes.a}
                      >
                        <Typography>Owner & Directors</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/for-teachers" className={classes.a}>
                        <Typography>For Teachers</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/for-parents" className={classes.a}>
                        <Typography>For Parents</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <a className={classes.a} href="#"></a>
                      <Link to="/find-nearby-child-care" className={classes.a}>
                        <Typography>Find Nearby Child Cares</Typography>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={classes.footer_item}>
                  <Typography variant="h6" className={classes.footer_title}>
                    Childcare Software
                  </Typography>
                  <ul className={classes.ul}>
                    <li className={classes.li}>
                      <Link to="/#" className={classes.a}>
                        <Typography>Download</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/case-studies" className={classes.a}>
                        <Typography>Customer Stories</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/feature-overviews" className={classes.a}>
                        <Typography>Features</Typography>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={classes.footer_item}>
                  <Typography variant="h6" className={classes.footer_title}>
                    Company
                  </Typography>
                  <ul className={classes.ul}>
                    <li className={classes.li}>
                      <Link to="/about-us" className={classes.a}>
                        <Typography>About Us</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/#" className={classes.a}>
                        <Typography>Blog</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/#" className={classes.a}>
                        <Typography>Press</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/#" className={classes.a}>
                        <Typography>Careers</Typography>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={classes.footer_item}>
                  <Typography variant="h6" className={classes.footer_title}>
                    Support
                  </Typography>
                  <ul className={classes.ul}>
                    <li className={classes.li}>
                      <Link to="/contact-us" className={classes.a}>
                        <Typography>Contact Us</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/support-center" className={classes.a}>
                        <Typography>Support Center</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/documentation" className={classes.a}>
                        <Typography>Documentation</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/#" className={classes.a}>
                        <Typography>Privacy Policy</Typography>
                      </Link>
                    </li>
                    <li className={classes.li}>
                      <Link to="/#" className={classes.a}>
                        <Typography>Sitemap</Typography>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={3} className={classes.wrapper2}>
            <Grid item lg={6}>
              <Typography variant="h6" className={classes.footer_title2}>
                Download Mobile App
              </Typography>
              <a href="#">
                <img src={PlayStore} alt="" className={classes.PlayStore} />
              </a>
              <a href="#">
                <img src={app_store} alt="" className={classes.PlayStore} />
              </a>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="h6" className={classes.footer_title2}>
                Follow Us
              </Typography>
              <div className={classes.social}>
                <FacebookIcon className={classes.icon} />
                <TwitterIcon className={classes.icon} />
                <InstagramIcon className={classes.icon} />
                <LinkedInIcon className={classes.icon} />
              </div>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Typography variant="body2" className={classes.footer_bottom}>
                Copyright ©2021 KinderCubby
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else if (
    location.pathname === "/documentation" ||
    location.pathname === "/contact-us" ||
    location.pathname === "/support-center"
  ) {
    return "";
  } else {
    return (
      <>
        <Container maxWidth="lg">
          <Grid container className={classes.wrapper2}>
            <Grid item lg={12} xs={12}>
              <Typography variant="body2" className={classes.footer_bottom2}>
                Copyright ©2021 KinderCubby
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
};

export default Footer;
