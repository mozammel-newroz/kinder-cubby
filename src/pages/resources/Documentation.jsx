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

import NeedHelp from "../../assets/images/NeedHelp@2x.png";
import logo from "../../assets/images/KinderCubbyLogo@2x.png";
import Rocket from "../../assets/images/Rocket.png";
import Model1 from "../../assets/images/Model1.png";
import Model2 from "../../assets/images/Model2.png";
import LikeIcon from "../../assets/images/LikeIcon.png";
import DislikeIcon from "../../assets/images/DislikeIcon.png";
import logo_small from "../../assets/images/logo.png";
import Footer2 from "../../components/Footer2";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#E1EBFB",
    backgroundImage: `url(${NeedHelp})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain, cover",
    backgroundPosition: "right",
    height: 300,
    marginTop: "-63px",
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

const Documentation = () => {
  const classes = useStyle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12}>
            <div className={classes.find_banner}>
              <Link to="/">
                <img src={logo} alt="" className={classes.banner_image} />
              </Link>
              <Typography variant="h4" className={classes.title}>
                Need Help?
              </Typography>

              <TextField
                fullWidth
                variant="outlined"
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                  startAdornment: <SearchIcon className={classes.search} />,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container maxWidth="lg">
          <Grid item>
            <div className={classes.topics}>
              <Link to="/getting-started">
                <div className={classes.box}>
                  <div className={classes.left}>
                    <img src={Rocket} alt="" />
                  </div>
                  <div className={classes.right}>
                    <Typography variant="h6" className={classes.h6}>
                      Getting Started
                    </Typography>
                    <Typography variant="subtitle1">
                      Onboarding guides, payment, subscription
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography variant="body2" className={classes.bottom}>
                        8 articles in this collection
                        <br />
                        Written by Anna, Allies, Natasha & 2 others
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/getting-started">
                <div className={classes.box}>
                  <div className={classes.left}>
                    <img src={Rocket} alt="" />
                  </div>
                  <div className={classes.right}>
                    <Typography variant="h6" className={classes.h6}>
                      Getting Started
                    </Typography>
                    <Typography variant="subtitle1">
                      Onboarding guides, payment, subscription
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography variant="body2" className={classes.bottom}>
                        8 articles in this collection
                        <br />
                        Written by Anna, Allies, Natasha & 2 others
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/getting-started">
                <div className={classes.box}>
                  <div className={classes.left}>
                    <img src={Rocket} alt="" />
                  </div>
                  <div className={classes.right}>
                    <Typography variant="h6" className={classes.h6}>
                      Getting Started
                    </Typography>
                    <Typography variant="subtitle1">
                      Onboarding guides, payment, subscription
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography variant="body2" className={classes.bottom}>
                        8 articles in this collection
                        <br />
                        Written by Anna, Allies, Natasha & 2 others
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/getting-started">
                <div className={classes.box}>
                  <div className={classes.left}>
                    <img src={Rocket} alt="" />
                  </div>
                  <div className={classes.right}>
                    <Typography variant="h6" className={classes.h6}>
                      Getting Started
                    </Typography>
                    <Typography variant="subtitle1">
                      Onboarding guides, payment, subscription
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                          <li>
                            <img src={Model2} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography variant="body2" className={classes.bottom}>
                        8 articles in this collection
                        <br />
                        Written by Anna, Allies, Natasha & 2 others
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper_bottom}`}>
          <Grid item lg={12}>
            <div className={classes.bottom_inner}>
              <div className={classes.mobile_margin}>
                <Typography variant="h6" className={classes.h6}>
                  Was it Helpful?
                </Typography>
                <div className={classes.button_wrapper}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={`${classes.icon_button} button`}
                  >
                    <img src={LikeIcon} alt="" />
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="button"
                  >
                    <img src={DislikeIcon} alt="" />
                  </Button>
                </div>
              </div>
              <div className="">
                <Typography variant="h6" className={classes.h6}>
                  Still need help?
                </Typography>
                <div className={classes.button_wrapper}>
                  <Link to="/support-center">
                    <Button
                      variant="outlined"
                      color="primary"
                      className="button"
                    >
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer2 />
    </>
  );
};

export default Documentation;
