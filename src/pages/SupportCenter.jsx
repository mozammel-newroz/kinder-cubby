import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "../assets/images/SearchIcon.png";
import Phone from "../assets/images/Phone.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import StaffManagement from "../assets/images/StaffManagement.png";
import BillingAndInvoicing from "../assets/images/BillingAndInvoicing.png";

import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "15px 30px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: 0,
    // },
  },
  wrapper2: {
    padding: "80px 160px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: 0,
    // },
  },

  banner_button: {
    padding: "13px 35px  !important",
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
    backgroundColor: "#E5EBFD",
    // marginTop: 30,
  },
  background_style2: {
    borderRadius: "10px",
    padding: "30px 60px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px",
    },
  },

 
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 19%)",
  },

  center_search_input: {
    marginTop: 30,
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  center: {
    textAlign: "center",
  },
  margin_left_20: {
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 3,
    },
  },

  mynab: {
    display: "flex",
    justifyContent: "center",

    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#F7F9FE",
    borderRadius: "0 0 10px 10px",
    "& li": {
      float: "left",
      margin: "5px",
      "& a": {
        display: "block",
        color: "#707070",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
      },

      "& a:hover": {
        color: "#21409A",
        // padding: "13px 16px",
        borderBottom: "2px solid #21409A",
      },
    },
  },
  active: {
    color: "#21409A !important ",
    borderBottom: "2px solid #21409A",
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
    height: 47,
    padding: "10px",
    borderRadius: 7,
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
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  width100: {
    width: "100%",
  },
  align_start: {
    textAlign: "start",
  },
}));

const SupportCenter = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background_style}>
        <div className={classes.wrapper}>asdadsf</div>
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
        <div className={classes.width100}>
          <ul className={classes.mynab}>
            <li>
              <Link to="#" className={classes.active}>
                <Typography> Owner & Directors</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography> Teachers</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography> Parents</Typography>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.wrapper2}>
        <Typography variant="h5" className={classes.align_start}>
          {" "}
          Popular topics
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <div className={classes.paper}>
            <div>
   {/* <img src={AI} alt="" /> */}
            </div>
            <div>

            </div>
            <Typography variant="subtitle2" gutterBottom>
      
                  </Typography>
                 

                 
                </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SupportCenter;
