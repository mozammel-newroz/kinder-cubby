import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "../../assets/images/SearchIcon.png";
import Phone from "../../assets/images/Phone.png";
import map from "../../assets/images/map.png";
import PhoneIcon from "@material-ui/icons/Phone";
import Pagination from "@material-ui/lab/Pagination";
// import './MyNav.css'

const useStyles = makeStyles((theme) => ({
  item5: {
    order: 5,
    [theme.breakpoints.down("xs")]: {
      order: 6,
    },
  },
  item6: {
    order: 6,
    [theme.breakpoints.down("xs")]: {
      order: 7,
    },
  },
  item7: {
    order: 7,
    [theme.breakpoints.down("xs")]: {
      order: 5,
    },
  },

  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  margin_top: {
    marginTop: "30px",
  },

  banner_button: {
    padding: "13px 35px  !important",
  },

  activity_wrapper: {
    background: "#E3EBFC",
    padding: "60px 120px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",
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
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 30px",
    },
  },

  activity_box: {
    textAlign: "center",
  },

  paper: {
    padding: theme.spacing(2),
    marginBottom: "20px",
    textAlign: "start",
  },

  tab_headline: {
    fontWeight: 600,
    fontSize: "14px",
    color: "#454141",
    marginBottom: "15px",
  },
  tab_headline2: {
    fontWeight: 600,
    fontSize: "18px",
    color: "#454141",
    marginBottom: "15px",
  },
  tab_text: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#454141",
    marginBottom: "15px",
  },

  center_search_input: {
    textAlign: "center",
    margin: "auto",
    // marginTop: 40,
    width: "70%",
  },

  tab_grid_padding: {
    paddingTop: "80px !Important",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "12px !Important",
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

  grid_padding_bottom_xs: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0px !Important",
    },
  },
  grid_padding_top_xs: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px !Important",
    },
  },
  icon_style: {
    position: "relative",
    top: "7px",
    left: "4px",
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
    color: "#21409A !Important",
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
    borderRadius: 25,
    backgroundColor: "#fff",
  },
}));

const FindNearbyChildCares = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} className={classes.background_style3}>
            <Typography variant="h4">Find Nearby childcares</Typography>
            <Typography variant="h6">
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
            {/* </div> */}
          </Grid>
          <div
            style={{
              // border: "1px solid blue",
              width: "100%",
              margin: "auto",
            }}
          >
            {/* <div style={{ border: "1px solid red"}}> */}

            <ul className={classes.mynab}>
              <li className={classes.active}>
                <a href="default.asp">All</a>
              </li>
              <li>
                <a href="news.asp">Search Result</a>
              </li>
              <li>
                <a href="contact.asp">Invite Your School</a>
              </li>
            </ul>
          </div>
        </Grid>
      </Container>

      <Container maxWidth="lg" className={classes.margin_top}>
        <div className={`${classes.wrapper}`}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.background_style2}
            spacing={2}
          >
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Network Bendale Acres
                  <br /> Child Care Centre
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  networkbendal.edu.usa
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  2920, Lawrence Ave, Los Angeles,
                  <br /> California, 90011
                </Typography>
                <div className={classes.margin_top_10}>
                  <Typography variant="caption" display="block" gutterBottom>
                    <img src={Phone} alt="" width="13px" />
                    <span className={classes.phone_style}>
                      (416) 530-0722x4108
                    </span>
                  </Typography>
                </div>
                <div className={classes.margin_top_10}>
                  <img src={map} alt="" className={classes.card_image} />
                </div>
              </Paper>
            </Grid>

            <Grid item lg={12} className={classes.flex_style}>
              <div>
                <Pagination count={10} shape="rounded" />
              </div>
              <div>
                <Typography className={classes.page_no_style}>
                  Page No
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} className={`${classes.background_style}`}>
            <Typography variant="h4">
              KinderCubby for easy childcare management
            </Typography>
            <Typography variant="h6">
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
            </Typography>
            <div className={classes.center}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Try it Free
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={`${classes.banner_button} ${classes.margin_left_20} button`}
              >
                Explore Pricing
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FindNearbyChildCares;
