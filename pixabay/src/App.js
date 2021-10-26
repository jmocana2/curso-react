import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  //definimos state
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual ] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  const paginaAnterior = () => {
    if(paginaactual === 1) return

    const nuevaPaginaActual = paginaactual - 1;
    guardarPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () => {
    if(paginaactual === totalpaginas + 1) return

    const nuevaPaginaActual = paginaactual + 1;
    guardarPaginaActual(nuevaPaginaActual);
  }

  useEffect(() => {

    if(busqueda === '') return;

    const consultarAPI = async() => {
      const fotosPagina = 10;
      const url = `https://pixabay.com/api/?key=543056-4ef46f61f7481b21974e39be4&q=${busqueda}&per_page=${fotosPagina}&page=${paginaactual}`;
      const consulta = await fetch(url);
      const resultado = await consulta.json();

      console.log(resultado);
      guardarImagenes(resultado.hits);  
      guardarTotalPaginas(Math.ceil(resultado.totalHits / fotosPagina));

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'});
    }
    consultarAPI();
  }, [busqueda, paginaactual])

  return (
    <div className="container">
      <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Formulario 
            guardarBusqueda={guardarBusqueda}
          />
      </div>
      <div className="row justify-content-center">       
        <ListadoImagenes 
          imagenes={imagenes}
        />
          { 
            paginaactual !== 1 ?
            <button 
                type="button"
                className="bbtn btn-info mr-1"
                onClick={paginaAnterior}
            >&laquo; Anterior </button>
            :
            null
          }
          { 
            paginaactual !== totalpaginas + 1 && busqueda ?
              <button 
                type="button"
                className="bbtn btn-info"
                onClick={paginaSiguiente}
              >Siguiente &raquo;</button>
            :
            null
          }   
      </div>
    </div>
  );
}

export default App;