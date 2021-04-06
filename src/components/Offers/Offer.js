import React from "react";
import styled from "styled-components";

export default function Offer({ title, text }) {
  return (
    <>
      <Nadpis>{title}</Nadpis>
      <Text>{text}</Text>
    </>
  );
}

const Nadpis = styled.h1`
  font-size: 3rem;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
  text-align-last: center;
`;
