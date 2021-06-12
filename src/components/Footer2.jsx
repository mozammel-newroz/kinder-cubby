import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  IconButton,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import NeedHelp from "../assets/images/NeedHelp@2x.png";
import logo from "../assets/images/KinderCubbyLogo@2x.png";
import Rocket from "../assets/images/Rocket.png";
import Model1 from "../assets/images/Model1.png";
import Model2 from "../assets/images/Model2.png";
import LikeIcon from "../assets/images/LikeIcon.png";
import DislikeIcon from "../assets/images/DislikeIcon.png";
import logo_small from "../assets/images/logo.png";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#fff",
    position: "relative",
    zIndex: 99999,
  },
  wrapper: {
    backgroundColor: "#E1EBFB",
    backgroundImage: `url(${NeedHelp})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain, cover",
    backgroundPosition: "right",
    height: 300,
    marginTop: "-63px",
    position: "relative",
    zIndex: 9999,
  },
  find_banner: {
    padding: "60px 150px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  wrapper_bottom: {
    backgroundColor: "#E1EBFB",
    justifyContent: "center",
  },
  bottom_inner: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px 150px",
    [theme.breakpoints.down("xs")]: {
      padding: 10,

      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  title: {
    textAlign: "left",
  },
  banner_image: {
    height: 35,
    marginBottom: 15,
  },
  input: {
    marginBottom: 30,
  },
  inputField: {
    padding: "10px",
    height: 47,
    borderRadius: 7,
    backgroundColor: "#fff",
    width: 500,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  search: {
    color: "#999",
  },
  topics: {
    margin: "45px 180px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      margin: 20,
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    boxShadow: "1px 1px 5px 3px #eee",
    marginBottom: 20,
    borderRadius: 7,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  left: {
    padding: 40,
  },
  right: {
    padding: "15px",
    flex: 3,
  },
  h6: {
    margin: 0,
    textAlign: "left",
  },
  bottom_wrapper: {
    display: "flex",
  },
  mobile_margin: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  bottom: {
    marginTop: 10,
  },
  user_li: {
    marginRight: 20,
    "& ul": {
      display: "block",
      marginTop: 15,
    },
    "& li": {
      listStyle: "none",
      float: "left",
      marginRight: -4,
    },
  },
  button_wrapper: {
    marginTop: 10,
  },
  icon_button: {
    marginRight: 15,
  },
  wrapper_footer: {
    padding: "15px 150px",
    [theme.breakpoints.down("xs")]: {
      padding: "15px 20px",
    },
  },
  footer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  footer_item: {
    margin: "0px 15px",
    [theme.breakpoints.down("xs")]: {
      margin: "15px 15px",
    },
  },
  link: {
    color: "#EE6741",
    textTransform: "capitalize",
    margin: "0px 10px",
  },
}));
const Footer2 = () => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper_footer}`}>
          <Grid item lg={12}>
            <div className={classes.footer}>
              <div className={classes.footer_item}>
                <Link to="/">
                  <img src={logo_small} width="140px" alt="" />
                </Link>
              </div>
              <div className={classes.footer_item}>
                <Typography variant="body2">©2021 KinderCubby</Typography>
              </div>
              <div className={classes.footer_item}>
                <Button color="primary">
                  <Link to="/request-call" className={classes.link}>
                    Contact Sales
                  </Link>
                </Button>
                <Button color="primary">
                  <Link to="/about-us" className={classes.link}>
                    About
                  </Link>
                </Button>
                <Button color="primary">
                  <Link to="/pricing" className={classes.link}>
                    Pricing
                  </Link>
                </Button>
                <Button color="primary">
                  <Link to="#" className={classes.link}>
                    Blog
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer2;
