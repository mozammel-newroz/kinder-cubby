import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Pricing from "../assets/images/Pricing.png";
import SuccessfulGreenIcon from "../assets/images/SuccessfulGreenIcon.png";

const useStyles = makeStyles((theme) => ({
  wrapper1: {
    padding: "60px 30px",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  wrapper2: {
    padding: "60px 70px",
    background: "#E3EBFC",
    borderRadius: 15,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  wrapper: {
    padding: "0px 30px",
  },
  table: {
    width: "99.99%",
  },
  table_cell: {
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: 400,
  },
  table_cell_big: {
    border: "1px solid #FBC9BA",
    background: "#FFF8F5",
    fontSize: "1rem",
    width: 400,
  },
  no_border: {
    border: "0px solid #ddd",
    fontSize: "1rem",
    padding: 0,
    margin: 0,
  },
  table_head: {
    fontSize: "1.1rem",
    fontWeight: 600,
    background: "#E3EBFC",
  },
  table_head2: {
    fontSize: "1.1rem",
    fontWeight: 600,
  },
  box: {
    boxShadow: "0px 0px 1px 1px #eee",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  box_big: {
    boxShadow: "1px 0px 5px 3px #ddd",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  box_title: {
    fontSize: "1.3rem",
    fontWeight: 600,
    borderBottom: "2px solid #ddd",
    padding: 7,
  },
  box_title_big: {
    fontSize: "1.3rem",
    fontWeight: 600,
    borderBottom: "2px solid #FBC9BA",
    padding: 7,
  },
  box_price: {
    fontSize: "2.5rem",
    fontWeight: 600,
    padding: 25,
  },
  box_button: {
    padding: 25,
  },
  h6: {
    marginTop: 15,
    marginBottom: 0,
  },
  question_title: {
    fontSize: "1.6rem",
    fontWeight: 600,
    marginBottom: 50,
    textAlign: "center",
  },
  question_title_bottom: {
    fontSize: "1.6rem",
    fontWeight: 600,
    margin: "50px 0px 20px 0px",
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
  question: {
    fontSize: "1.1rem",
    fontWeight: 600,
  },
  answer: {
    fontSize: "1.1rem",
  },
  accordion: {
    background: "transparent",
    boxShadow: "0px 0px 0px  #000",
    borderBottom: "1px solid #C6CFDC",
  },
  link: {
    textDecoration: "underline",
    color: "#0B4295",
  },
  bottom_button: {
    textAlign: "center",
    marginTop: 30,
  },
}));

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper1}>
          <Grid item lg={12}>
            <Typography variant="h4">Simple & Transparent Pricing</Typography>
            <Typography variant="h6" className={classes.h6}>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet
              <br /> consectetur sapien. Etiam dui ipsum, viverra vel turpis ut,
              dignissim elementum
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper}>
          <Grid item lg={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.no_border}>
                      <img src={Pricing} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.no_border}>
                      <div className={classes.box}>
                        <div className={classes.box_title}>Free</div>
                        <div className={classes.box_price}>$0</div>
                        <div className={classes.box_text}>
                          <Typography variant="body2">
                            Always free for 10 students
                          </Typography>
                          <Typography variant="body2">
                            1 Staff member
                          </Typography>
                        </div>
                        <div className={classes.box_button}>
                          <Button
                            variant="outlined"
                            color="primary"
                            className="button"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center" className={classes.no_border}>
                      <div className={classes.box_big}>
                        <div className={classes.box_title_big}>Standard</div>
                        <div className={classes.box_price}>$50</div>
                        <div className={classes.box_text}>
                          <Typography variant="body2">
                            Less than 60 students
                          </Typography>
                          <Typography variant="body2">
                            8 Staff members
                          </Typography>
                        </div>
                        <div className={classes.box_button}>
                          <Button
                            variant="contained"
                            color="primary"
                            className="button"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center" className={classes.no_border}>
                      <div className={classes.box}>
                        <div className={classes.box_title}>premium</div>
                        <div className={classes.box_price}>$120</div>
                        <div className={classes.box_text}>
                          <Typography variant="body2">
                            Unlimited Students
                          </Typography>
                          <Typography variant="body2">
                            Unlimited Staff
                          </Typography>
                        </div>
                        <div className={classes.box_button}>
                          <Button
                            variant="outlined"
                            color="primary"
                            className="button"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan="5"
                      className={classes.table_head}
                    >
                      Features
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Number of Students
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      10
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      60
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      Unlimited
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Number of Staffs
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      1
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      8
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      Unlimited
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Contactless check-in
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Contactless check-in
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Contactless check-in
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan="5"
                      className={classes.table_head2}
                    >
                      Attendance & check-in
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Contactless check-in
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Automatic attendance report
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      -
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Safe pickup feature
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Digital report
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      -
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Hourly Payment
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      -
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan="5"
                      className={classes.table_head2}
                    >
                      Activity tracking
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Activity feed
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>Photos</TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>Videos</TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      -
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Incident report
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Activity report
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      -
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan="5"
                      className={classes.table_head2}
                    >
                      Center Management
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      System access control
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Contact less staff check-in
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Staff management
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      -
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Scheduling
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Health checks
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      -
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      -
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Enrollment management
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Daily reports
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.table_cell}>
                      Performance assessment
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_cell_big}
                    >
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell}>
                      <img src={SuccessfulGreenIcon} alt="" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.wrapper1}
          style={{ justifyContent: "center" }}
        >
          <Grid item lg={12} className={classes.center}>
            <Link to="/feature-overviews">
              <Button variant="outlined" color="primary" className="button">
                Learn More About Features
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper2}>
          <Grid item lg={12}>
            <Typography className={classes.question_title}>
              Frequently asked questions
            </Typography>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.question}>
                  Will I be charged after the trial ends?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Suspendisse maximus dolor quis consequat volutpat.
                  Donec vehicula elit eu erat pulvinar, vel congue ex egestas .
                  Praesent egestas purus dolor, a porta arcu pharetra quis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.question}>
                  Why should I choose KinderCubby over others?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Suspendisse maximus dolor quis consequat volutpat.
                  Donec vehicula elit eu erat pulvinar, vel congue ex egestas .
                  Praesent egestas purus dolor, a porta arcu pharetra quis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.question}>
                  Will I be charged after the trial ends?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Suspendisse maximus dolor quis consequat volutpat.
                  Donec vehicula elit eu erat pulvinar, vel congue ex egestas .
                  Praesent egestas purus dolor, a porta arcu pharetra quis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.question}>
                  Will I be charged after the trial ends?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Suspendisse maximus dolor quis consequat volutpat.
                  Donec vehicula elit eu erat pulvinar, vel congue ex egestas .
                  Praesent egestas purus dolor, a porta arcu pharetra quis.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.question}>
                  Will I be charged after the trial ends?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Suspendisse maximus dolor quis consequat volutpat.
                  Donec vehicula elit eu erat pulvinar, vel congue ex egestas .
                  Praesent egestas purus dolor, a porta arcu pharetra quis.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Typography className={classes.question_title_bottom}>
              Still have more questions?
            </Typography>
            <Typography className={classes.center}>
              Contact our{" "}
              <Link to="/#" className={classes.link}>
                support
              </Link>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper1}>
          <Grid item lg={12}>
            <Typography variant="h4">Ready to take the next step</Typography>
            <Typography variant="h6" className={classes.h6}>
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
            </Typography>
            <div className={classes.bottom_button}>
              <Link to="/try-it-free">
                <Button variant="contained" color="primary" className="button">
                  Try It Free
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
