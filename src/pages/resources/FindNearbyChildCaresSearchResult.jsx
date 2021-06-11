import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import SearchIcon from "../../assets/images/SearchIcon.png";

import NoSearchResult from "../../assets/images/NoSearchResult.png";
import { Link } from "react-router-dom";

import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  banner_button: {
    padding: "13px 35px  !important",
  },
  banner_button3: {
    padding: "13px 35px  !important",
    [theme.breakpoints.down("sm")]: {
      padding: "13px 50px  !important",
    },
  },

  background_style3: {
    background: "#E3EBFC",
    borderRadius: "10px 10px 0 0",
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 30px",
    },
  },
  background_style: {
    background: "#E3EBFC",
    borderRadius: "10px",
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 30px",
    },
  },
  background_style2: {
    borderRadius: "10px",
    padding: "30px 60px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px",
    },
  },

  paper: {
    padding: theme.spacing(2),
    marginBottom: "20px",
    textAlign: "start",
  },

  center_search_input: {
    textAlign: "center",
    margin: "auto",
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  center: {
    textAlign: "center",
  },
  center_margin: {
    textAlign: "center",
    margin: "50px 0 100px 0",
    [theme.breakpoints.down("xs")]: {
      margin: "50px 0 80px 0",
    },
  },
  margin_left_20: {
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 3,
      marginTop: 10,
    },
  },

  nav_div: {
    width: "80%",
    borderBottom: "2px solid #E5EBFD",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F9FE",
    borderRadius: "0 0 10px 10px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end",
    },
  },
  nav_item: {
    padding: "14px 16px",
    margin: "0 10px",
    textAlign: "center",
    borderBottom: "2px solid rgba(0, 0, 0, 0)",
    "&:hover": {
      borderBottom: "2px solid #21409A",
      fontWeight: 600,
      color: "#21409A",
    },
  },
  active: {
    borderBottom: "2px solid #21409A",
    fontWeight: 600,
    color: "#21409A",
  },

  card_image: {
    width: "100%",
    borderRadius: "10px",
  },
  margin_top_10: {
    marginTop: 10,
  },
  phone_style: {
    position: "relative",
    top: "-3px",
    left: "10px",
  },
  flex_style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      "& div": {
        marginBottom: "10px",
      },
    },
  },
  page_no_style: {
    border: "1px solid #707070",
    color: "#707070",
    padding: 5,
    borderRadius: 10,
  },
  inputField: {
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  margin_top: {
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  h6: {
    marginTop: "0px !important",
  },
  banner_headline: {
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  width100: {
    width: "100%",
  },
}));

const FindNearbyChildCaresSearchResult = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} sm={12} className={classes.background_style3}>
            <Typography variant="h3" className={classes.banner_headline}>
              Find Nearby childcares
            </Typography>
            <Typography variant="h6" className={classes.h6}>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien.
              <br /> Etiam dui ipsum, viverra vel turpis ut, dignissim elementum
            </Typography>

            <div className={classes.center_search_input}>
              <TextField
                id="outlined-start-adornment"
                size="small"
                placeholder="Enter location or childcare name..."
                fullWidth={true}
                InputProps={{
                  className: classes.inputField,
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={SearchIcon} alt="" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </div>
          </Grid>
          <div className={classes.width100}>
            <div className={classes.nav}>
              <div>
                <Link to="/find-nearby-child-care">
                  <Typography className={classes.nav_item}>All</Typography>
                </Link>
              </div>
              <div>
                <Link to="/find-nearby-child-care-search-result">
                  <Typography
                    className={`${classes.nav_item} ${classes.active}`}
                  >
                    Search Result
                  </Typography>
                </Link>
              </div>
              <div>
                <Link to="/invite-your-friends">
                  <Typography className={classes.nav_item}>
                    Invite Your School
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <div className={`${classes.wrapper}`}>
          <div className={classes.center_margin}>
            <img src={NoSearchResult} alt="" />
            <Typography variant="body1" gutterBottom>
              You haven’t searched anything.
            </Typography>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg" className={classes.margin_top}>
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} sm={12} className={`${classes.background_style}`}>
            <Typography variant="h4">
              KinderCubby for easy childcare management
            </Typography>
            <Typography variant="h6" className={classes.h6}>
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
            </Typography>
            <div className={classes.center}>
              <Link to="/try-it-free">
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button3} button`}
                >
                  Try it Free
                </Button>{" "}
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outlined"
                  color="primary"
                  className={`${classes.banner_button} ${classes.margin_left_20} button`}
                >
                  Explore Pricing
                </Button>{" "}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FindNearbyChildCaresSearchResult;
