export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
}

export const calcularMarca = (marca) => {
  var incremento;

  switch(marca){
    case 'europeo':
      incremento = 1.30;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break    
    default: break;
  }

  return incremento;
}

export const obtenerPlan = (plan) => {
  return (plan === 'completo') ? 1.50 : 1.20;
}