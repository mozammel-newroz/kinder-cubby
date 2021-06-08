import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Success from "../../assets/images/Success@2x.png";
import IconActivity from "../../assets/images/IconActivity.png";
import IconActivityReports from "../../assets/images/IconActivityReports.png";
import IconAdministrativeReport from "../../assets/images/IconAdministrativeReport.png";
import IconAssessment from "../../assets/images/IconAssessment.png";
import IconAttendence from "../../assets/images/IconAttendence.png";
import IconAutomatedInvoice from "../../assets/images/IconAutomatedInvoice.png";
import IconChildLedgers from "../../assets/images/IconChildLedgers.png";
import IconDataManagement from "../../assets/images/IconDataManagement.png";
import IconDedicatedApp from "../../assets/images/IconDedicatedApp.png";
import IconDigitalReport from "../../assets/images/IconDigitalReport.png";
import IconDistanceLearning from "../../assets/images/IconDistanceLearning.png";
import IconIncidentReports from "../../assets/images/IconIncidentReports.png";
import IconLessonPlaning from "../../assets/images/IconLessonPlaning.png";
import IconMonitorChildsGrowth from "../../assets/images/IconMonitorChildsGrowth.png";
import IconOnlinePayment from "../../assets/images/IconOnlinePayment.png";
import IconPhotoAndVideos from "../../assets/images/IconPhotoAndVideos.png";
import IconPickUp from "../../assets/images/IconPickUp.png";
import IconRevenueSummary from "../../assets/images/IconRevenueSummary.png";
import IconShareEveryMoment from "../../assets/images/IconShareEveryMoment.png";
import IconInstantMessaging from "../../assets/images/IconInstantMessaging.png";
import IconStaffManagement from "../../assets/images/IconStaffManagement.png";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import SliderImage from "../../components/SliderImage";

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
  wrapper2: {
    padding: "60px 30px 0 30px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  banner_button: {
    padding: "13px 35px  !important",
  },

  activity_wrapper: {
    padding: "60px 120px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",
    },
  },
  activity_wrapper2: {
    padding: "30px 120px 0 120px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 0 0",
    },
  },
  activity_wrapper3: {
    padding: "60px 120px 0 120px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px 0 0",
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

  activity_box: {
    textAlign: "center",
  },

  paper: {
    padding: theme.spacing(1),
    marginBottom: "20px",
    textAlign: "center",
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

  center_button: {
    textAlign: "center",
    marginTop: 40,
  },

  activity_image_blue: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    width: "70px",
    padding: "15px",
    margin: "20px auto",
    backgroundColor: "#8F9FCC",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  activity_image_green: {
    backgroundColor: "#A2D399",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    width: "70px",
    padding: "15px",
    margin: "20px auto",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  activity_image_red: {
    backgroundColor: "#EF8787",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    width: "70px",
    padding: "15px",
    margin: "20px auto",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  activity_image_orange: {
    backgroundColor: "#EAA17F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    width: "70px",
    padding: "15px",
    margin: "20px auto",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
  tab_headline3: {
    fontWeight: 600,
    fontSize: "18px",
    color: "#F26522",
    marginBottom: "25px",
    textAlign: "center",
  },
  h4:{
    marginBottom:0
  },
 
  auto_margin: {
    margin: "20px auto 40px auto",
  },
}));

const FeatureOverviews = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} className={classes.background_style}>
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
          className={classes.activity_wrapper3}
        >
          <Grid item lg={12} className={classes.item1}>
            <Typography variant="h4">
              Let the system monitor activities
              <br /> Focus on what really matters
            </Typography>
          </Grid>

          <Grid
            item
            lg={6}
            className={`${classes.activity_box} ${classes.item2}`}
          >
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
              <span className={classes.icon_style}>
                <ArrowForwardIcon />
              </span>
            </Typography>
          </Grid>

          <Grid
            item
            lg={3}
            className={`${classes.item3} ${classes.grid_padding_bottom_xs}`}
          >
            <Paper className={classes.paper}>
              <img
                className={classes.activity_image_green}
                src={Success}
                alt=""
              />
              <div>
                <Typography className={classes.tab_headline}>
                  Contactless check-in
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_red}>
                <img src={IconAttendence} alt="" width="100%" />
              </div>

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
          <Grid
            item
            lg={3}
            className={`${classes.item4} ${classes.grid_padding_top_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_blue}>
                <img src={IconPickUp} alt="" width="100%" />
              </div>

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

          <Grid
            item
            lg={3}
            className={`${classes.item5} ${classes.grid_padding_bottom_xs}`}
          >
            <Paper className={`${classes.paper}`}>
              <div className={classes.activity_image_blue}>
                <img src={IconActivity} alt="" width="100%" />
              </div>

              <div>
                <Typography className={classes.tab_headline}>
                  Activity Feed
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={`${classes.paper}`}>
              <div className={classes.activity_image_red}>
                <img src={IconIncidentReports} alt="" width="100%" />
              </div>
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
          <Grid
            item
            lg={3}
            className={`${classes.tab_grid_padding} ${classes.item6} ${classes.grid_padding_top_xs}`}
          >
            <Paper className={`${classes.paper}`}>
              <div className={classes.activity_image_orange}>
                <img src={IconPhotoAndVideos} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Photos & videos
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper
              className={classes.paper}
              className={`${classes.paper} ${classes.paper4}`}
            >
              <div className={classes.activity_image_green}>
                <img src={IconActivityReports} alt="" width="100%" />
              </div>
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
          <Grid
            item
            lg={6}
            className={`${classes.activity_box} ${classes.item7}`}
          >
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
              <span className={classes.icon_style}>
                <ArrowForwardIcon />
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
          className={classes.activity_wrapper2}
        >
          <Grid item lg={12} className={classes.item1}>
            <Typography variant="h4">
              Managing your centre has never been this easy
              <br /> Go digital, achieve excellence
            </Typography>
          </Grid>

          <Grid
            item
            lg={6}
            className={`${classes.activity_box} ${classes.item2}`}
          >
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
              <span className={classes.icon_style}>
                <ArrowForwardIcon />
              </span>
            </Typography>
          </Grid>

          <Grid
            item
            lg={3}
            className={`${classes.item3} ${classes.grid_padding_bottom_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_green}>
                <img src={IconDataManagement} alt="" width="100%" />
              </div>
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
          <Grid
            item
            lg={3}
            className={`${classes.item4} ${classes.grid_padding_top_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_orange}>
                <img src={IconStaffManagement} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Staff Management
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_red}>
                <img src={IconAdministrativeReport} alt="" width="100%" />
              </div>
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

          <Grid
            item
            lg={3}
            className={`${classes.item5} ${classes.grid_padding_bottom_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_green}>
                <img src={IconAutomatedInvoice} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Automated Invoice
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_red}>
                <img src={IconRevenueSummary} alt="" width="100%" />
              </div>
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
          <Grid
            item
            lg={3}
            className={`${classes.tab_grid_padding} ${classes.item6} ${classes.grid_padding_top_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_orange}>
                <img src={IconOnlinePayment} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Online Payment
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_blue}>
                <img src={IconChildLedgers} alt="" width="100%" />
              </div>
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
          <Grid
            item
            lg={6}
            className={`${classes.activity_box} ${classes.item7}`}
          >
            <Typography variant="h5" style={{ textAlign: "start" }}>
              Billing
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
              <span className={classes.icon_style}>
                <ArrowForwardIcon />
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
          className={classes.activity_wrapper2}
        >
          <Grid item lg={12} className={classes.item1}>
            <Typography variant="h4">
              Share with parents what matters to them.
              <br /> Satisfied parents, organization growth
            </Typography>
          </Grid>

          <Grid
            item
            lg={6}
            className={`${classes.activity_box} ${classes.item2}`}
          >
            <Typography variant="h5" style={{ textAlign: "start" }}>
              Managing learning path
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
              <span className={classes.icon_style}>
                <ArrowForwardIcon />
              </span>
            </Typography>
          </Grid>

          <Grid
            item
            lg={3}
            className={`${classes.item3} ${classes.grid_padding_bottom_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_orange}>
                <img src={IconAssessment} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Assessment
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_green}>
                <img src={IconLessonPlaning} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Lesson Planing
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            lg={3}
            className={`${classes.tab_grid_padding} ${classes.item4} ${classes.grid_padding_top_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_blue}>
                <img src={IconDistanceLearning} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Distance Learning
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_red}>
                <img src={IconDigitalReport} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Digital Report
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            lg={3}
            className={`${classes.item5} ${classes.grid_padding_bottom_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_blue}>
                <img src={IconDedicatedApp} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Dedicated App
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_red}>
                <img src={IconMonitorChildsGrowth} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Monitor Child’s Growth
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            lg={3}
            className={`${classes.tab_grid_padding} ${classes.item6} ${classes.grid_padding_top_xs}`}
          >
            <Paper className={classes.paper}>
              <div className={classes.activity_image_orange}>
                <img src={IconInstantMessaging} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Instant Messaging
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>

            <Paper className={classes.paper}>
              <div className={classes.activity_image_green}>
                <img src={IconShareEveryMoment} alt="" width="100%" />
              </div>
              <div>
                <Typography className={classes.tab_headline}>
                  Sharing every moment
                </Typography>
                <Typography className={classes.tab_text}>
                  Nulla eleifend pulvinar purus, molestie eu
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            lg={6}
            className={`${classes.activity_box} ${classes.item7}`}
          >
            <Typography variant="h5" style={{ textAlign: "start" }}>
              Parents engagement
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
              <span className={classes.icon_style}>
                <ArrowForwardIcon />
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper2}`}>
          <Grid item lg={12}>
            <Typography variant="h4" className={classes.h4}>Customer Stores</Typography>
          </Grid>
          <Grid item lg={12}>
          <SliderImage />
          </Grid>
          <div className={`${classes.auto_margin}`}>
                <Link to='#'>
                <Typography className={classes.tab_headline3}>
                  More Customer Storis{" "}
                  <span className={classes.icon_style}>
                    <ArrowForwardIcon />
                  </span>
                </Typography>
                </Link>
                
              </div>
        </Grid>
        
      </Container>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} className={classes.background_style}>
            <Typography variant="h4">
              KinderCubby offers modern solution for modern childcare
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
    </div>
  );
};

export default FeatureOverviews;
