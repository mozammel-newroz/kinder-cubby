import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import CenterManagementImage from "../../assets/images/CenterManagement.png";

import SuccessfulGreenIcon from "../../assets/images/SuccessfulGreenIcon.png";
import ManagingChildcare from "../../assets/images/ManagingChildcare.png";
import StarKidsLogo from "../../assets/images/StarKidsLogo.png";
import StarKidsImage from "../../assets/images/StarKidsImage.png";

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
    // padding: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  banner_image: {
    flex: 6,
    textAlign: "center",
  },
  banner_image2: {
    flex: 4,
    textAlign: "center",
  },

  flex_style: {
    borderRadius: 10,
    padding: "30px 60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0 60px",
    },
  },
  flex_div1_style: {
    flex: 7,
    // paddingRigth:20
  },
  flex_div2_style: {
    flex: 3,
    padding: 20,
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
  },
  title_style: {
    fontSize: "1.5rem",
    fontWeight: "500px",
  },
  margin_bottom10: {
    marginBottom: 10,
  },
}));

const CaseStudiesDetails = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.banner}>
            <div className={classes.banner_image}>
              <img width="100%" src={StarKidsImage} alt="" />
            </div>
            <div className={classes.banner_image2}>
              <img width="60%" src={StarKidsLogo} alt="" />
            </div>
          </div>
        </div>
      </Container>

      <Container maxWidth="lg">
        <div className={classes.wrapper}>
          <div className={classes.flex_style}>
            <div className={classes.flex_div1_style}>
              <div className={classes.margin_bottom10}>
                <Typography className={classes.title_style}>
                  The Problem
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Pellentesque tincidunt tristique neque, eget venenatis enim
                  gravida quis. Fusce at egestas libero. Cras convallis egestas
                  ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum
                </Typography>
              </div>
              <div className={classes.margin_bottom10}>
                <Typography className={classes.title_style}>
                  The Solution
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Pellentesque tincidunt tristique neque, eget venenatis enim
                  gravida quis. Fusce at egestas libero. Cras convallis egestas
                  ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum
                </Typography>
              </div>
              <div className={classes.margin_bottom10}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ textAlign: "start" }}
                >
                  Pellentesque tincidunt tristique neque, eget venenatis enim
                  gravida quis. Fusce at egestas libero. Cras convallis egestas
                  ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum
                </Typography>
              </div>
            </div>
            <div className={classes.flex_div2_style}>
              <Typography variant="body2" gutterBottom>
                caption text
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CaseStudiesDetails;
