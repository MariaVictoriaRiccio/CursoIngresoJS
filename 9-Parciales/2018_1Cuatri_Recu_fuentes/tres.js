/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar(){
let precio;
let porcentajeDesc;
let precioFinal;

precio=parseFloat(prompt("Ingrese el precio"));
porcentajeDesc=parseFloat(prompt("Ingrese porcentaje de descuento"));
precioFinal=precio - (precio*porcentajeDesc/100);
document.getElementById("elPrecioFinal").value=precioFinal
}
