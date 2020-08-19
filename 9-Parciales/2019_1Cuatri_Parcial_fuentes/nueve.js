/**Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/ 

function mostrar(){
let nombre;
let cantidad;
let temperatura;
let seguir;
let contadorTempPares=0;
let flagPaisMenosHab=0;
let cantidadMenor;
let nombreMenosHab;
let contadorCuarenta=0;
let acumHabit=0;
let contadorPaises=0;
let flagTemperaturaMin=0
let temperaturaMin;
let nombreTempMin;
do{
nombre=prompt("Ingrese el nombre de un pais");
cantidad=parseInt(prompt("Ingrese cantidad de habitantes"));
while (cantidad<1 || cantidad>7000){
    cantidad=parseInt(prompt("ERROR.ReIngrese cantidad de habitantes"));
}
temperatura=parseInt(prompt("Ingrese temperatura minima que se registra en su territorio"));
while (temperatura<-50 || temperatura>50){
    temperatura=parseInt(prompt("ERROR.Reingrese temperatura minima que se registra en su territorio"));
}
//a.cant de temp pares
if (temperatura%2==0){
    contadorTempPares++;
}//b.el pais c menos habitantes
if (flagPaisMenosHab==0 || cantidad<cantidadMenor){
cantidadMenor=cantidad;
nombreMenosHab=nombre;
flagPaisMenosHab=1;
}
//c.
if (temperatura>40){
    contadorCuarenta++;
}
//d.promedio de los hab entre los paises ingresados
if (cantidad!=0){
acumHabit=acumHabit+cantidad;
contadorPaises++;
}
//f.la temp mín ingresada, y nombre del pais q registro esa temp
if (flagTemperaturaMin==0 || temperatura<temperaturaMin){
temperaturaMin=temperatura;
nombreTempMin=nombre;
flagTemperaturaMin=1;
} 
seguir=prompt("Desea ingresar mas datos?");
}while (seguir=="si")
promedio=acumHabit/contadorPaises;

console.log ("A.La cantidad de temperaturas pares es: +  " + contadorTempPares);
console.log ("B. El pais con menos habitantes es:  " + nombreMenosHab + " con " + cantidadMenor + " de habitantes");
console.log ("C. La cantidad de paises con mas de 40 grados es: "  + contadorCuarenta);
console.log ("D. El promedio de los hab de los paises ingresados es: " + promedio);
console.log ("F. La temperatura min ingresada es: " + temperaturaMin + " en el pais: " + nombreTempMin);
}
