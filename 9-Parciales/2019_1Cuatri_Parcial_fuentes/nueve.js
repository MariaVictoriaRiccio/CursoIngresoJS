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


}



seguir=prompt("Desea ingresar mas datos?");
}while (seguir=="si")



}
