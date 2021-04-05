import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export default function Item(props) {
  return (
    <>
      <h1>{props.title}</h1>

      {props.content.length > 10 ? (
        <p>{props.content}</p>
      ) : (
        <ul>
          {props.content.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
