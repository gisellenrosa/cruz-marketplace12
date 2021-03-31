import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  margin: 0;
  display: grid;
  grid-template-row; 10px 1fr 10px;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;

const ContentImg = styled.img`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: -50px;
  padding: -50px;
`;

const Intro = styled.h3`
margin: -150px;
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
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6af9eda3-f4a0-46a8-96da-d290e1102a19%2Ffuturecar.png?table=block&id=56447354-1825-4378-b040-156dd065d298&width=3100&userId=4c407320-0851-42db-9ba2-49db837591f3&cache=v2"
          style={{ width: "500px" }}>
          </ContentImg>
          

          <Intro>
            A FutureCar e uma empresa que busca conectar vendedores e compradores
            de carros de forma simples e eficaz
          </Intro>

      </MainDiv>
    );
  }
}