import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return (
      <PageDefault>
        <h1>Adicionar Categoria</h1>

        <form>
        <label>
          Nome da Categoria:
          <input type="text"/>
        </label>

        <button>
          Adicionar
        </button>

      </form>


        <Link to="/">
            Ir para a Página Principal
        </Link>

      </PageDefault>
    )
  };

  export default CadastroCategoria;