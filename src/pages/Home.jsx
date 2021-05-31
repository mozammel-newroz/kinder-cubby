import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import automated from "../assets/images/automated.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0px 30px",
  },
  banner: {
    background: "#E3EBFC",
    borderRadius: 10,
    padding: 50,
    display: "flex",
    alignItems: "center",
  },
  banner_image: {
    flex: 1,
    padding: 30,
  },
  banner_content: {
    flex: 1,
    padding: 30,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper}>
          <Grid item lg={12}>
            <div className={classes.banner}>
              <div className={classes.banner_image}>
                <img src={automated} alt="" />
              </div>
              <div className={classes.banner_content}>
                <Typography
                  variant="h3"
                  style={{ fontWeight: 600, marginBottom: 80 }}
                >
                  Automated
                </Typography>
                <Typography style={{ fontSize: 24, marginBottom: 30 }}>
                  Sed a magna semper, porta purus eu, ullamcorper ligula. Nam
                  sit amet consectetur
                </Typography>
                <div>
                  <Button variant="contained" color="primary">
                    Try it Free
                  </Button>
                </div>
                <div></div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            Home 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam in ea quae? Unde modi temporibus magnam, quibusdam, cum
            labore provident beatae totam ipsa dolor facilis magni, odit
            veritatis cupiditate id!
          </Grid>
          <Grid item lg={6}>
            2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam in ea quae? Unde modi temporibus magnam, quibusdam, cum
            labore provident beatae totam ipsa dolor facilis magni, odit
            veritatis cupiditate id!
          </Grid>
          <Grid item lg={6}>
            3 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam in ea quae? Unde modi temporibus magnam, quibusdam, cum
            labore provident beatae totam ipsa dolor facilis magni, odit
            veritatis cupiditate id!
          </Grid>
          <Grid item lg={6}>
            4 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam in ea quae? Unde modi temporibus magnam, quibusdam, cum
            labore provident beatae totam ipsa dolor facilis magni, odit
            veritatis cupiditate id!
          </Grid>
          <Grid item lg={6}>
            5 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam in ea quae? Unde modi temporibus magnam, quibusdam, cum
            labore provident beatae totam ipsa dolor facilis magni, odit
            veritatis cupiditate id!
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
