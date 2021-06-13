import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import SearchIcon from "../../assets/images/SearchIcon.png";

import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  banner_button2: {
    padding: "13px 35px  !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  banner_button3: {
    padding: "13px 35px  !important",
    [theme.breakpoints.down("sm")]: {
      padding: "13px 50px  !important",
    },
  },

  background_style3: {
    background: "#E3EBFC",
    borderRadius: "10px 10px 0 0",
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 30px",
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
  background_style2: {
    borderRadius: "10px",
    padding: "30px 60px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px",
    },
  },

  paper: {
    padding: theme.spacing(2),
    marginBottom: "20px",
    textAlign: "start",
  },

  center_search_input: {
    textAlign: "center",
    margin: "auto",
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  center: {
    textAlign: "center",
  },
  center_margin: {
    textAlign: "center",
    margin: "50px 200px 70px 200px",

    [theme.breakpoints.down("xs")]: {
      margin: "30px 10px",
    },
  },
  margin_left_20: {
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 3,
      marginTop: 10,
    },
  },

  nav_div: {
    width: "80%",
    borderBottom: "2px solid #E5EBFD",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F9FE",
    borderRadius: "0 0 10px 10px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end",
    },
  },
  nav_item: {
    padding: "14px 16px",
    margin: "0 10px",
    textAlign: "center",
    borderBottom: "2px solid rgba(0, 0, 0, 0)",
    "&:hover": {
      borderBottom: "2px solid #21409A",
      fontWeight: 600,
      color: "#21409A",
    },
  },
  active: {
    borderBottom: "2px solid #21409A",
    fontWeight: 600,
    color: "#21409A",
  },

  card_image: {
    width: "100%",
    borderRadius: "10px",
  },
  margin_top_10: {
    marginTop: 10,
  },
  phone_style: {
    position: "relative",
    top: "-3px",
    left: "10px",
  },
  flex_style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      "& div": {
        marginBottom: "10px",
      },
    },
  },
  page_no_style: {
    border: "1px solid #707070",
    color: "#707070",
    padding: 5,
    borderRadius: 10,
  },
  inputField: {
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  margin_top: {
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
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
  width100: {
    width: "100%",
  },
  input_font_color: {
    color: "#707070",
  },
  input_font_color2: {
    "& .MuiFormLabel-root": { color: "#707070 !important" },
  },
}));

const InviteYourFriends = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} sm={12} className={classes.background_style3}>
            <Typography variant="h3" className={classes.banner_headline}>
              Find Nearby childcares
            </Typography>
            <Typography variant="h6" className={classes.h6}>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien.
              <br /> Etiam dui ipsum, viverra vel turpis ut, dignissim elementum
            </Typography>

            <div className={classes.center_search_input}>
              <TextField
                id="outlined-start-adornment"
                size="small"
                placeholder="Enter location or childcare name..."
                fullWidth={true}
                InputProps={{
                  className: classes.inputField,
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={SearchIcon} alt="" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </div>
          </Grid>
          <div className={classes.width100}>
            <div className={classes.nav}>
              <div>
                <Link to="/find-nearby-child-care">
                  <Typography className={classes.nav_item}>All</Typography>
                </Link>
              </div>
              <div>
                <Link to="/find-nearby-child-care-search-result">
                  <Typography className={classes.nav_item}>
                    Search Result
                  </Typography>
                </Link>
              </div>
              <div>
                <Link to="/invite-your-friends">
                  <Typography
                    className={`${classes.nav_item} ${classes.active}`}
                  >
                    Invite Your School
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <div className={`${classes.wrapper}`}>
          <div className={classes.center_margin}>
            <Typography variant="h4">
              Invite your school or child care
            </Typography>
            <Grid container spacing={3} className={classes.margin_top}>
              <Grid item xs={12} lg={6}>
                <TextField
                  id="centerName"
                  label="Childcare center’s name*"
                  variant="outlined"
                  fullWidth
                  size="small"
                  className={classes.input_font_color2}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  id="directorName"
                  label="Center director’s name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  className={classes.input_font_color2}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  id="email"
                  label="Centre’s email*"
                  variant="outlined"
                  fullWidth
                  size="small"
                  className={classes.input_font_color2}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  id="number"
                  label="Centre’s phone number*"
                  variant="outlined"
                  fullWidth
                  size="small"
                  className={classes.input_font_color2}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  size="small"
                  fullWidth
                >
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
              <Grid item xs={12} lg={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  size="small"
                  fullWidth
                >
                  <InputLabel
                    className={classes.input_font_color}
                    id="labelIdCountry"
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="labelIdCountry"
                    id="Country"
                    value={age}
                    onChange={handleChange}
                    label="Country"
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
              <Grid item xs={12} lg={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  size="small"
                  fullWidth
                >
                  <InputLabel
                    className={classes.input_font_color}
                    id="labelStreetAddress"
                  >
                    Street address
                  </InputLabel>
                  <Select
                    labelId="labelStreetAddress"
                    id="Streetaddress"
                    value={age}
                    onChange={handleChange}
                    label="Street address"
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
              <Grid item xs={12} lg={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  size="small"
                  fullWidth
                >
                  <InputLabel
                    className={classes.input_font_color}
                    id="labelIdCity"
                  >
                    City
                  </InputLabel>
                  <Select
                    labelId="labelIdCity"
                    id="City"
                    value={age}
                    onChange={handleChange}
                    label="City"
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
              <Grid item xs={12} lg={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  size="small"
                  fullWidth
                >
                  <InputLabel
                    className={classes.input_font_color}
                    id="labelStateOrRegion"
                  >
                    State or region
                  </InputLabel>
                  <Select
                    labelId="labelStateOrRegion"
                    id="StateOrRegion"
                    value={age}
                    onChange={handleChange}
                    label="State or region"
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
              <Grid item xs={12} lg={6}>
                <TextField
                  id="zip"
                  label="Zip"
                  variant="outlined"
                  fullWidth
                  size="small"
                  className={classes.input_font_color2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input_font_color2}
                  id="Childcarewebsite"
                  label="Child care website"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} className={classes.margin_top}>
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button2} button`}
                >
                  Send Invitation
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg" className={classes.margin_top}>
        <Grid container className={`${classes.wrapper}`}>
          <Grid item lg={12} sm={12} className={`${classes.background_style}`}>
            <Typography variant="h4">
              KinderCubby for easy childcare management
            </Typography>
            <Typography variant="h6" className={classes.h6}>
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
            </Typography>
            <div className={classes.center}>
              <Link to="/try-it-free">
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.banner_button3} button`}
                >
                  Try it Free
                </Button>{" "}
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outlined"
                  color="primary"
                  className={`${classes.banner_button} ${classes.margin_left_20} button`}
                >
                  Explore Pricing
                </Button>{" "}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InviteYourFriends;
