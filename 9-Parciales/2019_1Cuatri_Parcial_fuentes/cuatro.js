//Pedir dos números y mostrar el resultado:
//Si son iguales los muestro concatenados.
//Si el primero es mayor, los resto,
//de lo contrario los sumo.
//Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
//"la resta es xxx y superó el 10".
function mostrar()
{
    let numero1;
    let numero2;
    let resta;
    let suma;

numero1=parseInt(prompt("Ingrese un numero"));
numero2=parseInt(prompt("Ingrese un numero"));
alert ("Usted eligio los numeros: " + numero1 + " y" + numero2);

if (numero1 == numero2){
alert ("El numero 1 " + numero1 + "es igual al numero2" + numero2);
}

else if (numero1>numero2){
resta=numero1-numero2;
alert (resta)

}else {
    suma=numero1+numero2;
    alert(suma)
}
if (resta>10){
    alert ("La resta es" +  resta + "y supero el 10");
}
}






