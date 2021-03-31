import React from "react";
import styled from "styled-components";
import LogoImg from "../images/futureCar.png"

const MainDiv = styled.div`
  margin: 100px 0 0 0;
  display: grid;
  
  justify-items: center;
  align-items: center;
  height: 45vh;

`;

const ContentImg = styled.img`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: -300px;

`;

const Intro = styled.h3`
display: flex;
margin-top: 70px;

background-color: #E8ECEF;
height: 60px;
width: 600px;
text-align: center;
`

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
      <MainDiv>
        <ContentImg
          src={LogoImg} style={{ width: "620px" }}
          />
          <Intro>
            A FutureCar e uma empresa que busca conectar vendedores e compradores
            de carros de forma simples e eficaz.
          </Intro>
      </MainDiv>
     
      </div>
    );
  }
}
