import axios from "axios";
import React from "react";

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
      <div>
        <h1>EM CONSTRUÇÃO</h1>
        <label>Nome</label>
        <input
         onChange={this.handleName}
         value={this.state.name}
         />
         <label>Descrição</label>
         <input
         onChange={this.handleDescription}
         value={this.state.description}
         />
         <label>Metodo de Pagamento</label>
         <select onChange={this.handlePaymentMethod} value={this.state.paymentMethod}>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Cartão de Débito">Cartão de Débito</option>
          <option value="Boleto Bancário">Boleto Bancário</option>
          <option value="Pix">Pix</option>
          </select>
         <label>Preço</label>
         <input type="number"
         onChange={this.handlePrice}
         value={this.state.price}
         />
          <label>Tempo de Entrega</label>
         <input type="number"
         onChange={this.handleShipping}
         value={this.state.shipping}
         />

         <button onClick={this.createCar}>Anunciar Carro</button>
        <h2></h2>
      </div>
    );
  }
}
