/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

function mostrar(){
let nombre;
let peso;
let temperatura;
let contadorTempPares=0;
let seguir;
let flagMaxPeso=0;
let maxPeso;
let nombrePesoMax;
let contadorMenosCero=0;
let acumPeso=0;
let contadorAnimales=0;
let promedio;

let flagMax=0;
let flagMin=0;
let pesoMax;
let pesoMin;

do{
nombre=prompt("Ingrese el nombre del animal");
peso=parseInt(prompt("Ingrese el peso del animal"));
while (peso<=1 || peso>=1000){
    peso=parseInt(prompt("ERROR.Reingrese el peso del animal"));
}
temperatura=parseFloat(prompt("Ingrese la temperatura del habitat"));
while (temperatura<-30 || temperatura>30){
    temperatura=parseFloat(prompt("ERROR.Reingrese la temperatura del habitat"));
}
//a.cant de temp pares
if (temperatura%2==0){
    contadorTempPares++;
}
//b.nombre y temp del animal mas pesado
if (flagMaxPeso==0 || peso>maxPeso){
 maxPeso=peso;
 nombrePesoMax=nombre;
    flagMaxPeso=1;
}
//c.cant de animales q viven a menos de 0 grados
//f El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

if (temperatura<0){
    contadorMenosCero++;
if (flagMax==0 || peso>pesoMax){
pesoMax=peso;
flagMax=1;
if (flagMin==0 || peso<pesoMin){
    pesoMin=peso;
    flagMin=1;
}
}
}//d.promedio todos los animales
acumPeso=acumPeso+peso;
contadorAnimales++;

seguir=prompt("Desea continuar ingresando animales?");
}while(seguir=="si");
promedio=acumPeso/contadorAnimales;
console.log ("A.Cantidad de temperaturas pares: " + contadorTempPares);
console.log ("B.El animal mas pesado es: " + nombrePesoMax + " y su peso es de: " + maxPeso);
console.log ("C.La cantidad de animales que viven a menos de 0 grados es: "  + contadorMenosCero);
console.log ("D.Promedio de todos los animales es: " + promedio);
console.log("E. El peso maximo de los animales q viven bajo cero es: " + pesoMax + " y el peso minimo: " + pesoMin);
}
