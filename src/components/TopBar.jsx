import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/css/menuBar.css";
import Footer from "./Footer";
import AppRouter from "./AppRouter";
import NavBarMain from "./NavBarMain";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));
function TopBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <NavBarMain />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <AppRouter />
          <Footer />
        </div>
      </div>
    </Router>
  );
}
TopBar.propTypes = {
  container: PropTypes.object,
};
export default TopBar;
