import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "76vh",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    </div>
  );
};
