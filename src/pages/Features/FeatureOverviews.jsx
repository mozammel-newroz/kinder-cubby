import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import CenterManagementImage from "../../assets/images/CenterManagement.png";

import Success from "../../assets/images/Success@2x.png";
import BlackRightArrow from "../../assets/images/BlackRightArrow.png";
import RedCircle from "../../assets/images/RedCircle.png";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  banner: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: 50,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  banner_image: {
    flex: 1,
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  banner_content: {
    flex: 1,
    padding: 30,
  },
  banner_button: {
    padding: "13px 35px  !important",
  },
  banner_headline: {
    fontWeight: 600,
    fontSize: "2.9rem",
    marginBottom: 80,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20,
    },
  },

  activity_wrapper: {
    padding: "60px 120px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",
    },
  },
  main: {
    background: "#E3EBFC",
    borderRadius: "10px",
    padding: "60px",
  },

  activity_box: {
    textAlign: "center",
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  image_paper: {
    textAlign: "center",
    padding: "50px 100px",
  },
  tab_left_line: {
    borderLeft: "6px solid #DF6D38",
    paddingLeft: "15px",
    borderRadius: "3px",
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
    padding: "0 30px",
  },

  list_Div: {
    borderRadius: 10,
    padding: "2px",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 10,
    },
  },
  list_icon: {
    padding: "3px 35px 0 0",
  },

  center_button: {
    textAlign: "center",
    marginTop: 40,
  },
  manage_center_image_div: {
    width: "60%",
    margin: "auto",
  },
  banner_content_text: {
    fontSize: 24,
    marginBottom: 30,
  },
  list_container: {
    textAlign: "start",
    marginTop: "30px",
  },
  activity_image: {
    maxWidth: "100%",
    background: `url(${RedCircle})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: 10,
    // marginBottom: 10,
  },
  tab_grid_padding:{
    paddingTop:'50px !Important',
    [theme.breakpoints.down("sm")]: {
      paddingTop: '12px',
    },
  }
}));

const FeatureOverviews = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} className={classes.main}>
            <Typography variant="h4">
              Features for modern
              <br /> childcare management
            </Typography>
            <Typography variant="h6">
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet
              <br /> consectetur sapien. Etiam dui ipsum, viverra vel turpis ut,
              dignissim elementum
            </Typography>

            <div className={classes.center_button}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Try It Free
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          className={classes.activity_wrapper}
        >
          <Grid item lg={12}>
            <Typography variant="h4">
              Let the system monitor activities
              <br /> Focus on what really matters
            </Typography>
          </Grid>

          <Grid item lg={6}  className={classes.activity_box}>
            <Typography variant="h5" style={{ textAlign: "start" }}>
              Attendance & check-in
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: "start" }}>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
            </Typography>
            <Typography
              className={classes.tab_headline2}
              style={{ textAlign: "start" }}
            >
              Learn More{" "}
              <span style={{ position: "relative", top: "7px", left: "15px" }}>
                <img src={BlackRightArrow} alt="" />
              </span>
            </Typography>
          </Grid>

          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                  Contactless check-in
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                  Attendace Report
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                  Pickup Management
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item lg={3} id='smallPosition2nd'>
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                  Activity Feed
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                  Incident Reports
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <br />
            <br />
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                  Photos & videos
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                  Activity Reports
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6} className={classes.activity_box}>
            <Typography variant="h5" style={{ textAlign: "start" }}>
            Activity Tracking
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: "start" }}>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
            </Typography>
            <Typography
              className={classes.tab_headline2}
              style={{ textAlign: "start" }}
            >
              Learn More{" "}
              <span style={{ position: "relative", top: "7px", left: "15px" }}>
                <img src={BlackRightArrow} alt="" />
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          className={classes.activity_wrapper}
        >
          <Grid item lg={12}>
            <Typography variant="h4">
            Managing your centre has never been this easy<br/> Go digital, achieve excellence
            </Typography>
          </Grid>

          <Grid item lg={6} className={classes.activity_box}>
            <Typography variant="h5" style={{ textAlign: "start" }}>
            Centre Management
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: "start" }}>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
            </Typography>
            <Typography
              className={classes.tab_headline2}
              style={{ textAlign: "start" }}
            >
              Learn More{" "}
              <span style={{ position: "relative", top: "7px", left: "15px" }}>
                <img src={BlackRightArrow} alt="" />
              </span>
            </Typography>
          </Grid>

          <Grid item lg={3}>
            
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                Data management
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                Staff Management
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
            <br/>
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                Administrative reports
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                Automated Invoice
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                Revenue summary
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} className={classes.tab_grid_padding}>
           
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                Online Payment
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              <img className={classes.activity_image} src={Success} alt="" />
              <div>
                <Typography className={classes.tab_headline}>
                Child ledgers
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6} className={classes.activity_box}>
            <Typography variant="h5" style={{ textAlign: "start" }}>
            Activity Tracking
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: "start" }}>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
            </Typography>
            <Typography
              className={classes.tab_headline2}
              style={{ textAlign: "start" }}
            >
              Learn More{" "}
              <span style={{ position: "relative", top: "7px", left: "15px" }}>
                <img src={BlackRightArrow} alt="" />
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FeatureOverviews;
