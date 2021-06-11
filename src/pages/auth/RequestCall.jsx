import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  IconButton,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

import HeaderCurveDesignP31 from "../../assets/images/HeaderCurveDesignP31.png";
import logo from "../../assets/images/logo.png";
import ChatingImage from "../../assets/images/ChatingImage.png";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#fff",
    position: "relative",
    zIndex: 9999,
    minHeight: "calc(100vh - 83px)",
  },
  wrapper: {
    backgroundImage: `url(${HeaderCurveDesignP31})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "top",
    // height: 300,
    marginTop: "-63px",
    position: "relative",
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
  },

  logo_wrapper: {
    width: "100%",
    textAlign: "center",
    padding: 20,
  },
  input: {
    marginBottom: 0,
  },
  inputField: {
    padding: "5px",
    height: 45,
    borderRadius: 7,
  },
  inputLabel: {
    top: -5,
  },
  left: {
    display: "flex",
    marginLeft: 40,
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
  left_inner: {},
  desktop: {
    maxWidth: "100%",
    marginBottom: 35,
  },

  right: {
    textAlign: "center",
    borderRadius: 12,
    boxShadow: "1px 1px 3px 2px #ddd",
    background: "#fff",
    padding: 60,
    margin: "30px 90px",
    [theme.breakpoints.down("xs")]: {
      margin: "30px 20px",
      padding: 20,
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
  },
  subtitle: {
    fontSize: "1.4rem",
    marginBottom: 30,
  },
  icon: {
    position: "relative",
    top: 7,
    marginRight: 5,
  },
}));

const RequestCall = () => {
  const classes = useStyle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} className={classes.logo_wrapper}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Grid>

          <Grid item lg={7} md={7}>
            <div className={classes.right}>
              <Typography className={classes.title}>Contact Sales</Typography>
              <Typography className={classes.subtitle}>
                Free upto 10 students, 1 stuff
              </Typography>
              <Grid container spacing={3}>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    className={classes.input}
                    InputProps={{
                      className: classes.inputField,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    className={classes.input}
                    InputProps={{
                      className: classes.inputField,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    label="Organization Name"
                    variant="outlined"
                    className={classes.input}
                    InputProps={{
                      className: classes.inputField,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    className={classes.input}
                    InputProps={{
                      className: classes.inputField,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                </Grid>
                <Grid item lg={12}>
                  <TextField
                    fullWidth
                    label="Organization Email"
                    variant="outlined"
                    className={classes.input}
                    InputProps={{
                      className: classes.inputField,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                </Grid>
                <Grid item lg={12}>
                  <TextField
                    fullWidth
                    label="What is you query"
                    variant="outlined"
                    className={classes.input}
                    InputProps={{
                      className: classes.inputField,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                </Grid>
                <Grid item lg={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="button"
                  >
                    Contact Sales
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={5} md={5}>
            <div className={classes.left}>
              <div className={classes.left_inner}>
                <img className={classes.desktop} src={ChatingImage} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RequestCall;
