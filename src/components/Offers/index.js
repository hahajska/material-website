import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Offer from "./Offer";

//items text
const offers = [
  {
    id: 1,
    title: "Sparing",
    text: "Ahoj, já jsem Tomáš a nabízím Vám sparring v hodnotě 1000,-",
  },
  {
    id: 2,
    title: "Sparing",
    text: "Ahoj, já jsem Tomáš a nabízím Vám sparring v hodnotě 1000,-",
  },
  {
    id: 3,
    title: "Sparing",
    text: "Ahoj, já jsem Tomáš a nabízím Vám sparring v hodnotě 1000,-",
  },
  {
    id: 4,
    title: "Sparing",
    text: "Ahoj, já jsem Tomáš a nabízím Vám sparring v hodnotě 1000,-",
  },
];

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2rem",
  },
}));

export default function Offers() {
  const classes = useStyles();
  return (
    <Grid container>
      {offers.map((item) => (
        <Grid item xs={12} md={6} lg={3} xl={3} className={classes.gridItem}>
          <Offer title={item.title} text={item.text} />
        </Grid>
      ))}
    </Grid>
  );
}
