import React, { useEffect, useState } from 'react';
//import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Documentacao from '../../components/Documentacao';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import LoadingScreen from '../../components/LoadingScreen/';

function Home() {  
  const [ categorias, setCategorias] = useState([])

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setCategorias([...categoriasComVideos,])
      })
      .catch((e) => {console.log(e.message)});

  }, [])  
  console.log(categorias)
  return (
      <PageDefault paddingAll={0}>

        {categorias.length === 0 && (
          <LoadingScreen />
        )}

        {categorias.length > 0 && (

          categorias.map((categoria, index) => {
            if(index === 0){
              return (
                <div key={Math.random()}>            
                  <BannerMain
                    key={Math.random()}
                    videoTitle={categorias[0].titulo}
                    url={categorias[0].videos[0].url}
                    videoDescription={categorias[0].videos[0].titulo}
                  />
                  <Carousel
                    key={Math.random()}
                    ignoreFirstVideo
                    category={categoria}
                  />
            
                </div>
              )
            }

            return (
              <Carousel
                key={Math.random()}
                category={categoria}
              />
            )
          })

        )}
        <Documentacao></Documentacao>

      </PageDefault>
    )
  
}

export default Home;