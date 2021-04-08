import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import MyImage from "../../images/img.jpg";

export default function MainPage() {
  const useStyles = makeStyles((theme) => ({
    theme: {
      padding: "2rem",
      background: "linear-gradient(45deg, #3505d3 30%, #1b026d 90%)",
    },

    imgItem: {
      [theme.breakpoints.down("md")]: {
        order: 2,
        height: "max-content",
        padding: "5rem 2rem",
      },

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "85vh",
    },
    textItem: {
      height: "max-content",
      padding: "2rem 1rem 5rem 1rem",
      justifyContent: "center",
      flexDirection: "center",
      alignItems: "center",
      display: "flex",
      height: "95vh",
      [theme.breakpoints.down("md")]: {
        height: "max-content",
        padding: "5rem 2rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.theme}>
      <Grid item xs={12} md={6} lg={7} xl={7} className={classes.imgItem}>
        <Obrazek src={MyImage} />
      </Grid>
      <Grid item xs={12} md={6} lg={5} xl={5} className={classes.textItem}>
        <Container>
          <Nadpis>LET IT GO</Nadpis>
          <Podnadpis>We are unique.</Podnadpis>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, labore. Dolor maxime ullam repudiandae magnam suscipit
            omnis rem quisquam fugit!
          </Text>
          <Button>EXPLORE</Button>
        </Container>
      </Grid>
    </Grid>
  );
}

const Obrazek = styled.img`
  width: 40vw;
  box-shadow: 2px 15px 46px 1px rgba(255, 255, 255, 0.51);
  -webkit-box-shadow: 2px 15px 46px 1px rgba(255, 255, 255, 0.51);
  -moz-box-shadow: 2px 15px 46px 1px rgba(255, 255, 255, 0.51);
  object-fit: contain;
  @media (max-width: 700px) {
    width: 20rem;
  }
`;

const Container = styled.div`
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Nadpis = styled.h1`
  font-size: 4rem;
  letter-spacing: -3px;
  word-spacing: -2px;
  color: #f1eeff;
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`;
const Podnadpis = styled.h6`
  font-size: 1.5rem;
  letter-spacing: -1px;
  word-spacing: -1px;
  margin-top: -0.75rem;
  color: #7e63d8;
`;
const Text = styled.p`
  font-size: 1.25rem;
  letter-spacing: -1px;
  padding-top: 1rem;
  width: 75%;
  color: #c0b5e4;
  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
  }
`;
const Button = styled.button`
  padding: 0.5rem 2rem;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    43deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(214, 201, 255, 1) 46%,
    rgba(160, 130, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    43deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(214, 201, 255, 1) 46%,
    rgba(160, 130, 255, 1) 100%
  );
  background: linear-gradient(
    43deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(214, 201, 255, 1) 46%,
    rgba(160, 130, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#a082ff",GradientType=1);
  margin-top: 2rem;
  outline-style: none;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: bold;
  color: #1b026d;
`;
