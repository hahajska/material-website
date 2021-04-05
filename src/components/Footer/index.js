import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";

const rows = [
  {
    id: 1,
    title: "Fast Links",
    content: "i dont know yet",
    direction: "marginAutoContainer",
  },
  {
    id: 2,
    title: "Fast Links",
    content: "i dont know yet",
    direction: "marginAutoContainer2",
  },
  {
    id: 3,
    title: "Fast Links",
    content: "i dont know yet",
  },
  {
    id: 4,
    title: "Fast Links",
    content: "i dont know yet",
  },
];

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
  marginAutoContainer2: {
    display: "none",
    backgroundColor: "yellow",
  },
  color: {
    fontSize: "50px",
  },
  row: {
    height: "50vh",
    background: "red",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container>
      {/*       <Grid item xs={12} md={3} lg={3} className={classes.row}>
        a
      </Grid>
      <Grid item xs={12} md={3} lg={3} className={classes.row}>
        a
      </Grid>
      <Grid item xs={12} md={3} lg={3} className={classes.row}>
        a
      </Grid>
      <Grid item xs={12} md={3} lg={3} className={classes.row}>
        a
      </Grid> */}
      {rows.map((item) => {
        return (
          <Grid
            item
            xs={6}
            xs={12}
            md={3}
            className={`${classes[item.direction]} + ${classes.color} +${
              classes.row
            }`}
            title={item.title}
            key={item.id}
          >
            <Item />
          </Grid>
        );
      })}
    </Grid>
  );
}
