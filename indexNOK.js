function calcula() {
  // Obtener los valores de los productos venta y retorno
  var casella1 = document.getElementById("valor");  // Productos venta
  var casella2 = document.getElementById("valor2"); // Productos retorno
  
  var venta = parseFloat(casella1.value);  // Convertir a número
  var retorno = parseFloat(casella2.value); // Convertir a número
  
  // Validación de entrada
  if (isNaN(venta) || isNaN(retorno) || venta <= 0 || retorno < 0 || retorno > venta) {
    alert("Por favor, introduce valores válidos.");
    return;
  }

  // Calcular la tasa de éxito
  var factor = ((venta - retorno) / venta) * 100;

  // Asignar el tipo según la tasa de éxito
  var tipo = CalculaTipo(factor);
  
  // Mensajes de acuerdo al tipo
  var mensajes = {
    5: "¡Eres un genio de la venta!",
    4: "Muy bien, vamos por buen camino",
    3: "Aún es pronto pero vamos por buen camino",
    2: "Aún es pronto pero no creo que vender sea lo tuyo",
    1: "Francamente, tus resultados son mejorables ...",
    0: "¡Qué desastre, dedícate a otra cosa!"
  };
  
  var resultat = mensajes[tipo];
  
  // Mostrar el resultado en el campo correspondiente
  var casella3 = document.getElementById("resultat");
  casella3.value = resultat;
}

function CalculaTipo(factor) {
  // Determinar el tipo según la tasa de éxito
  if (factor >= 90) {
      return 5;  // Genio de la venta
  } else if (factor >= 80) {
      return 4;  // Muy bien
  } else if (factor >= 60) {
      return 3;  // Vamos por buen camino
  } else if (factor >= 40) {
      return 2;  // No creo que vender sea lo tuyo
  } else if (factor >= 20) {
      return 1;  // Mejorables
  } else {
      return 0;  // Desastre
  }
}

// Exportar la función para poder probarla en Jest
module.exports = { CalculaTipo };