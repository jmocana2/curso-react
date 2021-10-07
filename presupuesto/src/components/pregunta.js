import React, { useState } from 'react';
import Error from './Error';

const Pregunta = () => {
  
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //función que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  }

  //Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // validación
    if(cantidad < 1 || isNaN(cantidad)){
      guardarError(true);
      return;
    }

    // pasamos la validación
    guardarError(false);
  }

  return ( 
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto introducido es incorrecto" /> : null}

      <form onSubmit={e=>agregarPresupuesto(e)}>
          <input
              type="number"
              className="u-full-width"
              placeholder="Coloca tu presupuesto"
              onChange={e=>definirPresupuesto(e)}
          />
          <input 
              type="submit"
              className="button-primary u-full-width"
              value="Definir Presupuesto"
          />
      </form>
    </> 
  );
}
 
export default Pregunta;