//al presionar el botón pedir un número. 
//Informar si el numero es PRIMO o no.
function mostrar()
{
//declaro variables
let numero;
let contadorDivisores=0
//pido num al usuario
numero=parseInt(prompt("Ingrese un numero"));

for (let i=1 ; i<=numero ;i++){

	if (numero % i ==0){
		contadorDivisores++;
	}
}
if (contadorDivisores !=2){
	alert ("No es primo" + numero);

}else{
alert ("Es primo" + numero);
}

}//FIN DE LA FUNCIÓN