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
import Desktop from "../../assets/images/Desktop.png";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundImage: `url(${HeaderCurveDesignP31})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "top",
    marginTop: "-63px",
    justifyContent: "center",
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
    margin: "30px 0px",
    justifyContent: "flex-end",
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

const TryItFree = () => {
  const classes = useStyle();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} sm={12} className={classes.logo_wrapper}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Grid>
          <Grid item lg={5} md={5}>
            <div className={classes.left}>
              <div className={classes.left_inner}>
                <img className={classes.desktop} src={Desktop} alt="" />
                <Typography variant="subtitle1">
                  <CheckIcon className={classes.icon} />
                  Complete Childcare management solution
                </Typography>
                <Typography variant="subtitle1">
                  <CheckIcon className={classes.icon} />
                  Activity tracking to ease the work.
                </Typography>
                <Typography variant="subtitle1">
                  <CheckIcon className={classes.icon} />
                  Save time, save money, boost organisation
                </Typography>
                <Typography variant="subtitle1">
                  <CheckIcon className={classes.icon} />
                  Contactless check-in
                </Typography>
                <Typography variant="subtitle1">
                  <CheckIcon className={classes.icon} />
                  Centralised data
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={7} md={7}>
            <div className={classes.right}>
              <Typography className={classes.title}>Get Started</Typography>
              <Typography className={classes.subtitle}>
                Free upto 10 students, 1 stuff
              </Typography>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12}>
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
                <Grid item lg={6} md={6} sm={12}>
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
                <Grid item lg={6} md={6} sm={12}>
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
                <Grid item lg={6} md={6} sm={12}>
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
                <Grid item lg={12} md={12} sm={12}>
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
                <Grid item lg={12} md={12} sm={12}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel
                      className={classes.input_font_color}
                      id="demo-simple-select-outlined-label"
                    >
                      Number of students enrolled
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Number of students enrolled"
                      IconComponent={ExpandMoreIcon}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={12} sm={12} sm={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="button"
                  >
                    Try it for free
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TryItFree;
