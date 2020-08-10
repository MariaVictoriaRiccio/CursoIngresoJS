/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	let numero; 
	let seguir;
	let numeroMax;
	let numeroMin;	
	let flag=0;
	//generar bucle mientras el usuario quiera,dowhile
	//---dentro del bucle---
	do {
	numero=parseInt(prompt ("Ingrese un numero"));//pedir numero a usuario
	//averiguar si es la primer iteracion, 
 if (flag ==0){
//si es asi,le asigno(inicializo)max y min c ese num
numeroMax=numero;
numeroMin=numero;
flag =1;
}
//en las restantes iteraciones hay q compararlo con el max anterior ymin anterior
if (numero>numeroMax){
//debo actualizar el nuevo max
numeroMax=numero;	
}
if (numero < numeroMin) {//if else es lo mismo
numeroMin=numero;
}	
	seguir=prompt("Quiere ingresar mas numeros?");
}while(seguir =="si");			
	//---desp del bucle---mostrar resultados
	document.getElementById("txtIdMaximo").value=numeroMax;
	document.getElementById("txtIdMinimo").value=numeroMin;
}
