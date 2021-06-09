import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import CenterManagementImage from "../../assets/images/CenterManagement.png";

import SuccessfulGreenIcon from "../../assets/images/SuccessfulGreenIcon.png";
import ManagingChildcare from "../../assets/images/ManagingChildcare.png";
import SliderImage from "../../components/SliderImage";

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

  activity_box: {
    textAlign: "center",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "start",
  },
  image_paper: {
    textAlign: "center",
    padding: "50px 100px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 50px",
    },
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
  },
  tab_text: {
    fontSize: "12px",
    lineHeight: "25px",
    color: "#454141",
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
    [theme.breakpoints.down("xs")]: {
      marginTop: "15px",
    },
  },
  h4_mobile_style: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },

  image_width: {
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const CenterManagement = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12} >
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Center management
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
                </div>
              </div>
              <div className={classes.banner_image}>
                <img width="100%" src={CenterManagementImage} alt="" />
              </div>
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
          className={classes.activity_wrapper}
        >
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.h4_mobile_style}>
              Now it’s possible to stay
              <br /> on top of everything
            </Typography>
          </Grid>

          <Grid item xs={12} lg={3}  md={3} className={classes.activity_box}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <div className={classes.tab_left_line}>
                    <Typography className={classes.tab_headline} gutterBottom>
                      Data Management
                    </Typography>
                    <Typography className={classes.tab_text} gutterBottom>
                      Vivamus eget aliquam dui. Integer eu arcu vel arcu
                      suscipit ultrices quis non
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <div className={classes.tab_left_line}>
                    <Typography className={classes.tab_headline} gutterBottom>
                      Administrative Report
                    </Typography>
                    <Typography className={classes.tab_text} gutterBottom>
                      Vivamus eget aliquam dui. Integer eu arcu vel arcu
                      suscipit ultrices quis non
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <div className={classes.tab_left_line}>
                    <Typography className={classes.tab_headline} gutterBottom>
                      Staff Management
                    </Typography>
                    <Typography className={classes.tab_text} gutterBottom>
                      Vivamus eget aliquam dui. Integer eu arcu vel arcu
                      suscipit ultrices quis non
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={9}  md={9}>
            <Paper className={classes.image_paper}>
              <img
                className={classes.image_width}
                src={CenterManagementImage}
                alt="Center Management"
              />

              <br />

              <Grid container className={classes.list_container}>
                <Grid item xs={12} sm={6}>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}>
                      <img src={SuccessfulGreenIcon} alt="success icon" />
                    </div>
                    <div>
                      <div className={classes.tab_text}>
                        Family & child directories
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}>
                      <img src={SuccessfulGreenIcon} alt="success icon" />
                    </div>
                    <div>
                      <div className={classes.tab_text}>
                        Vivamus eget aliquam dui.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}>
                      <img src={SuccessfulGreenIcon} alt="success icon" />
                    </div>
                    <div>
                      <div className={classes.tab_text}>Growth analysis</div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}>
                      <img src={SuccessfulGreenIcon} alt="success icon" />
                    </div>
                    <div>
                      <div className={classes.tab_text}>
                        Vivamus eget aliquam dui.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}>
                      <img src={SuccessfulGreenIcon} alt="success icon" />
                    </div>
                    <div>
                      <div className={classes.tab_text}>
                        Vivamus eget aliquam dui.
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.list_Div}>
                    <div className={classes.list_icon}>
                      <img src={SuccessfulGreenIcon} alt="success icon" />
                    </div>
                    <div>
                      <div className={classes.tab_text}>
                        Vivamus eget aliquam dui.
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper}>
          <Grid item lg={12}  md={12}>
            <div className={classes.banner}>
              <div className={classes.banner_image}>
                <img width="100%" src={CenterManagementImage} alt="" />
              </div>
              <div className={classes.banner_content}>
                <Typography variant="h4" style={{ textAlign: "start" }}>
                  Connected workflow,
                  <br /> maintain consistency
                </Typography>

                <Typography variant="h6" style={{ textAlign: "start" }}>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet laoreet blandit,
                  urna sapien imperdiet lectus, et molestie sem tortor quis dui.
                  Donec
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.banner_button} button`}
                  >
                    Try it Free
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <SliderImage />

      <Container maxWidth="lg">
        <Grid container className={`${classes.activity_wrapper}`}>
          <Grid item lg={12}  md={12}>
            <Typography variant="h4">
              Managing childcare centre has never been
              <br /> this <strike>easy</strike> easier
            </Typography>
            <Typography variant="h6">
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
            </Typography>
            <div className={classes.manage_center_image_div}>
              <img
                src={ManagingChildcare}
                alt="Managing Childcare"
                width="100%"
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

export default CenterManagement;
