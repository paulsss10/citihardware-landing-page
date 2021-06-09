import React from "react";
import "../../Styles/Components/shopAndGo.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

export const Shop_and_Go = () => {
  const classes = useStyles();

  return (
    <section className="shop-and-go_container">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} id="shop-and-go_ImgLeft"></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h2>
              Shop at the comfort of your home with{" "}
              <span style={{ color: "rgb(199, 18, 16)", fontSize: "1.2em" }}>
                Shop <span style={{ color: "#66788a" }}>&</span> Go
              </span>
            </h2>

            <p className="shop-and-go_par">
              Get your hardware and homebuilding needs without leaving the
              comfort of your home by simply calling your nearest CitiHardware
              branch. Place your order then have it collected or delivered to
              your home. It is easy, safe and contactless.
            </p>

            <Button size="large" className={classes.margin}>
              Large
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //   color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
