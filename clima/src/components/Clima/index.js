import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

   const {name, main } = resultado;
   const kelvin = 273.15;

   if(!main) return null;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: <span className="temperatura"> {parseFloat(main.temp - kelvin, 10).toFixed(1)}  &#x2103; </span></h2>
                <p>Temperatura Máxima: {parseFloat(main.temp_max - kelvin, 10).toFixed(1)} <span> &#x2103;</span></p>
                <p>Temperatura Minima: {parseFloat(main.temp_min - kelvin, 10).toFixed(1)}  <span> &#x2103;</span></p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;