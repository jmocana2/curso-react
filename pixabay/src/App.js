import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  //definimos state
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);

  useEffect(() => {

    if(busqueda === '') return;

    const consultarAPI = async() => {
      const fotosPagina = 10;
      const url = `https://pixabay.com/api/?key=543056-4ef46f61f7481b21974e39be4&q=${busqueda}&per_page=${fotosPagina}`;
      const consulta = await fetch(url);
      const resultado = await consulta.json();

      console.log(resultado);
      guardarImagenes(resultado.hits);
    }
    consultarAPI();
  }, [busqueda])

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
      
            <button 
                type="button"
                className="bbtn btn-info mr-1"
          
            >&laquo; Anterior </button>
     
            <button 
              type="button"
              className="bbtn btn-info"
        
            >Siguiente &raquo;</button>
   
      </div>
    </div>
  );
}

export default App;