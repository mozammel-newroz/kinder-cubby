import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import Attendance from "../../assets/images/Attendance.png";
import FaceAndEmotion from "../../assets/images/FaceAndEmotion.png";
import AttendanceReport from "../../assets/images/AttendanceReport.png";
import SafeGuardian from "../../assets/images/SafeGuardian.png";
import activity_image from "../../assets/images/activity.png";
import StartNow_image from "../../assets/images/StartNow.png";
import DemoVideo_image from "../../assets/images/DemoVideo.png";
import YoutubeIcon from "../../assets/images/YoutubeIcon.png";
import Goodbye from "../../assets/images/Goodbye.png";
import YoutubeDemoPage18 from "../../assets/images/YoutubeDemoPage18.png";
import FriendsAndFamily from "../../assets/images/FriendsAndFamily.png";
import OwnerAndDirectors from "../../assets/images/OwnerAndDirectors.png";
import Parents from "../../assets/images/Parents.png";
import SuccessfulGreenIcon from "../../assets/images/SuccessfulGreenIcon.png";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  wrapper2: {
    padding: "0px 50px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
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
  banner_content_text: {
    fontSize: 24,
    marginBottom: 30,
  },
  banner_headline: {
    fontWeight: 600,
    marginBottom: 80,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  play: {
    color: "#0B4295",
    marginLeft: 10,
    padding: "13px 35px  !important",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  activity_wrapper: {
    padding: "60px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },
  activity_wrapper3: {
    padding: "60px 120px 90px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px 40px 0",
    },
  },

  activity_box: {
    textAlign: "center",
  },
  activity_image: {
    maxWidth: "100%",
    padding: "0px 40px 15px 40px",
  },

  activity_wrapper2: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: "40px 80px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  image: {
    maxWidth: "100%",
    
  },
  demo: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: "60px 70px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
      width: "100%",
    },
  },
 
  demo_headline: {
    marginBottom: 50,
  },

 
  center_button: {
    textAlign: "center",
    marginTop: 40,
  },
  manage_center_image_div: {
    width: "60%",
    margin: "auto",
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
    backgroundColor: "#DF6D38",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    // padding: "3px 20px 0 0",
  },
  tab_text: {
    fontSize: "12px",
    lineHeight: "25px",
    color: "#454141",
    paddingLeft: 10,
  },
  title: {
    display: "flex",
    marginBottom: 10,
  },
  name: {
    fontWeight: 600,
    paddingRight: 15,
    borderRight: "3px solid #E5EBFD",
  },
  degisnation: {
    paddingLeft: 15,
  },
 
  
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  card_padding: {
    padding: "20px !Important",
  },
  padding_margin0:{
    paddingTop: "0px",
    paddingLeft: "0"
  },
  h4_mobile_style:{
    [theme.breakpoints.down("xs")]: {
   marginBottom:0
    },
  },
  h6_mobile_style:{
    [theme.breakpoints.down("xs")]: {
   marginTop:20
    },
  }
}));

