import React from "react";
import styled from "styled-components";
import ImgHeader from "../../images/futurecar-logo.png"


const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px 20px 40px;
  height: 10vh;
`;

const Buttons = styled.div`
  
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
            src={ImgHeader} style= {{ width: "300px" }}
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
