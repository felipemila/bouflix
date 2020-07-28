import React from 'react';
import { Documentacao } from './styles';

const enviar = async () => {
  alert('Cadastro realizado. Obrigado!') 
}

function Capturar() {
  return (
    <Documentacao>
      <h1>DOCUMENTAÇÃO E GUIAS</h1>
      <p>Aqui você encontra guias e documentações oficiais para auxiliar sua jornada de aprendizado.</p>
      <a href="https://docs.aws.amazon.com/pt_br/AmazonS3/latest/dev/Introduction.html">AWS S3</a>
      <a>AWS Glue</a>
      <a>Python</a>
      <a>MySQL</a> 
      
    </Documentacao>
  );
}

export default Capturar;
