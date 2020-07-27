import React from 'react';
import { Newsletter } from './styles';

function Capturar() {
  return (
    <Newsletter>
      <p>Cadastre-se para receber novidades sobre o Mobbix. </p>
      <a>Nome:</a><input placeholder="Escreva seu nome aqui" className="news" type = "text" name = "nome"></input>
      <a>Email:</a><input placeholder="Escreva seu melhor email" className="news" type = "text" name = "email"></input>
      <button className="botao" type ="button" onClick>Cadastrar </button>              
      
    </Newsletter>
  );
}

export default Capturar;
