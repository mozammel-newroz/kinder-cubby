import React, { useEffect } from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Growth1 from "../assets/images/Growth1.png";
import Growth2 from "../assets/images/Growth2.png";
import Growth3 from "../assets/images/Growth3.png";
import Growth4 from "../assets/images/Growth4.png";
import Growth5 from "../assets/images/Growth5.png";
import Growth6 from "../assets/images/Growth6.png";
import Growth7 from "../assets/images/Growth7.png";
import Clients from "../assets/images/Clients.png";
import InnovativeSolution from "../assets/images/InnovativeSolution.png";
import AI from "../assets/images/AI.png";
import Diversity from "../assets/images/Diversity.png";
import Responding from "../assets/images/Responding.png";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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

  background_style: {
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px",
    },
  },
  background_style2: {
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 30px",
    },
  },

  paper: {
    padding: theme.spacing(3),
    marginBottom: "20px",
    textAlign: "start",
    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 19%)",
  },

  center: {
    textAlign: "center",
  },
  center_maging: {
    textAlign: "center",
    marginTop: "15px",
  },
  margin_left_20: {
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 3,
    },
  },

  margin_top: {
    marginTop: 60,
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

  font_color: {
    color: "#707070",
  },
  tab_div: {
    width: "70%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  tab_headline2: {
    fontWeight: 600,
    fontSize: "14px",
    color: "#F26522",
  },
  icon_style: {
    position: "relative",
    top: "7px",
    left: "4px",
  },
  h4: {
    textAlign: "start",
  },
  line_design: {
    padding: "15px 0",
    marginBottom: 15,
    borderTop: "2px solid #E5EBFD",
  },
  margin15: {
    margin: "15px 0",
  },
  banner: {
    background: "#E3EBFC",
    borderRadius: 10,

    display: "flex",

    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  banner_content: {
    flex: 1,
    padding: 30,
  },
  banner_image: {
    flex: 1,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  text_start: {
    textAlign: "start",
  },
  margin_boby_text: {
    marginTop: "58px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  
}));

const AboutUs = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <div className={`${classes.wrapper}`}>
          <div className={classes.background_style}>
            <Grid container>
              <Grid item lg={12}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Where the growth
                  <br /> happens
                </Typography>
                <Typography variant="h6" className={classes.h6}>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue <br />
                  In posuere, nunc sit amet laoreet blandit, urna sapien <br />
                  et molestie sem tortor quis du.
                </Typography>
              </Grid>
            </Grid>
            <div className={classes.tab_div}>
              <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={6} lg={3} className={classes.center}>
                  <Typography variant="body1" gutterBottom>
                    2+ million
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.font_color}
                  >
                    Users
                  </Typography>
                </Grid>
                <Grid item xs={6} lg={3} className={classes.center}>
                  <Typography variant="body1" gutterBottom>
                    15+ thousand
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.font_color}
                  >
                    Teachers
                  </Typography>
                </Grid>
                <Grid item xs={6} lg={3} className={classes.center}>
                  <Typography variant="body1" gutterBottom>
                    4+ thousand
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.font_color}
                  >
                    Organizations
                  </Typography>
                </Grid>
                <Grid item xs={6} lg={3} className={classes.center}>
                  <Typography variant="body1" gutterBottom>
                    10+ million
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.font_color}
                  >
                    Moments
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin_top}>
              <Grid container justify="space-between" alignItems="center">
                <Grid className={classes.center}>
                  <img src={Growth1} alt="" width="100%" />
                </Grid>
                <Grid className={classes.center}>
                  <img src={Growth2} alt="" width="100%" />
                </Grid>
                <Grid className={classes.center}>
                  <img src={Growth3} alt="" width="100%" />
                </Grid>
                <Grid className={classes.center}>
                  <img src={Growth4} alt="" width="100%" />
                </Grid>
                <Grid className={classes.center}>
                  <img src={Growth5} alt="" width="100%" />
                </Grid>
                <Grid className={classes.center}>
                  <img src={Growth6} alt="" width="100%" />
                </Grid>
                <Grid className={classes.center}>
                  <img src={Growth7} alt="" width="100%" />
                </Grid>
              </Grid>{" "}
            </div>
            <div className={classes.margin_top}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <Paper className={classes.paper}>
                    <Typography variant="subtitle1" gutterBottom>
                      Meet the leadership team{" "}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Aenean non accumsan ante. Duis et risus accumsan sem
                      tempus porta nec sit amet est. Sed ut
                    </Typography>
                    <Link to="/leadership">
                      <Typography className={classes.tab_headline2}>
                        Leadership{" "}
                        <span className={classes.icon_style}>
                          <ArrowForwardIcon />
                        </span>
                      </Typography>
                    </Link>
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Paper className={classes.paper}>
                    <Typography variant="subtitle1" gutterBottom>
                      Press
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Aenean non accumsan ante. Duis et risus accumsan sem
                      tempus porta nec sit amet est. Sed ut
                    </Typography>
                    <Link to="#">
                      <Typography className={classes.tab_headline2}>
                        Learn More{" "}
                        <span className={classes.icon_style}>
                          <ArrowForwardIcon />
                        </span>
                      </Typography>
                    </Link>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div className={classes.margin_top}>
              <Typography variant="body2" className={classes.margin15}>
                {" "}
                <span className={classes.line_design}>What we believe</span>
              </Typography>

              <Typography variant="h4" className={classes.h4}>
                Values to live by
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6} lg={3}>
                  <Typography variant="body1" gutterBottom>
                    Respect
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Aenean sed nibh a magna posuere tempor.
                  </Typography>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Typography variant="body1" gutterBottom>
                    Innovation
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Donec dapibus mauris id odio ornare tempus.
                  </Typography>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Typography variant="body1" gutterBottom>
                    Integrity
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Integer ac interdum lacus. Nunc porta semper
                  </Typography>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Typography variant="body1" gutterBottom>
                    Accountability
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Donec dapibus mauris id odio ornare tempus.
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.center_maging}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={`${classes.banner_button} ${classes.margin_left_20} button`}
                  >
                    Open positions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h4" className={classes.text_start}>
                  We love our clients
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue In posuere, nunc sit amet laoreet blandit,
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Aenean non accumsan ante. Duis et risus accumsan sem tempus
                  porta nec sit amet est. Sedut euismod. Suspendisse potenti.
                  Aliquam fringilla orci tincidunt, ullamcorper erat in,
                  malesuada metus. Vivamus luctus maximus vestibulum. ornare.
                  Aenean leo diam, feugiat sed nulla sed, consequat venenatis
                  est.
                </Typography>
                <Link to="#">
                  <Typography className={classes.tab_headline2}>
                    See more customer stories{" "}
                    <span className={classes.icon_style}>
                      <ArrowForwardIcon />
                    </span>
                  </Typography>
                </Link>
              </div>
              <div className={classes.banner_image}>
                <img width="100%" src={Clients} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.background_style2}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Typography variant="h4" className={classes.text_start}>
                  Changing the way childcare
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.margin_boby_text}
                >
                  Aenean non accumsan ante. Duis et risus accumsan sem tempus
                  porta nec sit amet est. Sedut euismod. Suspendisse potenti.
                  Aliquam fringilla orci tincidunt, ullamcorper
                </Typography>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Paper className={classes.paper}>
                  <img src={InnovativeSolution} alt="" />

                  <Typography variant="subtitle2" gutterBottom>
                    Innovative solution for progressing world
                  </Typography>
                  <Link to="#">
                    <Typography className={classes.tab_headline2}>
                      Learn More{" "}
                      <span className={classes.icon_style}>
                        <ArrowForwardIcon />
                      </span>
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Paper className={classes.paper}>
                  <img src={AI} alt="" />

                  <Typography variant="subtitle2" gutterBottom>
                    AI to extend productivity of child care centre
                  </Typography>
                  <Link to="#">
                    <Typography className={classes.tab_headline2}>
                      Learn More{" "}
                      <span className={classes.icon_style}>
                        <ArrowForwardIcon />
                      </span>
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Paper className={classes.paper}>
                  <img src={Diversity} alt="" />

                  <Typography variant="subtitle2" gutterBottom>
                    Responding to covid-19 with contactless check-in
                  </Typography>
                  <Link to="#">
                    <Typography className={classes.tab_headline2}>
                      Learn More{" "}
                      <span className={classes.icon_style}>
                        <ArrowForwardIcon />
                      </span>
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Paper className={classes.paper}>
                  <img src={Responding} alt="" />

                  <Typography variant="subtitle2" gutterBottom>
                    From diversity & Inclusion to belonging contactless check-in
                  </Typography>
                  <Link to="#">
                    <Typography className={classes.tab_headline2}>
                      Learn More{" "}
                      <span className={classes.icon_style}>
                        <ArrowForwardIcon />
                      </span>
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
