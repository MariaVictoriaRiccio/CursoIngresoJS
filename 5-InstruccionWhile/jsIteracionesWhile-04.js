/*al presionar el botón pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero=parseInt(prompt("Ingrese un número entre 0 y 9, inclusive"));
	while (numero<0 || numero>9 || isNaN(numero)){
	numero=parseInt(prompt("Error.Reingrese un numero entre 0 y 9"));
}
document.getElementById("txtIdNumero").value=numero
}//FIN DE LA FUNCIÓN
//NaN:not a number. si pongo isNaN, significa q me toma invalido si no es u numero.
