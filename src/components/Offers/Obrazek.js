import React from "react";

export default function Obrazek({ imageURL }) {
  return;
  <ContainerIMG>
    <Obrazek src={imageURL} alt="" />
  </ContainerIMG>;
}
const ContainerIMG = styled.div`
  background: green;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  flex-direction: column;
`;
const Nadpisek = styled.h1`
  color: red;
`;
