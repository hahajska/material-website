import React from "react";
import styled from "styled-components";

export default function ShowCase({ title, imageURL }) {
  return (
    <Wrapper>
      <TextWrapper>
        <Nadpisek>{title}</Nadpisek>
      </TextWrapper>
      <Obrazek />
    </Wrapper>
  );
}

const Nadpisek = styled.h1`
  color: red;
`;

const Wrapper = styled.div`
  height: max-content;
  padding: 3rem 2rem;
  background: lightblue;
`;

const TextWrapper = styled.div`
  height: max-content;
  padding: 2rem;
  background: lightgoldenrodyellow;
`;
