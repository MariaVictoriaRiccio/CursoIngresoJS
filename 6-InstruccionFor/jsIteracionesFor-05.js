//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
function mostrar(){
	let numero;
	numero=parseInt(prompt("Ingrese un numero 9 para salir"));
	
	for ( ; ; ){
       if (numero==9){
		break;
	   }
	   alert ("usted ingreso el numero" + numero)
}
	
}//FIN DE LA FUNCIÓN

///esta mal hecho