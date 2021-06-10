import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/images/KinderCubbyLogo@2x.png";
import Rocket from "../../assets/images/Rocket.png";
import Model1 from "../../assets/images/Model1.png";
import Model2 from "../../assets/images/Model2.png";
import LikeIcon from "../../assets/images/LikeIcon.png";
import DislikeIcon from "../../assets/images/DislikeIcon.png";
import logo_small from "../../assets/images/logo.png";
import Divider from "@material-ui/core/Divider";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Footer2 from "../../components/Footer2";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const useStyle = makeStyles((theme) => ({
  root: {
    background: "#fff",
    position: "relative",
    zIndex: 99999,
  },
  wrapper: {
    backgroundColor: "#E1EBFB",
    height: 250,
    alignItems: "center",
  },

  find_banner: {
    padding: "60px 200px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  find_banner2: {
    padding: "50px 200px 80px 200px",
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
    marginBottom: 40,
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
    marginBottom: 20,
    borderRadius: 7,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  left: {
    padding: "40px 40px 40px 0",
  },
  right: {
    padding: "15px",
    flex: 3,
  },
  card_holder: {
    boxShadow: "1px 1px 5px 3px #eee",
    borderRadius: 5,
  },
  card: {
    padding: "15px",
    backgroundColor: "white",
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
    color: "#707070",
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
  background_style: {
    backgroundColor: "#E5EBFD",
    padding: "40px",
    boxShadow: "1px 1px 5px 3px #eee",
  },
  font_color: {
    color: "#707070",
    marginBottom: 15,
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
}));

const GettingStarted = () => {
  const classes = useStyle();

  return (
    <>
      <Grid container className={`${classes.wrapper}`}>
        <Grid item lg={12}>
          <div className={classes.find_banner}>
            <img src={logo} alt="" className={classes.banner_image} />

            <TextField
              fullWidth
              placeholder="Search for sevices, topics"
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
      <Grid container>
        <Grid item lg={12}>
          <div className={classes.find_banner2}>
            <div className={classes.margin_bottom10}>
              <Breadcrumbs
                separator={<NavigateNextIcon />}
                aria-label="breadcrumb"
              >
                <Link color="inherit" to="#" onClick={handleClick}>
                  <Typography className={classes.breadcrumbs_title_style}>
                    All Topics
                  </Typography>
                </Link>

                <Link color="inherit" to="#" onClick={handleClick}>
                  <Typography
                    className={`${classes.breadcrumbs_last_title_style}`}
                  >
                    Getting Started
                  </Typography>
                </Link>
              </Breadcrumbs>
            </div>
            <div className={classes.background_style}>
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
              <Typography variant="h6" className={classes.h6}>
                Getting Started
              </Typography>
              <div className={classes.card_holder}>
                <Link to="/getting-started-details">
                  <div className={classes.card}>
                    <Typography variant="body1" className={classes.font_color}>
                      What is KinderCubby?
                    </Typography>
                    <Typography variant="body1">
                      Quisque suscipit ipsum est, eu venenatis leo ornare eget.
                      Ut porta facilisis elementum. Sed condimentum sed massa
                      quis ullamcorper. Donec at scelerisque neque. Pellentesque
                      sagittis, massa
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography
                        variant="body2"
                        className={`${classes.bottom}`}
                      >
                        Written by Anna, Allies, Natasha & 2 others
                        <br /> Last updated 10 May 2021
                      </Typography>
                    </div>
                  </div>
                </Link>
                <Divider />
                <Link to="/getting-started-details">
                  <div className={classes.card}>
                    <Typography variant="body1" className={classes.font_color}>
                      What is KinderCubby?
                    </Typography>
                    <Typography variant="body1">
                      Quisque suscipit ipsum est, eu venenatis leo ornare eget.
                      Ut porta facilisis elementum. Sed condimentum sed massa
                      quis ullamcorper. Donec at scelerisque neque. Pellentesque
                      sagittis, massa
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography
                        variant="body2"
                        className={`${classes.bottom}`}
                      >
                        Written by Anna, Allies, Natasha & 2 others
                        <br /> Last updated 10 May 2021
                      </Typography>
                    </div>
                  </div>
                </Link>
                <Divider />
                <Link to="/getting-started-details">
                  <div className={classes.card}>
                    <Typography variant="body1" className={classes.font_color}>
                      What is KinderCubby?
                    </Typography>
                    <Typography variant="body1">
                      Quisque suscipit ipsum est, eu venenatis leo ornare eget.
                      Ut porta facilisis elementum. Sed condimentum sed massa
                      quis ullamcorper. Donec at scelerisque neque. Pellentesque
                      sagittis, massa
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography
                        variant="body2"
                        className={`${classes.bottom}`}
                      >
                        Written by Anna, Allies, Natasha & 2 others
                        <br /> Last updated 10 May 2021
                      </Typography>
                    </div>
                  </div>
                </Link>
                <Divider />
                <Link to="/getting-started-details">
                  <div className={classes.card}>
                    <Typography variant="body1" className={classes.font_color}>
                      What is KinderCubby?
                    </Typography>
                    <Typography variant="body1">
                      Quisque suscipit ipsum est, eu venenatis leo ornare eget.
                      Ut porta facilisis elementum. Sed condimentum sed massa
                      quis ullamcorper. Donec at scelerisque neque. Pellentesque
                      sagittis, massa
                    </Typography>
                    <div className={classes.bottom_wrapper}>
                      <div className={classes.user_li}>
                        <ul>
                          <li>
                            <img src={Model1} alt="" />
                          </li>
                        </ul>
                      </div>
                      <Typography
                        variant="body2"
                        className={`${classes.bottom}`}
                      >
                        Written by Anna, Allies, Natasha & 2 others
                        <br /> Last updated 10 May 2021
                      </Typography>
                    </div>
                  </div>
                </Link>
                <Divider />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <div maxWidth="lg" className={classes.root}>
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
                  <Button variant="outlined" color="primary" className="button">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer2 />
    </>
  );
};

export default GettingStarted;
