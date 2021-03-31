import React from "react";
import styled from "styled-components";
import LogoImg from "../images/futureCar.png"

const MainDiv = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: 30px 1fr 1fr auto;
  justify-items: center;
  align-items: center;
  height: 80vh;
`;

const ContentImg = styled.img`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 0;
  `;

const Intro = styled.h3`
display: flex;
margin-top: 0;
background-color: #E8ECEF;
height: 60px;
width: 600px;
text-align: center;
border-radius: 10px;
padding: 7px;
`;

export default class HomePage extends React.Component {
  render() {
    return (
      <MainDiv>
        <ContentImg
          src={LogoImg} style={{ width: "620px" }}
          />
          <Intro>
            A FutureCar e uma empresa que busca conectar vendedores e compradores
            de carros de forma simples e eficaz.
          </Intro>

      </MainDiv>
    );
  }
}