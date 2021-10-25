import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticia';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState('');

  useEffect(()=>{

    const consultarAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4305bf24ee154ac09a491f24a5d249a8`
    
      const consulta = await fetch(url);
      const resultado = await consulta.json();
        
      guardarNoticias(resultado.articles);
    }
    consultarAPI();

  }, [categoria]);

  return (
    <>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
          <Formulario guardarCategoria={guardarCategoria} />
          <ListadoNoticias noticias={noticias} />
        </div>
    </>
  );
}

export default App;
