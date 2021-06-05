import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Simplify from "../../assets/images/Simplify.png";
import DistanceLeaning from "../../assets/images/DistanceLeaning.png";
import ManagingLearningImage from "../../assets/images/ManagingLearning.png";
import ChooseLession from "../../assets/images/ChooseLession.png";
import ImproveQuality from "../../assets/images/ImproveQuality.png";
import DataAndMediaRichReport from "../../assets/images/DataAndMediaRichReport.png";
import PrintableReport from "../../assets/images/PrintableReport.png";
import Divider from "@material-ui/core/Divider";
import SuccessfulGreenIcon from "../../assets/images/SuccessfulGreenIcon.png";
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
    padding: "5px 60px",
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
}));

const ManagingLearningPath = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Managing learning
                </Typography>
                <Typography className={classes.banner_content_text}>
                  Sed a magna semper, porta purus eu, ullamcorper ligula. Nam
                  sit amet consectetur
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.banner_button} button`}
                  >
                    Try it Free
                  </Button>
                  <Button
                    // variant="contained"
                    color="secondary"
                    className={`${classes.play} button`}
                    startIcon={<PlayCircleOutlineIcon />}
                  >
                    Watch In Action
                  </Button>
                </div>
              </div>
              <div className={classes.banner_image}>
                <img src={Simplify} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={5} className={`${classes.activity_wrapper}`}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Choose Lesson Plans or make your own
            </Typography>
            <div className={classes.manage_center_text_div}>
              <Typography variant="h6">
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
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Start Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.divider} />
      <Container maxWidth="lg">
        <Grid container spacing={5} className={`${classes.activity_wrapper}`}>
          <Grid item xs={12}>
            <Typography variant="h4">Easy to create assessments</Typography>
            <div className={classes.manage_center_text_div}>
              <Typography variant="h6">
                Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                congue consequat. In posuere, nunc sit amet laoreet blandit,
                urna sapien imperdiet lectus, et molestie
              </Typography>
            </div>
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
        <Grid container spacing={3} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Improve quality rating of your organisation with KinderCubby
            </Typography>

            <div className={classes.improve}>
              <img
                src={ImproveQuality}
                className={classes.improve_image}
                alt=""
              />
            </div>
            <div className={classes.center_button}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Start Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ManagingLearningPath;
