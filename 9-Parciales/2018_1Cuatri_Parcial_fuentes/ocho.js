/*Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/

function mostrar(){
let letra;
let numero;
let seguir;
let contadorPares=0;
let contadorImpares=0;
let contadorCeros=0;
let promedioPositivos;
let contadorPositivos=0;
let acumPositivos=0;
let acumNegativos=0;
do{
numero=parseInt(prompt("Ingrese un numero"));
while (numero<-100 || numero>=100 || isNaN(numero)){
numero=parseInt(prompt("ERROR. Reingrese un numero valido"));
}
letra=prompt("Ingrese una letra");
while (letra=="" || !(isNaN(letra))){
letra=prompt("ERROR. Reingrese una letra valido");
}
if (numero ==0){
    contadorCeros++;
}
else if (numero %2 ==0){
contadorPares++;
}else{
    contadorImpares++;
}
if (numero>0){
    contadorPositivos++;
    acumPositivos=acumPositivos+ numero;
}else {
acumNegativos=acumNegativos+numero;
}

seguir=prompt("Desea continuar?");
}while (seguir=="si");
promedioPositivos=acumPositivos/contadorPositivos;
console.log ("A.La catidad de numeros pares es: " + contadorPares);;
console.log ("B.La cantidad de numeros impares es: " + contadorImpares);;
console.log ("C.La cantidad de ceros es: " + contadorCeros);;
console.log ("D.El promedio de los num positivos es: " + promedioPositivos) ;;
console.log ("E.LA suma de todos los numeros negativos es " + acumNegativos);;

}
