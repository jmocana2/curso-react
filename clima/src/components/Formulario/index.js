import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

  // definimos state
  
  const [error, guardarError] = useState(false)

  const { ciudad, pais } = busqueda;

  //guardamos la busqueda
  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    });
  }

  //enviamos formulario
  const handleSubmit = (e) => {

    e.preventDefault();

    // validar formulario
    if(ciudad.trim() === '' || pais.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);

    // enviar al componente principal
    guardarConsultar(true);
  }
    
  return ( 
    <form
      onSubmit={handleSubmit}
    >
      {error ? <p className='red darken-4 error'>Todos los campos son obligatorios</p> : null}
      <div className="input-field col s12">
          <input
              type="text"
              name="ciudad"
              id="ciudad"
              value={ciudad}
              onChange={handleChange}
          />
          <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
          <select
              name="pais"
              id="pais"
              value={pais}
              onChange={handleChange}
          >
              <option value="">-- Seleccione un país --</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">España</option>
              <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais">País: </label>
      </div>

      <div className="input-field col s12">
          <input  
              type="submit"
              value="Buscar Clima"
              className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
      </div>
    </form>
  );
}

Formulario.propTypes = {
    busqueda : PropTypes.object.isRequired,
    guardarBusqueda : PropTypes.func.isRequired,
    guardarConsultar : PropTypes.func.isRequired,
}
 
export default Formulario;