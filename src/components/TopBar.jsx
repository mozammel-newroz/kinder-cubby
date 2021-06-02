import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../assets/images/logo.png";

import "../assets/css/menuBar.css";
import Menubar from "./Menubar";
import { Box } from "@material-ui/core";
import Footer from "./Footer";
import AppRouter from "./AppRouter";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#fff",
    height: 60,
    marginTop: 0,
    padding: 0,
    color: "#999",
    boxShadow: "0 0 0 0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "red",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  menu_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    marginLeft: 60,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  closeMenuButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 9
  },
  action: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  action_button: {
    marginRight: 20,
  },
  sub: {
    marginLeft: 20,
    "& a": {
      fontSize: 14,
    },
  },
}));
function TopBar() {
  const [anchorEl, set_anchorEl] = useState(null);
  const [open, set_open] = useState(false);

  const handleClick = (event) => {
    set_anchorEl(event.currentTarget);
    set_open(true);
  };

  const handleRequestClose = () => {
    set_open(false);
  };

  const dummyCategories = [
    "Hokusai",
    "Hiroshige",
    "Utamaro",
    "Kuniyoshi",
    "Yoshitoshi",
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
      <ListItem button>
          <ListItemText>
            <Link to="/">Home</Link>
          </ListItemText>
        </ListItem>
        {/* products  */}
        <ListItem button>
          <ListItemText>Product</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/for-owners-and-directors">For Owners & Directors</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/for-teachers">For Teachers</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/for-parents">For Parents</Link>
          </ListItemText>
        </ListItem>

        {/* features  */}

        <ListItem button>
          <ListItemText>Features</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/feature-overviews">Feature Overviews</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/attendance-and-check-ins">Attendance & check-ins</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/activity-tracking">Activity Tracking</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/center-management">Center Management</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/billing">Billing</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/managing-learning-path">Managing Learning Path</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/parents-engagements">Parents Engagements</Link>
          </ListItemText>
        </ListItem>

        {/* pricing  */}
        <ListItem button>
          <ListItemText>
            <Link to="/pricing">Pricing</Link>
          </ListItemText>
        </ListItem>

        {/* resources  */}
        <ListItem button>
          <ListItemText>Resources</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/documentation">Documentation</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/e-books">eBooks</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/case-studies">Case Studies</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/blog">Blog</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.sub}>
            <Link to="/find-nearby-child-care">Find Nearby Childcare</Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
  return (
    <Router>
      <div className={classes.root}>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Container maxWidth="lg">
              <div className={classes.menu_wrapper}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Link to="/">
                  <img src={logo} alt="kinder-cubby" />
                </Link>
                <div className={classes.menu}>
                  <Menubar />
                </div>
                <Box className={classes.action}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={`${classes.action_button} button`}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className="button"
                  >
                    Try It Free
                  </Button>
                </Box>
              </div>
            </Container>
          </Toolbar>
        </AppBar>
        <nav style={{ display: "none" }}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
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
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default TopBar;
