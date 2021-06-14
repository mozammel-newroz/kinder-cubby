import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Simplify from "../../assets/images/Simplify.png";
import AutomatedTuitionRate from "../../assets/images/AutomatedTuitionRate.png";
import OnlinePayment from "../../assets/images/OnlinePayment.png";
import FinancialDataSorting from "../../assets/images/FinancialDataSorting.png";
import SiplifiedAccounting from "../../assets/images/SiplifiedAccounting.png";
import AutomateTuitionPlan from "../../assets/images/AutomateTuitionPlan.png";
import SendOnlineInvoice from "../../assets/images/online_invoices.svg";
import CollectPayment from "../../assets/images/CollectPayment.png";

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
  banner_no_background: {
    borderRadius: 10,
    padding: 50,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 10,
    },
  },

  banner_big_border_radious: {
    background: "#E3EBFC",
    borderRadius: 20,
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
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
  banner_headline: {
    fontWeight: 600,
    marginBottom: 80,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  banner_content_text: {
    fontSize: 24,
    marginBottom: 30,
  },
  activity_wrapper: {
    padding: "60px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },

  activity_box: {
    textAlign: "center",
  },
  activity_image: {
    maxWidth: "100%",
    padding: "0px 40px 15px 40px",
  },
  center_button: {
    textAlign: "center",
    marginTop: 40,
  },
}));
const Billing = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12}>
            <div className={classes.banner}>
              <div className={classes.banner_content}>
                <Typography variant="h3" className={classes.banner_headline}>
                  Simplify your billing system
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
              <div className={classes.banner_image}>
                <img src={Simplify} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12}>
            <div className={classes.banner_no_background}>
              <div className={classes.banner_content}>
                <Typography variant="h4" style={{ textAlign: "start" }}>
                  Automate Tuition rate & Billing setup
                </Typography>

                <Typography variant="h6" style={{ textAlign: "start" }}>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet laoreet blandit,
                  urna sapien imperdiet lectus, et molestie sem tortor quis
                </Typography>
              </div>
              <div className={classes.banner_image}>
                <img src={AutomatedTuitionRate} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12}>
            <div className={classes.banner_big_border_radious}>
              <div className={classes.banner_image}>
                <img src={OnlinePayment} alt="" />
              </div>
              <div className={classes.banner_content}>
                <Typography variant="h4" style={{ textAlign: "start" }}>
                  Online Payment Option
                </Typography>

                <Typography variant="h6" style={{ textAlign: "start" }}>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet laoreet blandit,
                  urna sapien imperdiet lectus, et molestie sem tortor quis
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12}>
            <div className={classes.banner_no_background}>
              <div className={classes.banner_content}>
                <Typography variant="h4" style={{ textAlign: "start" }}>
                  Financial Data sorting, Segmentation
                </Typography>

                <Typography variant="h6" style={{ textAlign: "start" }}>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet laoreet blandit,
                  urna sapien imperdiet lectus, et molestie sem tortor quis
                </Typography>
              </div>
              <div className={classes.banner_image}>
                <img src={FinancialDataSorting} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12} md={12}>
            <div className={classes.banner_big_border_radious}>
              <div className={classes.banner_image}>
                <img src={SiplifiedAccounting} alt="" />
              </div>
              <div className={classes.banner_content}>
                <Typography variant="h4" style={{ textAlign: "start" }}>
                  Simplified accounting reports
                </Typography>

                <Typography variant="h6" style={{ textAlign: "start" }}>
                  Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
                  congue consequat. In posuere, nunc sit amet laoreet blandit,
                  urna sapien imperdiet lectus, et molestie sem tortor quis
                </Typography>
              </div>
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
          <Grid item lg={12} md={12}>
            <Typography variant="h4">
              Getting started is as easy as 1-2-3
            </Typography>
          </Grid>

          <Grid item lg={4} md={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={AutomateTuitionPlan}
              alt=""
            />

            <div className={classes.activity_content}>
              <Typography variant="h5">Automate tuition plan</Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate natus consectetur temporibus
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={SendOnlineInvoice}
              alt=""
            />

            <div className={classes.activity_content}>
              <Typography variant="h5">Send online Invoice</Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate natus consectetur temporibus
              </Typography>
            </div>
          </Grid>

          <Grid item lg={4} md={4} className={classes.activity_box}>
            <img
              className={classes.activity_image}
              src={CollectPayment}
              alt=""
            />

            <div className={classes.activity_content}>
              <Typography variant="h5">Collect Payment</Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate natus consectetur temporibus
              </Typography>
            </div>
          </Grid>
          <Grid item lg={12} md={12}>
            <div className={classes.center_button}>
              <Link to="/try-it-free">
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button} button`}
                >
                  Yes! Let’s try it.
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Billing;
