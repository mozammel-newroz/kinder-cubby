import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
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
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../assets/images/logo.png";

import "../assets/css/menuBar.css";
import Menubar from "./Menubar";
import { Box } from "@material-ui/core";
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
  appBar2: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#fff",
    height: 60,
    marginTop: 0,
    padding: 0,
    color: "#999",
    boxShadow: "1px 1px 1px 0px #eee",
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
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 9,
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
function NabBarOne() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, set_anchorEl] = useState(null);
  const [open, set_open] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleClick = (event) => {
    set_anchorEl(event.currentTarget);
    set_open(true);
  };

  const handleRequestClose = () => {
    set_open(false);
  };

  const changePath = () => {
    set_open(false);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        {/* products  */}
        <ListItem button>
          <ListItemText>Product</ListItemText>
        </ListItem>
        <Link to="/for-owners-and-directors" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              For Owners & Directors
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/for-teachers" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>For Teachers</ListItemText>
          </ListItem>
        </Link>
        <Link to="/for-parents" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>For Parents</ListItemText>
          </ListItem>
        </Link>

        {/* features  */}

        <ListItem button>
          <ListItemText>Features</ListItemText>
        </ListItem>
        <Link to="/feature-overviews" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              Feature Overviews
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/attendance-and-check-ins" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              Attendance & check-ins
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/activity-tracking" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              Activity Tracking
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/center-management" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              Center Management
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/billing" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>Billing</ListItemText>
          </ListItem>
        </Link>
        <Link to="/managing-learning-path" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              Managing Learning Path
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/parents-engagements" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              Parents Engagements
            </ListItemText>
          </ListItem>
        </Link>

        {/* pricing  */}
        <Link to="/pricing">
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText>Pricing</ListItemText>
          </ListItem>
        </Link>

        {/* resources  */}
        <ListItem button>
          <ListItemText>Resources</ListItemText>
        </ListItem>
        <Link to="/documentation" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>Documentation</ListItemText>
          </ListItem>
        </Link>
        <Link to="/e-books" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>eBooks</ListItemText>
          </ListItem>
        </Link>
        <Link to="/case-studies" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>Case Studies</ListItemText>
          </ListItem>
        </Link>
        <Link to="/blog" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>Blog</ListItemText>
          </ListItem>
        </Link>
        <Link to="/find-nearby-child-care" onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText className={classes.sub}>
              Find Nearby Childcare
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      setScroll(scrollCheck);
    });
  }, []);

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar className={scroll < 100 ? classes.appBar : classes.appBar2}>
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
                  <Link to="/login">Login</Link>
                </Button>
                <Link to="/try-it-free">
                  <Button
                    variant="contained"
                    color="primary"
                    className="button"
                  >
                    Try It Free
                  </Button>
                </Link>
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
    </>
  );
}

export default NabBarOne;
