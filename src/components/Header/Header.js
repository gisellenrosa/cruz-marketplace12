import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -60px 40px 0 40px;
`;

const Buttons = styled.div`
  margin-top: 120px;
  display:flex;
`;
const Img = styled.img`
cursor:pointer
`;

const Button = styled.div`
font-family: 'Nunito', sans-serif;
background-color:#FF5C5C;
opacity:0.8;
padding:15px;
margin-left:10px;
border:0;
border-radius:10px;
color:white;
display:flex;
text-align:center;
align-items:center;
cursor:pointer;
transition:300ms;
:hover{
  opacity:1;
}
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <div>
          <Img
            onClick={() => {
              this.props.changeToPage("Home");
            }}
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6af9eda3-f4a0-46a8-96da-d290e1102a19%2Ffuturecar.png?table=block&id=56447354-1825-4378-b040-156dd065d298&width=3100&userId=4c407320-0851-42db-9ba2-49db837591f3&cache=v2"
            style={{ height: "300px" }}
          />
        </div>
        <Buttons>
            <div>
              <Button
                onClick={() => {
                  this.props.changeToPage("Buy");
                }}
              >
                Compre um Carro
              </Button>
            </div>
            <div>
              <Button
                
                onClick={() => {
                  this.props.changeToPage("Sell");
                }}
              >
                Venda um carro
              </Button>
            </div>
        </Buttons>
      </HeaderDiv>
    );
  }
}
