import axios from "axios";
import React from "react";
import styled from  "styled-components";

const FlexColumn = styled.div`
display:flex;
flex-direction:column;
`
const InicioSellPage = styled.div`

color: #4d6f80;
`
const Myh2 = styled.h2`
font-size:18px;`;
const HrSellPage = styled.hr `
color: #4d6f80;
height:2px;
background-color:#4d6f80;
opacity:0.3;
`
const DivMasterSellPage = styled.div`
width:50%;
margin:auto;
`
const InputSellPage = styled.input`
border-bottom:solid;
border-width:1px;
height:40px;
border-radius:12px;
border-color:#d3e2e5;
margin-bottom:16px;
` 
const InputSellPage2 = styled.input`
border-bottom:solid;
border-width:1px;
height:120px;
border-radius:12px;
border-color:#d3e2e5;
margin-bottom:16px;
` 
const LabelSellpage = styled.label`
margin-bottom:12px;
font-family:'nunito', sans-serif;
font-weight:bold;
color:#545454;
font-size:14px;
`
const MetodoPrecoPrazo = styled.div `
display:flex;
font-weight:bold;
font-size:16px;
justify-content:space-around;
`
const SelectSellPag = styled.select`
border-bottom:solid;
border-width:1px;
height:50px;
border-radius:12px;
border-color:#8888;
margin-bottom:16px;
border-right:none;
border-bottom:none;
`

const ButtonSellPage = styled.button`
background-color:#ff7d7d;
border-radius:25px;
border-color:transparent;
width:100%;
margin-top:16px;
height:48px;
font-weight:bold;
font-size:20px;
color:white;


`


export default class SellPage extends React.Component {
  state={
    name: "",
    description: "",
    price: null,
    paymentMethod: "",
  	shipping:null

    }
    handleName =(e)=>{
      this.setState({name: e.target.value});
    };

    handleDescription = (e) =>{
      this.setState({description: e.target.value});
    };
    handlePrice = (e) =>{
      this.setState({price: e.target.value});
    };

    handlePaymentMethod = (e) => {
   
      this.setState({paymentMethod:e.target.value});
    };

    handleShipping = (e) =>{
      this.setState({shipping: e.target.value});
    };

  createCar = () =>{
    const body = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      paymentMethod: this.state.paymentMethod,
      shipping: this.state.shipping
    };
    axios 
      .post("https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars", body)
      .then((res)=> {
        alert("Parabéns, seu carro foi anunciado com sucesso!");
        console.log(res)
        this.setState({ name: "", description: "", price:"", paymentMethod: "", shipping:""})
      })
      .catch((err) => {
        alert("Ocorreu um erro ao anunciar seu carro , tente mais tarde!");
        console.log(err);
      });
  };



  render() {
  
    return (
      <DivMasterSellPage>
        <InicioSellPage>
        <Myh2>Anuncie seu Carro</Myh2>
        <HrSellPage/>
        </InicioSellPage>
       
        <FlexColumn>
          <LabelSellpage>
            Nome
          </LabelSellpage>
          

          <InputSellPage onChange={this.handleName}
         value={this.state.name} />
          
          <LabelSellpage>
            Descrição
          </LabelSellpage>
         
       
        <InputSellPage2 onChange={this.handleDescription}
         value={this.state.description}/>

         </FlexColumn>
         
        
        <MetodoPrecoPrazo>
          <FlexColumn>
            
            <LabelSellpage>
              Metodo de Pagamento
            </LabelSellpage>

          <SelectSellPag onChange={this.handlePaymentMethod} value={this.state.paymentMethod}>
             <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Cartão de Débito">Cartão de Débito</option>
          <option value="Boleto Bancário">Boleto Bancário</option>
          <option value="Pix">Pix</option>
          </SelectSellPag>
         
          </FlexColumn>
         

        <FlexColumn>
          <LabelSellpage>
            Preço
          </LabelSellpage>
          
           <InputSellPage type="number"
         onChange={this.handlePrice}
         value={this.state.price} />

        </FlexColumn>
        
        <FlexColumn>
          <LabelSellpage>
            Tempo de Entrega
          </LabelSellpage>
           
           <InputSellPage type="number"
         onChange={this.handleShipping}
         value={this.state.shipping}/>
           
         
       
        </FlexColumn>
         

        </MetodoPrecoPrazo>
        
        <ButtonSellPage onClick={this.createCar}>
        Anunciar
        </ButtonSellPage>
       
        
         </DivMasterSellPage>
    );
  }
}
