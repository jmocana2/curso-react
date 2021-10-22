import React, { useState } from 'react';

const useSelect = (estadoInicial, opciones) => {
  //state
  const [categoria, guardarCategoria] = useState(estadoInicial);

  const NewsSelect = () => (   

    <select 
      className="browser-default"
      value={categoria}
      onChange={(e) => guardarCategoria(e.target.value)}
    >
      {opciones && opciones.map((opcion) => {
        return <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
      })}
      
    </select>
  )

  return [categoria, NewsSelect]

}

export default useSelect;