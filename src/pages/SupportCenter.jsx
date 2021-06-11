import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "../assets/images/SearchIcon.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import StaffManagement from "../assets/images/StaffManagement.png";
import BillingAndInvoicing from "../assets/images/BillingAndInvoicing.png";
import SearchingRobot from "../assets/images/SearchingRobot.png";
import Divider from "@material-ui/core/Divider";
import Footer2 from "../components/Footer2";

const useStyles = makeStyles((theme) => ({
  divider: {
    background: "#E5EBFD",
    height: "3px",
    width: "80%",
    margin: "20px auto 10px auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  wrapper: {
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  inner_wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  wrapper2: {
    padding: "60px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },

  banner_button: {
    padding: "13px 35px  !important",
  },
  banner_button2: {
    padding: "13px 35px  !important",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 30px  !important",
      marginTop: 10,
    },
  },

  background_style: {
    backgroundColor: "#E5EBFD",
  },

  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 19%)",
    height: "210px",
    borderRadius: "5px",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      margin: "auto",
    },
  },

  center_search_input: {
    marginTop: 30,
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  inputField: {
    height: 47,
    padding: "10px",
    borderRadius: 7,
    backgroundColor: "#fff",
    marginBottom: 40,
  },

  banner_headline: {
    fontWeight: 600,
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },

  align_start: {
    textAlign: "start",
  },
  align_start_margin: {
    textAlign: "start",
    marginBottom: 55,
  },

  paper_image_div: {
    height: "120px",
    marginBottom: "15px",
    paddingTop: "20px",
  },
  paper_image: {
    backgroundColor: "#ddd",
  },
  font_color: {
    color: "#21409A",
  },
  background_style3: {
    backgroundColor: "#E5EBFD",
    marginTop: 30,
  },
  background_style4: {
    padding: "60px 0 60px 200px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 30px",
    },
  },
  banner: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      display: "block",
      textAlign: "center",
    },
  },
  banner_image: {
    flex: 3,
    [theme.breakpoints.down("sm")]: {
      "& img": {
        width: "30%",
      },
    },
  },
  center_maging: {
    textAlign: "center",
    marginTop: "15px",
  },
  banner_content_left: {
    flex: 1,
  },
  banner_content: {
    flex: 6,
    padding: "30px",
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
    },
  },

  active: {
    borderBottom: "2px solid #21409A",
    fontWeight: 600,
  },
  header_nav_item: {
    fontSize: 20,
    fontWeight: 600,
    padding: "0px 15px 3px 15px",
  },
}));

const SupportCenter = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background_style}>
        {/* <div className={classes.wrapper}>
          <div className={classes.inner_wrapper}>
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <Typography className={classes.header_nav_item}>
                Support
              </Typography>
            </div>
          </div>
          <div>
            <Button
              variant="outlined"
              color="secondary"
              className={`${classes.banner_button2} button`}
            >
              Go to KinderCubby
            </Button>
          </div>
        </div> */}

        <div className={classes.wrapper2}>
          <Typography variant="h3" className={classes.banner_headline}>
            What can we help with?
          </Typography>
          <div className={classes.center_search_input}>
            <TextField
              id="outlined-start-adornment"
              placeholder='Try "How to install KinderCubby app"'
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
        </div>
      </div>

      <div className={classes.nav_div}>
        <div className={classes.nav}>
          <div>
            <Link to="#">
              <Typography className={`${classes.nav_item} ${classes.active}`}>
                Owner & Directors
              </Typography>
            </Link>
          </div>
          <div>
            <Link to="#">
              <Typography className={classes.nav_item}>Teachers</Typography>
            </Link>
          </div>
          <div>
            <Link to="#">
              <Typography className={classes.nav_item}>Parents</Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.wrapper2}>
        <Typography variant="h5" className={classes.align_start}>
          {" "}
          Popular topics
        </Typography>
        <Grid container justify="center" alignItems="center" spacing={5}>
          <Grid item xs={12} lg={3}>
            <div className={classes.paper}>
              <div className={classes.paper_image_div}>
                {/* <img
                  src={StaffManagement}
                  alt=""
                  className={classes.paper_image}
                /> */}
              </div>
              <div>
                <Typography variant="subtitle2" gutterBottom></Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className={classes.paper}>
              <div className={classes.paper_image_div}>
                <img
                  src={BillingAndInvoicing}
                  alt=""
                  className={classes.paper_image}
                />
              </div>
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Payment
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className={classes.paper}>
              <div className={classes.paper_image_div}>
                <img
                  src={StaffManagement}
                  alt=""
                  className={classes.paper_image}
                />
              </div>
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Staff Management
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className={classes.paper}>
              <div className={classes.paper_image_div}>
                {/* <img
                  src={StaffManagement}
                  alt=""
                  className={classes.paper_image}
                /> */}
              </div>
              <div>
                <Typography variant="subtitle2" gutterBottom></Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.wrapper2}>
        <Typography variant="h5" className={classes.align_start_margin}>
          {" "}
          Trending topics
        </Typography>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Cras in maximus sem. Praesent libero augue, ornare eget quam sed,
              volutpat ?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.font_color}
            >
              Any question that might be asked?
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.background_style3}>
        <div className={classes.background_style4}>
          <div className={classes.banner}>
            <div className={classes.banner_content_left}></div>
            <div className={classes.banner_content}>
              <Typography variant="h4">
                Do you want to check our help centre?
              </Typography>
              <div className={classes.center_maging}>
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Contact us
                </Button>
              </div>
            </div>
            <div className={classes.banner_image}>
              <img width="50%" src={SearchingRobot} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default SupportCenter;
