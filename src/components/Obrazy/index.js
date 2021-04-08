import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Obrazek1 from "../../images/img.jpg";
import Obrazek2 from "../../images/img2.jpg";
import Obrazek3 from "../../images/img3.jpg";

const showCase = [
  {
    id: 1,
    title: "ART",
    subtitle: "Free For All",
    text:
      "It is a long established fact that a reader will be distracted by the readable content",
    src: Obrazek1,
    gridImage: "gridImage",
  },

  {
    id: 2,
    title: "NFT",
    subtitle: "Crypto Users",
    text:
      "It is a long established fact that a reader will be distracted by the readable content",
    src: Obrazek2,
    direction: "orderys",
    directionMD: "orderysMD",
  },

  {
    id: 3,
    title: "QAA",
    subtitle: "Supporters",
    text:
      "It is a long established fact that a reader will be distracted by the readable content",
    src: Obrazek3,
    gridImage: "gridImage",
  },
];

const useStyles = makeStyles((theme) => ({
  GridContainer: {
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "1 1 auto",
    padding: "2rem 0rem 10rem 0rem",
  },
  orderys: {
    [theme.breakpoints.up("md")]: {
      order: 1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      background: "lightblue",
    },
  },
  orderysMD: {
    [theme.breakpoints.down("xl")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      background: "red",
    },
    display: "flex",
    justifyContent: "center",
  },
  gridImage: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    display: "flex",
    justifyContent: "center",
  },
}));
console.log(showCase[[1].direction], "direkce");

export default function Obrazy() {
  const classes = useStyles();
  return (
    <Grid container>
      {showCase.map((item) => (
        <Grid item md={12} className={classes.GridContainer}>
          <Leva className={`${classes[item.direction]} `}>
            <Nadpis>{item.title}</Nadpis>
            <Text>{item.text}</Text>
          </Leva>
          <Prava
            className={`${classes[item.gridImage]} ${
              classes[item.directionMD]
            }`}
          >
            <Portret src={item.src}></Portret>
          </Prava>
        </Grid>
      ))}
    </Grid>
  );
}

const Leva = styled.div`
  width: 700px;
  text-align: justify;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 1557px) {
    align-items: center;
    width: 350px;
  }
`;

const Prava = styled.div`
  width: 700px;
  height: max-content;
  padding: 2rem;
  @media (max-width: 1557px) {
    justify-content: center;
    width: 350px;
  }
`;

const Portret = styled.img`
  height: 15rem;
  box-shadow: 2px 15px 46px 1px rgba(71, 26, 194, 0.51);
  -webkit-box-shadow: 2px 15px 46px 1px rgba(71, 26, 194, 0.51);
  -moz-box-shadow: 2px 15px 46px 1px rgba(71, 26, 194, 0.51);
`;

const Nadpis = styled.h1`
  font-size: 5rem;
  color: #351797;
`;

const Text = styled.p`
  font-size: 2rem;
  text-align: right;
  width: 20vw;
  padding-top: 1rem;
  word-spacing: -2px;
  letter-spacing: -1px;
  line-height: 1.75rem;
  color: #9075e9;

  @media (max-width: 1557px) {
    width: 90%;
    text-align: center;
  }
`;
/* {
  showCase.map((item) => (
    <Grid
      item
      xs={12}
      md={6}
      lg={6}
      xl={6}
      className={`${classes[item.zarovnani]}  ${classes.gridShowCase}`}
    >
      <ShowCase title={item.title} imageURL={item.src} />
    </Grid>
  ));
} */
