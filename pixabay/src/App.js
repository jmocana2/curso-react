import React from 'react';
import Formulario from './components/Formulario';

function App() {

  return (
    <div className="container">
      <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>

          <Formulario 
      
          />
      </div>

      <div className="row justify-content-center">
       
        <p>Aquí el componente Listado de imágenes</p>
      
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