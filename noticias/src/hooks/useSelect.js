import React, { useState } from 'react';

const useSelect = (estadoInicial, opciones) => {
  //state
  const [categorias, guardarCategorias] = useState('');

  const newsSelect = () => (
    <select className="browser-default">
      <option value="#">Seleccionar</option>
    </select>
  )

  return [categorias, newsSelect]

}

export default useSelect;