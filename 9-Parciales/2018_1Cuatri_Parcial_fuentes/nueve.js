/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo*/ 
function mostrar(){
let marca;
let peso;
let temperatura;
let contadortempPares=0;
let marcaPesada;
let pesoPesado;
let contadorProdmenos0=0;
let promedioPeso;
let pesomax;
let pesomin;
let seguir;
let flagMP=0;
let flagPesoMax=0;
let flagPesoMin=0;
let acumPeso=0;
let contadorProd=0;

do{
marca=prompt("Por favor ingrese una marca");
peso=parseInt(prompt("Por favor ingrese el peso del producto"));
while (peso<1 || peso>100){
    peso=parseInt(prompt("ERROR.Por favor reingrese el peso del producto"));
}
temperatura=parseInt(prompt("Por favor ingrese la temperatura de almacenamiento"));
while (temperatura<-30 || temperatura>30){
    temperatura=parseInt(prompt("ERROR.Por favor reingrese la temperatura de almacenamiento"));
}
//promedio peso de los prod
acumPeso=acumPeso+peso;
contadorProd++;

//temp pares
if (temperatura%2==0){
    contadortempPares++;

//prod conserv a menos de 0 grados
} if (temperatura<0){
    contadorProdmenos0++;

}//marca pesada
if (flagMP==0 || peso>pesoPesado){
    marcaPesada=marca;
    pesoPesado=peso;
    flagMP=1;

}//peso min y max
if (flagPesoMin==0 || peso<pesomin){
pesomin=peso;
flagPesoMin=1;
}else if (flagPesoMax==0 || peso>pesomax){
pesomax=peso;
flagPesoMax=1;
}

seguir=prompt("Desea continuar ingresando productos?");
}while (seguir=="si");
promedioPeso=acumPeso/contadorProd;
console.log("A.La cantidad de temp pares es: " + contadortempPares);
console.log("B.La marca del producto mas pesado es: " + marcaPesada );
console.log("C. La cantidad de productos que se conservan a menos de 0 grados: " + contadorProdmenos0);
console.log("D.El promedio del peso de todos los productos es: " + promedioPeso);
console.log("E.El peso maximo es: " + pesomax + "El peso minimo es: " + pesomin);
}
