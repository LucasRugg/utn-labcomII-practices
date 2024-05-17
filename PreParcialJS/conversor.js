var valores = { dolar: 1000, euro: 1500 };
var valorFinal = document.getElementById("valorFinal");
var selectMonedas = document.getElementById("monedas");
var formularioConversor = document.getElementById("formularioConversor");
var formularioAgregar = document.getElementById("formularioAgregar");

function convertir() {
  var importe = document.getElementById("importe").value;
  var tipoMoneda = document.getElementById("monedas").value;
  var importeFinal = importe / valores[tipoMoneda];

  valorFinal.innerHTML = importeFinal;

  formularioConversor.reset();
}

function agregarMoneda() {
  let nombreMoneda = document.getElementById("monedaNueva").value;
  let importeMonedaNueva = document.getElementById("importeNuevaMoneda").value;

  selectMonedas.options.add(new Option(nombreMoneda, nombreMoneda));

  valores[nombreMoneda] = importeMonedaNueva;

  console.log(valores);

  formularioAgregar.reset();
}
