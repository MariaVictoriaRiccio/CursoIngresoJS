/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
let clave;	
clave=prompt("ingrese el número clave");//pido el dato
	//si ingresa dato valido, el while no se va a ejecutar porq la cond va a ser invalida, lo paso por alto y me va al alert, informando.
	
while(clave !="utn750"){ 
clave = prompt("Clave Invalida. Reingrese clave")
}
	
alert ("Clave correcta")
}//FIN DE LA FUNCIÓN
