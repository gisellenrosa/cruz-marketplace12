import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styled from "styled-components";
import LogoImg from "../images/futureCar.png"
import Footer from '../components/Footer/Footer'
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

  margin-top: -350px;

`;

const Intro = styled.h3`
display: flex;
margin-top: -725px;
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
            de carros de forma simples e eficaz
          </Intro>
      </MainDiv>
      <div>
        <Footer/>
      </div>
      </div>
    );
  }
}