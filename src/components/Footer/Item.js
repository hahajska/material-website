import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export default function Item(props) {
  return (
    <>
      <Nadpis>{props.title}</Nadpis>

      {props.content.length > 10 ? (
        <Text>{props.content}</Text>
      ) : (
        <NadList>
          {props.content.map((item) => (
            <List>{item}</List>
          ))}
        </NadList>
      )}
    </>
  );
}

const Nadpis = styled.h1`
  font-size: 2.5rem;
  color: #9075e9;
  padding: 2rem 0rem;
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.25rem;
  padding: 0rem 2rem 1.5rem 2rem;
  line-height: 1.5rem;
  color: #9075e9;
`;

const List = styled.li`
  font-size: 1.15rem;
  color: #9075e9;
  list-style-type: none;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const NadList = styled.ul`
  list-style-type: none;
`;
