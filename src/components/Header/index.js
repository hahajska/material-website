import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
  const useStyles = makeStyles((theme) => ({
    Header: {
      backgroundColor: "red",
      height: "5vh",
      zIndex: 100,
      position: "relative",
    },
    jenomBarva: {
      backgroundColor: "yellow",
    },
  }));

  const classes = useStyles();

  const navbarLinks = [
    { id: 1, item: "Home" },
    { id: 2, item: "About" },
    { id: 3, item: "Contacts" },
  ];

  const value = "-100%";

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.Header}
      >
        <Grid item xl={12} className={classes.jenomBarva}>
          <ul>
            {navbarLinks.map((item) => (
              <Links>{item.item}</Links>
            ))}
          </ul>
          <Icona>Click on Me!</Icona>
        </Grid>
      </Grid>
      <MenuWrappers>hello world</MenuWrappers>
    </>
  );
}

const Links = styled.li`
  display: inline-block;
  padding: 0rem 0.75rem;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Icona = styled.p`
  cursor: pointer;
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
const MenuWrappers = styled.div`
  height: 10vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: green;
  transform: translateY(50%);
  animation: 0.5s all ease-in-out;
`;
