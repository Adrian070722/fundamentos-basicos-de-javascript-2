function esPar(numero) {
    return numero % 2 === 0;
  }
  
  const numero = parseInt(prompt("Ingrese un número entero: "));
  
  if (esPar(numero)) {
    console.log(`${numero} true `);
  } else {
    console.log(`${numero} false `);
  }