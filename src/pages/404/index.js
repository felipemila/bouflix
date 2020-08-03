import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import './index.css';

function pageError() {
  return (
    <PageDefault>
      <div className="title">
        <h1>OPS ... ESSA PÁGINA NÃO EXISTE!</h1>
      </div>
      <div class="container">
        <iframe className="responsive-iframe" scrolling="no" src="https://mariosouto.com/flappy-bird-devsoutinho/"></iframe>
      </div> 
      <Link to="/">
        Voltar para a página principal
      </Link>
    </PageDefault>
  )
}

export default pageError;