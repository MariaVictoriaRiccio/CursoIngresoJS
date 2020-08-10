/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
//1.declarar variables
let numero; 
let seguir;
let positivos=0
let negativos=1 //son contadores/acumuladores y debemos inicializarla
let flag=0 //para avisarme si puso algun negativo asi me figura 0sino
//2.genero un bucle del tipo mientras el usuario quiera con do while
//3.---dentro del bucle---
do {
	numero=parseInt(prompt ("Ingrese un numero"));//4.pedir numero a usuario
	
	if (numero>=0){   //5.analizar signo si es+o-, cond
		positivos = positivos + numero;   //6.acumulo el numero donde corresponda
	}
	else{
		flag =1;
		negativos= negativos * numero;
		
	}
	seguir=prompt("Quiere ingresar mas numeros?");//le pongo una caja de texto para q respond x prompt
}//7.---fuera del bucle---
//8.antes de mostrar resultados
//9.muestro los resultados		
while (seguir =="si");
if (flag==0){//si entro aca es xq el usuario no ingresi negativos entonces pongo 0 para no mostrar1
	negativos=0;
}
document.getElementById("txtIdProducto").value=negativos;
document.getElementById("txtIdSuma").value=positivos;

}
//dif en while se puee ejecutar si o no, pero en el do while entra 1 vez si o si xlo menos 