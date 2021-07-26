import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../Home/style';

export default function Login() {
    function handleSubmit(e: { preventDefault: () => void; }) {
      let name = document.getElementById('name')?.nodeValue;
      let email = document.getElementById("email")?.nodeValue;
      let address = document.getElementById("address")?.nodeValue;
      let cep = document.getElementById("cep")?.nodeValue;
  
      const data = {
        name,
        email,
        address,
        cep,
      };
  
      let dataConverted = JSON.stringify(data);
  
      localStorage.setItem("dados-cadastro", dataConverted);
      alert("Cadastro efetuado com sucesso!");
    }
  
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            aria-label="Nome Completo"
            placeholder="Nome Completo"
          />
  
          <input id="email" type="email" aria-label="Email" placeholder="Email" />
  
          <input
            id="address"
            type="text"
            aria-label="Endereço Completo"
            placeholder="Endereço Completo"
          />
  
          <input id="cep" type="text" aria-label="CEP" placeholder="CEP" />
  
          <button type="submit">Cadastrar</button>

        </form>
      </Container>
    );
  }
  