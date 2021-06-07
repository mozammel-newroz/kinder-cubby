import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper1}>
          <Grid item lg={12}>
            <Typography variant="h4">Simple & Transparent Pricing</Typography>
            <Typography variant="h6" className={classes.h6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              blanditiis suscipit facere adipisci vel culpa reiciendis,
              voluptatum provident dolore numquam.
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
                        <div className={classes.box_title_big}>Free</div>
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
            <Button variant="outlined" color="primary" className="button">
              Learn More About Features
            </Button>
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
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.question}>
                  Accordion 2
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              blanditiis suscipit facere adipisci vel culpa reiciendis,
              voluptatum provident dolore numquam.
            </Typography>
            <div className={classes.bottom_button}>
              <Button variant="contained" color="primary" className="button">
                Try It Free
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
