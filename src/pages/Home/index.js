import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Documentacao from '../../components/Documentacao';

function Home() {
  return (
    <div style={{background: "#141414"}} >
      <Menu></Menu>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O Aplicativo para Zabbix  foi pensado para facilitar as rotinas do seu ambiente de monitoramento assim como trazer notificações importantes para perto de você!"}
      />      

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Documentacao/>
      
      <Footer />
        
    </div>
  );
}

export default Home;
