/*(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/

function mostrar()
{
let numeroUno;
let numeroDos;
let divido;
let suma;

numeroUno=parseInt(prompt("Ingrese un numero"));
numeroDos=parseInt(prompt("Ingrese otro numero"));

if (numeroUno>numeroDos){
divido=numeroUno/numeroDos;
console.log("El resultado de la division es: " + divido);
}
else{
suma=numeroUno+numeroDos;
}
if (suma<50){
    console.log("El resultado de la suma es: " + suma + " y es menor a 50");
}
}
