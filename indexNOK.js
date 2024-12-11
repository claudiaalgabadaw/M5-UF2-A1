function calcula() {
  // Obtener los valores de los productos vendidos y devueltos
  var casella1 = document.getElementById("valor");  // Productos vendidos
  var casella2 = document.getElementById("valor2"); // Productos devueltos
  
  var vendidos = parseFloat(casella1.value);  // Convertir a número
  var devueltos = parseFloat(casella2.value); // Convertir a número
  
  // Validación de entrada
  if (isNaN(vendidos) || isNaN(devueltos) || vendidos <= 0 || devueltos < 0 || devueltos > vendidos) {
    alert("Por favor, introduce valores válidos.");
    return;
  }

  // Calcular la tasa de éxito
  var tasaExito = ((vendidos - devueltos) / vendidos) * 100;

  // Asignar el tipo según la tasa de éxito
  var tipo = CalculaTipo(tasaExito);
  
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

function CalculaTipo(tasaExito) {
  // Determinar el tipo según la tasa de éxito
  if (tasaExito >= 90) {
      return 5;  // Genio de la venta
  } else if (tasaExito >= 80) {
      return 4;  // Muy bien
  } else if (tasaExito >= 60) {
      return 3;  // Vamos por buen camino
  } else if (tasaExito >= 40) {
      return 2;  // No creo que vender sea lo tuyo
  } else if (tasaExito >= 20) {
      return 1;  // Mejorables
  } else {
      return 0;  // Desastre
  }
}  