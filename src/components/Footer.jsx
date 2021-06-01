import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import logo from "../assets/images/logo.png";
import PlayStore from "../assets/images/PlayStore.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  footer: {
    display: "flex",
    padding: "60px 0px",
    // borderTop: '1px solid #ddd',
    borderBottom: "1px solid #ddd",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  break: {
    boxShadow: "1px 3px 3px #ddd",
    height: 4,
  },
  footer_item: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: 370,
    },
  },
  banner_button: {
    padding: "13px 35px  !important",
  },
  footer_title: {
    fontWeight: 600,
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: 25,
    },
  },
  footer_title2: {
    fontWeight: 700,
    marginBottom: 15,
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
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.break}></div>
            <div className={classes.footer}>
              <div className={classes.footer_item}>
                <img width="90%" src={logo} alt="" />
                <Typography variant="h6" className={classes.footer_title}>
                  Contact Sales
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Request Call
                </Button>
              </div>

              <div className={classes.footer_item}>
                <Typography variant="h6" className={classes.footer_title}>
                  Solution
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Owner & Directors
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      For Teachers
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      For Parents
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Find Nearby Child Cares
                    </a>
                  </li>
                </ul>
              </div>

              <div className={classes.footer_item}>
                <Typography variant="h6" className={classes.footer_title}>
                  Childcare Software
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Download
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Customer Stories
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Features
                    </a>
                  </li>
                </ul>
              </div>

              <div className={classes.footer_item}>
                <Typography variant="h6" className={classes.footer_title}>
                  Company
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      About Us
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Blog
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Press
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className={classes.footer_item}>
                <Typography variant="h6" className={classes.footer_title}>
                  Support
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Support Center
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Documentation
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="#">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h6" className={classes.footer_title2}>
              Download Mobile App
            </Typography>
            <a href="#">
              <img src={PlayStore} alt="" className={classes.PlayStore} />
            </a>
            <a href="#">
              <img src={PlayStore} alt="" className={classes.PlayStore} />
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
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
