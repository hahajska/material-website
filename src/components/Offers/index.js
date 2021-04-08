import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Offer from "./Offer";
import Obrazek1 from "../../images/img.jpg";
import Obrazek2 from "../../images/img2.jpg";
import Obrazek3 from "../../images/img3.jpg";

//images

//items text
const offers = [
  {
    id: 1,
    title: "FREE",
    cena: "0.0$",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    id: 2,
    title: "PRO",
    cena: "10$",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    id: 3,
    title: "VIP",
    cena: "25$",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
];

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2rem",
    position: "relative",
  },
  gridNadpis: {
    textAlign: "center",
    height: "max-content",
    padding: "8rem 2rem",
  },
  containerBg: {
    background: "#fff",
    height: "max-content",
    padding: "5rem 3rem 10rem 3rem",
  },
  gridShowCase: {
    height: "max-content",
    padding: "5rem 1rem ",
  },
  gridImage: {
    justifyContent: "center",
    height: "max-content",
    padding: "5rem 1rem",
    display: "flex",
    alignItems: "center",
  },
  /*   gridTextShowCase: {
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
    background: "orange",
    direction: "column",
  }, */
  /*   gridReverse: {
    direction: "reverse-column",
    fontSize: "5px",
  }, */
}));

export default function Offers() {
  const classes = useStyles();
  return (
    <Grid container className={classes.containerBg}>
      <Grid item xs={12} className={classes.gridNadpis}>
        <Nadpis>USE IT & BE DIFFERENT</Nadpis>
      </Grid>
      {offers.map((item) => (
        <Grid item xs={12} md={12} lg={4} xl={4} className={classes.gridItem}>
          <Offer title={item.title} text={item.text} cena={item.cena} />
        </Grid>
      ))}
    </Grid>
  );
}

export const Nadpis = styled.h1`
  font-size: 7rem;
  letter-spacing: -3px;
  word-spacing: 2px;
  color: #532ada;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
`;
