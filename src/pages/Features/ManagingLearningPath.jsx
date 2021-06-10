import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

import DistanceLeaning from "../../assets/images/DistanceLeaning.png";
import ManagingLearning from "../../assets/images/ManagingLearning.png";
import ChooseLession from "../../assets/images/ChooseLession.png";
import ImproveQuality from "../../assets/images/ImproveQuality.png";
import DataAndMediaRichReport from "../../assets/images/DataAndMediaRichReport.png";
import PrintableReport from "../../assets/images/PrintableReport.png";
import Divider from "@material-ui/core/Divider";
import SuccessfulGreenIcon from "../../assets/images/SuccessfulGreenIcon.png";
import CreateAssessmentLeft from "../../assets/images/CreateAssessmentLeft.png";
import CreateAssessmentRight from "../../assets/images/CreateAssessmentRight.png";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  banner: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: 50,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 10,
    },
  },
  distance_div_style: {
    background: "#E3EBFC",
    borderRadius: 10,
  },
  distance_banner: {
    padding: "0 50px 50px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 10,
    },
  },

  card: {
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 10,
      display: "block",
    },
  },
  card_content: {
    flex: 1,
    padding: "5px 20px",
  },

  banner_image: {
    flex: 1,
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  banner_content: {
    flex: 1,
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 20,
    },
  },
  banner_button: {
    padding: "13px 35px  !important",
  },
  banner_headline: {
    fontWeight: 600,
    marginBottom: 80,
    // fontSize:'2rem',
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  activity_wrapper: {
    padding: "60px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },
  activity_wrapper2: {
    padding: "15px 120px 60px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },

  manage_center_text_div: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  banner_button: {
    padding: "13px 35px  !important",
  },
  center_button: {
    textAlign: "center",
    marginTop: 40,
  },
  divider: {
    background: "#E5EBFD",
    height: "3px",
    width: "50%",
    margin: "30px auto",
  },
  tab_text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#454141",
  },
  list_Div: {
    borderRadius: 10,
    padding: "10px",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 10,
    },
  },
  list_icon: {
    padding: "0 35px 0 0",
  },
  banner_content_text: {
    fontSize: 24,
    marginBottom: 30,
  },
  activity_box: {
    textAlign: "center",
  },

  activity_image: {
    maxWidth: "100%",
    padding: "0px 40px 15px 40px",
  },
  improve: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  improve_image: {
    maxWidth: "100%",
  },
  button_Style: {
    textAlign: "center",
    paddingBottom: "50px",
  },
  h4: {
    marginBottom: 0,
  },
  h6: {
    margin: 0,
  },
  wrapper_banner: {},
  banner_inner: {
    margin: "0px 30px",
    backgroundColor: "#E1EBFB",
    backgroundImage: `url(${ManagingLearning})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    padding: 70,
    borderRadius: 15,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "none",
      margin: "0px 0px",
      padding: 20,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
    },
  },
  banner_left: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  big_title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "left",
  },
  primary: {
    backgroundColor: "#FF5F48",
  },
  time_line: {
    fontSize: "1.4rem",
    position: "relative",
    top: -10,
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 100,
  },
}));

const ManagingLearningPath = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper_banner}>
          <Grid item lg={12}>
            <div className={classes.banner_inner}>
              <div className={classes.banner_left}>
                <Typography
                  variant="h3"
                  className={`${classes.banner_headline} ${classes.big_title}`}
                >
                  Managing learning
                </Typography>
                <Typography className={classes.banner_content_text}>
                  Sed a magna semper, porta purus eu, ullamcorper ligula. Nam
                  sit amet consectetur
                </Typography>
                <div>
                  <Link to="/try-it-free">
                    <Button
                      variant="contained"
                      color="primary"
                      className={`${classes.banner_button} button`}
                    >
                      Try it Free
                    </Button>
                  </Link>
                </div>
              </div>
              {/* <div className={classes.banner_right}></div> */}
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={5}
          className={`${classes.activity_wrapper}`}
        >
          <Grid item xs={12}>
            <Typography variant="h4">
              Choose Lesson Plans or make your own
            </Typography>
            <div className={classes.manage_center_text_div}>
              <Typography variant="h6" className={classes.h6}>
                Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                congue consequat. In posuere, nunc sit amet laoreet blandit,
                urna sapien imperdiet lectus, et molestie
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <img src={ChooseLession} maxwidth="100%" alt="" />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.card}>
              <div className={classes.card_content}>
                <Typography variant="h5" style={{ textAlign: "start" }}>
                  Before class
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet
                </Typography>
              </div>
              <div className={classes.card_content}>
                <Typography variant="h5" style={{ textAlign: "start" }}>
                  During class
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet
                </Typography>
              </div>
              <div className={classes.card_content}>
                <Typography variant="h5" style={{ textAlign: "start" }}>
                  After class
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item lg={12}>
            <Typography variant="h4">
              Plan your lesson In less time, go digital
            </Typography>
            <div className={classes.center_button}>
              <Link to="/try-it-free">
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Start Now
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.divider} />
      <Container maxWidth="lg">
        <Grid container spacing={5} className={`${classes.activity_wrapper}`}>
          <Grid item md={12}>
            <Typography variant="h4">Easy to create assessments</Typography>
            <div className={classes.manage_center_text_div}>
              <Typography variant="h6" className={classes.h6}>
                Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                congue consequat. In posuere, nunc sit amet laoreet blandit,
                urna sapien imperdiet lectus, et molestie
              </Typography>
            </div>
          </Grid>
          <Grid item lg={2}>
            <img src={CreateAssessmentLeft} alt="" />
          </Grid>
          <Grid item lg={8}>
            <Timeline style={{ textAlign: "left", flex: "none" }}>
              <TimelineItem>
                <TimelineSeparator>
                  <RadioButtonCheckedIcon
                    color="primary"
                    className={classes.primary_icon}
                  />
                  <TimelineConnector className={classes.primary} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography className={classes.time_line}>
                    Records daily activities
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <RadioButtonCheckedIcon
                    color="primary"
                    className={classes.primary_icon}
                  />

                  <TimelineConnector className={classes.primary} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography className={classes.time_line}>
                    Generate assessment automatically
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item md={2} className={classes.right}>
            <img src={CreateAssessmentRight} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} className={classes.distance_div_style}>
            <Typography variant="h4" style={{ paddingTop: "50px" }}>
              Distance learning in case of emergency
            </Typography>
            <div className={classes.distance_banner}>
              <div className={classes.banner_image}>
                <img src={DistanceLeaning} alt="" />
              </div>
              <div className={classes.banner_content}>
                <div className={classes.list_Div}>
                  <div className={classes.list_icon}>
                    <img src={SuccessfulGreenIcon} alt="success icon" />
                  </div>
                  <div>
                    <div className={classes.tab_text}>
                      Sed a magna semper, porta purus eu, ullamcorper ligula.
                      Nam sit amet consectetur sapien. Etiam dui
                    </div>
                  </div>
                </div>
                <div className={classes.list_Div}>
                  <div className={classes.list_icon}>
                    <img src={SuccessfulGreenIcon} alt="success icon" />
                  </div>
                  <div>
                    <div className={classes.tab_text}>
                      Sed a magna semper, porta purus eu, ullamcorper ligula.
                      Nam sit amet consectetur sapien. Etiam dui
                    </div>
                  </div>
                </div>
                <div className={classes.list_Div}>
                  <div className={classes.list_icon}>
                    <img src={SuccessfulGreenIcon} alt="success icon" />
                  </div>
                  <div>
                    <div className={classes.tab_text}>
                      Sed a magna semper, porta purus eu, ullamcorper ligula.
                      Nam sit amet consectetur sapien. Etiam dui
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.button_Style}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Try it Free
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.activity_wrapper}>
          <Grid item lg={12}>
            <Typography variant="h4">
              KinderCubby made reporting easy
            </Typography>
          </Grid>

          <Grid item lg={6} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={DataAndMediaRichReport}
              alt=""
            />

            <div>
              <Typography variant="h5">Data & media rich reports</Typography>
              <Typography variant="subtitle1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>

          <Grid item lg={6} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={PrintableReport}
              alt=""
            />

            <div>
              <Typography variant="h5">
                Printable & shareable reports
              </Typography>
              <Typography variant="subtitle1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper2}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Improve quality rating of your organisation
              <br /> with KinderCubby
            </Typography>

            <div className={classes.improve}>
              <img
                src={ImproveQuality}
                className={classes.improve_image}
                alt=""
              />
            </div>
            <div className={classes.center_button}>
              <Link to="/try-it-free">
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Start Now
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ManagingLearningPath;
