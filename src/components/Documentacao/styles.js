import styled from 'styled-components';


export const Documentacao = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

  .news {
  padding: .30rem;
  width: 15em;  
  border: 1.5px solid #ecc100;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: .5em;
  margin: .50rem;
}

    .botao {
  padding: .30rem;
  width: 7em;
  border-radius: .5em;
  margin: .50rem;  
  display: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 3px #999;
  font-size: calc(6px + 2vmin);
  background-color: #ecc100;
  cursor: pointer;
  outline: none;
  color:#02215e;
}

  h1{  
  font-weight: bolder;
  margin-bottom: 1rem;
  color:  #ecc100;
}

  p{
  font-size: larger;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bolder;  
}


  a{  
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  font-weight: bolder;
  color: #ecc100;
}
`;
