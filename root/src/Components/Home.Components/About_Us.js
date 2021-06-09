import React from "react";
import "../../Styles/Components/AboutUs.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from '@material-ui/core/CardMedia';

const About_Us = () => {
  const classes = useStyles();

  return (
    <section className="about-us_container">
      <div className="about-us_title">
        <h2 className="about-us_mainTitle">
          About <span className="red_text">Citi Hardware</span>
        </h2>

        <small className="about-us_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </small>
      </div>

      <div id="about-us_content" className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <p className="about-us_par">
                From its beginnings as a traditional hardware store in 1976,
                CitiHardware is now one of the leading and fastest growing
                construction retail stores with more than 75 branches in the
                Philippines.
              </p>
              <p className="about-us_par">
                At present, CitiHardware continues to lead in offering its
                customers great value on world-class products sourced from local
                and international suppliers. Excellent customer service is a top
                priority in driving customer loyalty and satisfaction.
              </p>
              <p className="about-us_par">
                CitiHardware is committed to provide its customers “Great Value
                Everyday” on products, made from the finest quality materials,
                at a price you can afford for building projects and home
                improvement needs.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} id="about-us_ImgRight"></Paper>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
}));

export default About_Us;