const AttendanceAndCheckins = () => {
  const classes = useStyles();
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Attendance with
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
                <img src={Attendance} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.activity_wrapper3}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Manage your childcare attendance <br />
              with face & emotion detection
            </Typography>
          </Grid>

          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={FaceAndEmotion}
              alt=""
            />

            <div>
              <Typography variant="h5">Face & Emotion detection</Typography>
              <Typography variant="subtitle1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut,
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={AttendanceReport}
              alt=""
            />

            <div>
              <Typography variant="h5">Attendance Report</Typography>
              <Typography variant="subtitle1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut,
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} className={classes.activity_box}>
            <img className={classes.activity_image} src={SafeGuardian} alt="" />

            <div>
              <Typography variant="h5">Safe guardian management</Typography>
              <Typography variant="subtitle1">
                Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
                amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut,
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <div className={classes.wrapper2}>
          <Grid
            container
            spacing={6}
            justify="center"
            alignItems="center"
            className={classes.activity_wrapper2}
          >
            <Grid item lg={12}>
              <Typography variant="h4">
                Instant reporting to every users
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid container spacing={2} className={classes.card}>
                <Grid
                  item
                  xs={5}
               
                  className={classes.padding_margin0}               
                >
                  <img src={OwnerAndDirectors} alt="" width="100%" />
                </Grid>
                <Grid item xs={7} className={classes.card_padding}>
                  <Typography variant="h5" style={{ textAlign: "start" }}>
                    Owners & Directors
                  </Typography>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Real time update on attendance
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        See ratio of children per teacher
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Receive warning if under or overstaffed
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Reduce centre expenses.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <Typography variant="body2">
                    “Duis vestibulum elit vel neque pharetra vulputate. Quisque
                    scelerisque nisi urna. Duis rutrum non risus in imperdiet.
                    Proin molestie accumsan nulla sit amet mattis. Ut vel
                    tristique neque. Praesent purus eros, aliquet sit amet”
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <div className={classes.title}>
                    <span className={classes.name}>
                      <Typography>
                        <strong>Alina Smith</strong>
                      </Typography>
                    </span>
                    <span className={classes.degisnation}>
                      <Typography>Director</Typography>
                    </span>
                  </div>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
              <Grid
                container
                spacing={2}
                className={classes.card}
              >
                <Grid
                  item
                  xs={5}
                  className={classes.padding_margin0}               
                >
                  <img src={OwnerAndDirectors} alt="" width="100%" />
                </Grid>
                <Grid item xs={7} className={classes.card_padding}>
                  <Typography variant="h5" style={{ textAlign: "start" }}>
                    Teachers
                  </Typography>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        No need to check-in kids
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>Less paper work</div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Safe children’s drop off & pickup
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Complete focus on children
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <Typography variant="body2">
                    “Duis vestibulum elit vel neque pharetra vulputate. Quisque
                    scelerisque nisi urna. Duis rutrum non risus in imperdiet.
                    Proin molestie accumsan nulla sit amet mattis. Ut vel
                    tristique neque. Praesent purus eros, aliquet sit amet”
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <div className={classes.title}>
                    <span className={classes.name}>
                      <Typography>
                        <strong>Ana Brown</strong>
                      </Typography>
                    </span>
                    <span className={classes.degisnation}>
                      <Typography>Teacher</Typography>
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid
                container
                spacing={2}
                className={classes.card}
              >
                <Grid item xs={7} className={classes.card_padding}>
                  <Typography variant="h5" style={{ textAlign: "start" }}>
                    Parents
                  </Typography>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Real time update on attendance
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        See ratio of children per teacher
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Receive warning if under or overstaffed
                      </div>
                    </div>
                  </div>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}></div>
                    <div>
                      <div className={classes.tab_text}>
                        Reduce centre expenses.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={5}
                  className={classes.padding_margin0}               
                >
                  <img src={Parents} alt="" width="100%" />
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <Typography variant="body2">
                    “Duis vestibulum elit vel neque pharetra vulputate. Quisque
                    scelerisque nisi urna. Duis rutrum non risus in imperdiet.
                    Proin molestie accumsan nulla sit amet mattis. Ut vel
                    tristique neque. Praesent purus eros, aliquet sit amet”
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <div className={classes.title}>
                    <span className={classes.name}>
                      <Typography>
                        <strong>Maria william</strong>
                      </Typography>
                    </span>
                    <span className={classes.degisnation}>
                      <Typography>Parent</Typography>
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <Typography variant="body2">
                    “Duis vestibulum elit vel neque pharetra vulputate. Quisque
                    scelerisque nisi urna. Duis rutrum non risus in imperdiet.
                    Proin molestie accumsan nulla sit amet mattis. Ut vel
                    tristique neque. Praesent purus eros, aliquet sit amet”
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.card_padding}>
                  <div className={classes.title}>
                    <span className={classes.name}>
                      <Typography>
                        <strong>Jacob William</strong>
                      </Typography>
                    </span>
                    <span className={classes.degisnation}>
                      <Typography>Parent</Typography>
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4" className={classes.h4_mobile_style}>
              Say goodbye to check in sheets and signatures
            </Typography>
            <Typography variant="h6" className={classes.h6_mobile_style}>
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
            </Typography>
            <div className={classes.manage_center_image_div}>
              <img src={Goodbye} width="100%" alt="" />
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

      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.demo}>
              <Typography variant="h4" className={classes.demo_headline}>
                KinderCubby activity tracking demo
              </Typography>
              <div className={classes.activity_box}>
                <img src={YoutubeDemoPage18} alt="" className={classes.image} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={3} className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}>
            <Typography variant="h4">
              Impressed? There’s a 30 days free trial
            </Typography>
            <div className={classes.center_button}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.banner_button} button`}
              >
                Yes! Let’s try it.
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AttendanceAndCheckins;
