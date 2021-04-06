import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { CgFormatRight, CgSmileNone } from "react-icons/cg";

export default function Header(props) {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const useStyles = makeStyles((theme) => ({
    Header: {
      background: "#fff",
      height: "7.5vh",
      zIndex: 100,
      position: "relative",
    },
    Icona: {
      display: "block",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: ".7rem",

      [theme.breakpoints.up("md")]: {
        display: "none",
      },
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
        <Grid item xl={12}>
          <ul>
            {navbarLinks.map((item) => (
              <Links>{item.item}</Links>
            ))}
          </ul>
          <CgFormatRight
            size={32}
            onClick={handleToggle}
            className={classes.Icona}
          />
        </Grid>
      </Grid>
      <MenuWrappers visibility={isToggle}>
        <UlList>
          {navbarLinks.map((item) => (
            <LinksDropdown>{item.item}</LinksDropdown>
          ))}
        </UlList>
      </MenuWrappers>
    </>
  );
}

const Links = styled.li`
  display: inline-block;
  padding: 0rem 1.25rem;
  cursor: pointer;
  font-size: 0.85rem;
  color: #1b026d;
  font-weight: bold;
  @media (max-width: 960px) {
    display: none;
  }
`;

const LinksDropdown = styled.li`
  padding: 1rem 0rem;
  cursor: pointer;
  list-style-type: none;
`;

const UlList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MenuWrappers = styled.div`
  height: max-content;
  padding: 2rem;
  position: relative;
  z-index: 1;
  width: 100%;
  background: #fff;
  border-top: 0.5px solid #7a7a7a;
  animation: 0.5s all ease-in-out;

  display: ${(props) => (props.visibility ? "block" : "none")};

  /*   display: ${(props) => (props.isToggle ? `block` : "none")};
   color: ${(props) => (props.active ? "white" : "palevioletred")};

 */
`;
