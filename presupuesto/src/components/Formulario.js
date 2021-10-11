import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Error from './Error';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
 
  const [nombregasto, agregarNombreGasto] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // agregar nuevo gasto
  const agregarGasto = e => {
    e.preventDefault();
    // validar
    if(cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);

    // construir el gasto
    const gasto = {
      nombregasto,
      cantidad,
      id: shortid.generate()
    }

    // pasar el gasto al componente principal
    console.log(gasto);
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // resetear form
    agregarNombreGasto('');
    guardarCantidad('');
  }

  return ( 
    <form
      onSubmit={agregarGasto}
    >
        <h2>Agrega tus gastos aquí</h2>
        {error ? <Error mensaje="Se produjo un error al agregar el nuevo gasto" /> : null }
        <div className="campo">
          <label>Nombre Gasto</label>
          <input 
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombregasto}
            onChange={e => agregarNombreGasto(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Cantidad Gasto</label>
          <input 
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
          />
        </div>

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
    </form>

  );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;