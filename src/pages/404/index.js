import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import './index.css';

function pageError() {
  return (
    <PageDefault>
      <div className="title">
        <h1>Essa página não existe, mas você pode jogar :)</h1>
      </div>
      <div class="container">
        <iframe className="responsive-iframe" scrolling="no" src="https://mariosouto.com/flappy-bird-devsoutinho/"></iframe>
      </div> 
      <Link className="Voltar" to="/">
        Voltar
      </Link>
    </PageDefault>
  )
}

export default pageError;