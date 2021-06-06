import React from "react";
import Carousel from "nuka-carousel";
import {
  makeStyles,
  IconButton,
  Typography,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import NeedHelp from "../../assets/images/NeedHelp@2x.png";
import logo from "../../assets/images/KinderCubbyLogo@2x.png";
import Rocket from "../../assets/images/Rocket.png";
import Model1 from "../../assets/images/Model1.png";
import Model2 from "../../assets/images/Model2.png";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#E1EBFB",
    backgroundImage: `url(${NeedHelp})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain, cover",
    backgroundPosition: "right",
    height: 300,
  },
  find_banner: {
    padding: "60px 150px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
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
    width: '100%',
    [theme.breakpoints.down("xs")]: {
      width: 'auto',
      margin: 20,
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'flex-start',
    boxShadow: "1px 1px 5px 3px #eee",
    marginBottom: 20,
    borderRadius: 7,
    width: "100%",
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
}));

const Documentation = () => {
  const classes = useStyle();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12}>
            <div className={classes.find_banner}>
              <img src={logo} alt="" className={classes.banner_image} />
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
        <Grid container>
          <Grid item>
            <div className={classes.topics}>
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

              <div className={classes.box}>
                <div className={classes.left}>
                  <img src={Rocket} alt="" />
                </div>
                <div className={classes.right}>
                  <Typography variant="h6" className={classes.h6}>
                    Getting Started
                  </Typography>
                  <Typography variant="subtitle1">
                    Onboarding guides, payment, subscription /
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
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Documentation;
