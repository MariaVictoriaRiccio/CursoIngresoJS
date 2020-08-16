/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
function mostrar(){
let letra;
let numero;
let seguir;
let contadorPares=0;
let contadorImpares=0;
let contadorCeros=0;
let acumPosit=0;
let contadorPosit=0
let promedio;
let acumNegat=0;
let flagNumMax=0;
let flagNumMin=0;
let numeroMax;
let numeroMin;
let letraMin;
let letraMax;

do{
letra=prompt("Por favor ingrese una letra");
while (!isNaN(letra)){
    letra=prompt("ERROR.Reingrese una letra");
}
numero=parseInt(prompt("Ingrese un numero"));
while (isNaN(numero) || numero<-100 || numero>100){
    numero=parseInt(prompt("ERROR.Reingrese un numero"));
}
//A.Cantidad d numeros pares . B. cantidad de numeros impares
if (numero%2==0){
    contadorPares++;
}else{
contadorImpares++;
}
//C.cant de ceros
if (numero==0){
    contadorCeros++;
}
//D.el promedio de todos los num positivos ingresados
if (numero>0){
contadorPosit++;
acumPosit=acumPosit+numero;
}else{//E.suma de num negativos
acumNegat=acumNegat+numero;
}
//F.El número y la letra del máximo y el mínimo
if (flagNumMax==0 || numero>numeroMax){
 numeroMax=numero;
letraMax=letra;
    flagNumMax=1;
}else if (flagNumMin==0 || numero<numeroMin){
letraMin=letra;
numeroMin=numero;
flagNumMin=1;
} 

seguir=prompt("Desea continuar ingresando datos?");
}while (seguir=="si");
promedio=acumPosit/contadorPosit;

console.log("A.La cantidad de numeros pares es: " + contadorPares);
console.log("B.La cantidad de numeros impares es: " + contadorImpares);
console.log("C. La cantidad de ceros es: " + contadorCeros);
console.log("D.El promedio de los numeros positivos es: " + promedio);
console.log("E.La suma de los numeros negativos es: " + acumNegat);
console.log("F.El numero y letra max es: " + numeroMax + letraMax + " y el min: " + letraMin  + numeroMin);

}
