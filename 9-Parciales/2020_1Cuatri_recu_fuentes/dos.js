/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/

function mostrar(){
let tipo;
let cantidad;
let precio;
let contadorCal=0
let contadorCemento=0;
let contadorArena=0;
let acumCal=0;
let acumArena=0;
let acumCemento=0;
let seguir;
let totalBruto;
let precioArena;
let precioCal;
let precioCemento;
let productoconMayorCantidad;
let precioveinticincodesc;
let precioquincedesc;
let acumMayor=0

do{
tipo=prompt("Por favor ingresar el tipo de producto: cal, arena o cemento");
while (tipo!="cemento" && tipo !="cal" && tipo !="arena"){
  tipo=prompt("Favor ingresar un tipo de producto valido.Cal,arena o cemento");
}
cantidad=prompt("Por favor ingresar cantidad de bolsas");
precio=parseFloat(prompt("Por favor ingresar el precio por bolsa"));
while (precio<0){
  precio=parseFloat("Error. Favor ingresar precio mayor a 0");
}
switch(tipo){
case "cal":
  contadorCal++;
  acumCal+=cantidad;
  precioCal+=precio
  totalBruto+=(precio*cantidad);
  break;
  case "cemento":
    contadorCemento++;
    acumCemento+=cantidad;
    precioCemento+=precio
    totalBruto+=(precio*cantidad);
  break;
    case "arena":
      contadorArena++;
      acumArena+=cantidad;
      precioArena+=precio
      totalBruto+=(precio*cantidad);
      break;
}     
seguir=prompt ("Desea agregar mas productos?");
}while (seguir=="si")
if (cantidad>10){
precioquincedesc= totalBruto*15/100;
}else if (cantidad>30){
precioveinticincodesc=totalBruto*25/100;
} 
if (contadorArena>contadorCemento && contadorArena>contadorCal) {
  productoconMayorCantidad="Arena";
} else if (contadorCal>contadorArena && contadorCal>contadorCemento) {
  productoconMayorCantidad="Cal";
} else {
  productoconMayorCantidad= "Cemento";
}
  
if (precioArena>precioCal && precioArena>precioCemento) {
  acumMayor+=precioArena
} else if (precioCal>precioArena && precioCal>precioCemento) {
  acumMayor+=precioCal
} else {
  acumMayor+=precioCemento
}

console.log ("El total sin descuento que debe abonar es: " + totalBruto);
console.log("Compro mas 10 bolsas,obtiene descuento del 15% y abona + " + precioquincedesc);
console.log("Compro mas 30 bolsas,obtiene descuento del 25% y abona + " + precioveinticincodesc);
console.log("El producto con mayor precio es=" + acumMayor);
console.log("El producto con mayor cantidad es=" + productoconMayorCantidad);

}//fin funcion
