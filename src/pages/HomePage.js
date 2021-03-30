import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styled from "styled-components";
import LogoImg from "../images/futureCar.png"

const MainDiv = styled.div`
  margin: 0;
  display: grid;
  grid-template-row: 10px 1fr 10px;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;

const ContentImg = styled.img`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top:-250px;
  padding: 0;
`;

const Intro = styled.h3`
margin: 0;
background-color: #E8ECEF;
height: 60px;
width: 600px;
text-align: center;
`

export default class HomePage extends React.Component {
  render() {
    return (
      <MainDiv>
        <ContentImg
          src={LogoImg} style={{ width: "700px" }}
          />
          <Intro>
            A FutureCar e uma empresa que busca conectar vendedores e compradores
            de carros de forma simples e eficaz
          </Intro>

      </MainDiv>
    );
  }
}