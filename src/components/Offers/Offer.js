import React from "react";
import styled from "styled-components";

export default function Offer({ title, text, cena }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Cena>{cena}</Cena>
      <Text>{text}</Text>
      <Button>ORDER NOW</Button>
    </Container>
  );
}

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: justify;
  color: #a18cfd;
  letter-spacing: -2px;
  padding-bottom: 1rem;
`;

const Cena = styled.p`
  text-align: center;
  font-size: 5rem;
  color: #7654e9;
  font-weight: bolder;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
  padding: 2rem 1rem 0rem 1rem;
  text-align-last: center;
  line-height: 1.35rem;
  color: #b7a7ff;
`;

const Container = styled.div`
  background: linear-gradient(to bottom right, #532ada, #5f38e0);
  box-shadow: 3px 15px 75px #532ada;
  display: flex;
  border-radius: 25px;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1.25rem 2rem 1.25rem;
  width: 400px;
  position: relative;
  @media (max-width: 700px) {
    width: 300px;
  }
`;

const Button = styled.button`
  text-align: center;
  color: #e9e4ff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 2rem;
  background-color: #7654e9;
  border-radius: 6px;
  border: none;
  outline: none;
  margin: 2rem 3rem 0.25rem 3rem;
`;
