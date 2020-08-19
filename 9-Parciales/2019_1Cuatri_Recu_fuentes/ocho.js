/*Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo)
 y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color*/

function mostrar(){
let colorVehiculo;
let valorVehiculo;
let seguir;
let contadorRojos=0;
let contadorRojos5000=0;
let contadorMenos5000=0;
let acumVehiculos=0;
let contadorVehiculos=0;
let flagCaro=0;
let precioCaro;
let colorCaro;

do{
colorVehiculo=prompt("Por favor,ingrese el color del vehiculo");
while(colorVehiculo!="rojo" && colorVehiculo!="verde" && colorVehiculo!="amarillo" ){
    colorVehiculo=prompt("ERROR.Reingrese el color del vehiculo");
}
valorVehiculo=parseInt(prompt("Por favor,ingrese el valor del vehiculo"));
while (valorVehiculo<0 || valorVehiculo>10000){
    valorVehiculo=parseInt(prompt("ERROR.Reingrese el valor del vehiculo"));
}
//a cant de autos rojos, y b. cantidad de autos rojos con precio> 5000
if (colorVehiculo=="rojo"){
    contadorRojos++;
}if (colorVehiculo=="rojo" && valorVehiculo>5000){
contadorRojos5000++;
}
//c
if (valorVehiculo<5000){
    contadorMenos5000++;
}
//d.promedio de vehiculos ingresados,infiero q debe ser del precio
contadorVehiculos++;
acumVehiculos=acumVehiculos+valorVehiculo;


//e. el mas caro y su color

if (flagCaro==0 || valorVehiculo>precioCaro){
precioCaro=valorVehiculo;
colorCaro=colorVehiculo;
    flagCaro=1;
}
seguir=prompt("Desea continuar ingresando datos?");
}while (seguir=="si")
promedio=acumVehiculos/contadorVehiculos;
console.log ("A. La cantidad de autos rojos es: " + contadorRojos);
console.log ("B.La cantidad de autos rojos con precio mayor a 5000 es: " + contadorRojos5000)
console.log ("C.La cantidad de vehiculos con precio menor a 5000 es: " + contadorMenos5000)
console.log ("D.El promedio de los vehiculos ingresados es: " + promedio );
console.log ("E.El vehiculo mas caro es: " + precioCaro + " y su color: " + colorCaro);
}
