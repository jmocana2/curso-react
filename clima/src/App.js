import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from "./components/Header";

function App() {

  //state
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    console.log('peticion api...');

    const consultarAPI = async () => {
      await fetch('api url');
    }
    consultarAPI();


  }, [consultar]);

  



  return (
    <>
      <Header titulo="Clima React" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} guardarConsultar={guardarConsultar} />
            </div>
            <div className="col m6 s12">
            
            </div>
          </div>
        </div>
      </div>
    </>  
  );
}

export default App;
