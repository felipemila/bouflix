import React from 'react';
import { Documentacao } from './styles';


function Capturar() {
  return (
    <Documentacao>
      <h1>DOCUMENTAÇÃO</h1>
      <p>Guias para iniciantes</p>
      <a href="https://desafio-bou.s3.amazonaws.com/AWS+S3+-+Guia+Iniciante.pdf">AWS S3 Básico</a>
      <a href="https://beonupcombr-my.sharepoint.com/:w:/g/personal/holiveira_beonup_com_br/EfItf0rVpC1Mta3m6GqVHQUBym-pHAmIDHiaEvDSEPutXg?e=Og7t8i">CSV para JSON com Glue</a>
      <a href="https://desafio-bou.s3.amazonaws.com/Abrindo+tabela+simples+XLS+com+python.pdf">Abrir tabela XLS com Python</a>
      <p>Documentações oficiais dos serviços AWS</p>
      <a href="https://docs.aws.amazon.com/pt_br/AmazonS3/latest/dev/Introduction.html">S3</a>
      <a href="https://docs.aws.amazon.com/pt_br/glue/latest/dg/how-it-works.html">Glue</a>
      <a href="https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html">Lambda</a>
      <a href="https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html">EC2</a>      
    </Documentacao>
  );
}

export default Capturar;
