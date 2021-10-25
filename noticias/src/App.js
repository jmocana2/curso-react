import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {

  const [categoria, guardarCategoria] = useState('');

  useEffect(()=>{
    console.log('categoría: ', categoria);
  }, [categoria]);

  return (
    <>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
          <Formulario guardarCategoria={guardarCategoria} />
        </div>
    </>
  );
}

export default App;
