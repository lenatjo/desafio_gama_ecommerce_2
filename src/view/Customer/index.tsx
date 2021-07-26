import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container } from '../Home/style';
import Logo from '../../assets/mountain-bike.jpg';
import Cart from '../../assets/cart-image.png';

export default function Login() {

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    let name : string = (document.getElementById('name') as HTMLInputElement).value;
    let email : string = (document.getElementById('email') as HTMLInputElement).value;
    let address : string = (document.getElementById('address') as HTMLInputElement).value;
    let cep : string = (document.getElementById('cep') as HTMLInputElement).value;

    const data = {
      name,
      email,
      address,
      cep,
    };

    let dataConverted = JSON.stringify(data);

    localStorage.setItem("@customer", dataConverted);
    alert("Cadastro efetuado com sucesso!");
  }

  return (
    <Container>
        <section className="app">
          <header className="logo-section">
            <Link to='/'>
                <img className="img-logo" src={Logo} alt="Logo" />
            </Link>
          </header>
          <header className="name-ecommerce-section">
              <h1 className="h1-header">Bike Shop</h1>
          </header>
          <header className="areas-section">
              <Link className="h2-header" to='/clientes'>Clientes</Link>
          </header>
          <header className="space-section">
          </header>
          <header className="cart-section">
              <img src={Cart} alt="Carrinho de Compra" width="40px" height="auto" />
              
          </header>
      </section>
      <section className="customer-section">
          <h2>Cadastro de Clientes</h2>
      </section>    
      <section className="app">
          <form onSubmit={handleSubmit} className="customer-section">
            <input className="data-input" id="name" type="text" aria-label="Nome Completo" placeholder="Nome Completo" />
            <input className="data-input" id="email" type="email" aria-label="Email" placeholder="Email" />
            <input className="data-input" id="address" type="text" aria-label="Endereço Completo" placeholder="Endereço Completo" />  
            <input className="data-input" id="cep" type="text" aria-label="CEP" placeholder="CEP" />
            <button className="btn-register" type="submit">Cadastrar</button>
          </form>
      </section>
      <section className="customer-section">
        <Link to="/">
          <button className="btn-register" type="submit">Voltar</button>
        </Link>
      </section>
    </Container>
  );
}
  