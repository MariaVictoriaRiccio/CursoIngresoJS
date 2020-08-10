//*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
function mostrar(){
let n=0//contador
let numero;
let promedio;
let suma=0;//acumulador,me va acumulando a medida q ingreso n(numeros)

while (n<5){ //pido 5 veces el dato
numero=parseInt(prompt ("Ingrese un numero"));
//voy acumulando el numero ingresado en la var suma
n++;//voy sumando cada n(o sea cada num q ingresa),seria como n=n+n, 
suma=numero+suma;//me suman los numeros ingresados de a uno mas el otro, y asi. a medida q los ingreso
}
promedio=suma/5;
document.getElementById("txtIdSuma").value=suma;//pongo el resultado de la suma en caja de texto
document.getElementById("txtIdPromedio").value=promedio;
}//fin funcion

















/*{
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let suma;
	let promedio;

numero1=parseInt(prompt ("Ingrese un numero"));
numero2=parseInt(prompt ("Ingrese un numero"));
numero3=parseInt(prompt ("Ingrese un numero"));
numero4=parseInt(prompt ("Ingrese un numero"));
numero5=parseInt(prompt ("Ingrese un numero"));

suma=numero1+numero2+numero3+numero4+numero5;
document.getElementById("txtIdSuma").value=suma;

promedio=suma/5;
document.getElementById("txtIdPromedio").value=promedio;
}
*/