import React, { useState } from 'react';

const Pregunta = () => {
  
  const [cantidad, guardarCantidad] = useState(0);

  //función que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  }

  //Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // validación


    // pasamos la validación
  }
    
  return ( 
    <>
      <h2>Coloca tu presupuesto</h2>
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