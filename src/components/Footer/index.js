import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";

const rows = [
  {
    id: 1,
    title: "Our Design Company",
    content:
      "Sno purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely",

    direction: "marginAutoContainer",
  },

  {
    id: 2,
    title: "Support",
    content: ["Home", "About", "Contacts", "Support"],

    direction: "marginAutoContainer",
  },
  {
    id: 3,
    title: "Our Design Company",
    content:
      "Sno purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely",

    direction: "marginAutoContainer",
  },
];

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    flexDirection: "column",
    textAlign: "justify",
    padding: "1.75rem",
    textAlignLast: "center",
    height: "40vh",
    [theme.breakpoints.down("md")]: {
      height: "max-content",
      padding: "5rem 0.5rem",
    },
  },
  marginAutoContainer2: {
    backgroundColor: "gold",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "justify",
    padding: "1.75rem",
    textAlignLast: "center",
  },
  bg: {
    background: "#1b026d",
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
            md={4}
            className={`${classes[item.direction]} ${classes.bg}`}
            title={item.title}
            key={item.id}
          >
            <Item title={item.title} content={item.content} />
          </Grid>
        );
      })}
    </Grid>
  );
}
