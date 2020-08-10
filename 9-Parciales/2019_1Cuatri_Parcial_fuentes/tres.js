
   // Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
   function mostrar()
   {
let precio;
let porcentajeDescuento;
let precioConDescuento;
let precioFinal;

precio=parseInt(prompt("Por favor ingrese el precio"));
porcentajeDescuento=parseInt(prompt("Por favor ingrese el porcentaje de descuento"));
precioConDescuento=precio - precio*porcentajeDescuento/100;
(document.getElementById("elPrecioFinal").value)=precioConDescuento;

}
