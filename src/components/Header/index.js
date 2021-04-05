import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import transitions from "@material-ui/core/styles/transitions";

export default function Header(props) {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

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
          <Icona onClick={handleToggle}>Click on Me!</Icona>
        </Grid>
      </Grid>
      <MenuWrappers visibility={isToggle}>hello world</MenuWrappers>
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
  z-index: 1;
  width: 100%;
  background: green;
  animation: 0.5s all ease-in-out;
  display: ${(props) => (props.visibility ? "block" : "none")};

  /*   display: ${(props) => (props.isToggle ? `block` : "none")};
   color: ${(props) => (props.active ? "white" : "palevioletred")};

 */
`;
