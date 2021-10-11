import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from "./components/Pregunta";

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ?
          (
            <Pregunta 
              guardarPresupuesto={guardarPresupuesto} 
              guardarRestante={guardarRestante} 
              actualizarPregunta={actualizarPregunta}  />
          )
          :
          (
            <div className="row">
              <div className="one-half column">
                  <Formulario 
                  
                  />
              </div>

              <div className="one-half column">
                
              </div>
            </div>
          )}
        </div>
        
      </header>
    </div>
  );
}

export default App;
