//al presionar el botón pedir un número. 
//mostrar los numeros pares desde el 1 al número ingresado,
// y mostrar la cantidad de numeros pares encontrados
function mostrar(){
//declaro var
let numero;
let contadorPares=0;
//let i; //var de control pero la declaro en el for

//pedir numeros al usuario 
numero=parseInt(prompt("INGRESE NUMEROS"));

/*generar q 1 var tome los valores desde el 1 al 
num ingresado utilizando bucle*/
for (let i=1; i<numero; i++){//la var i va a ir variando su valor hasta num ingresado
/*dentro del bucle:analizar si el valor tomado x la var es par
para mostrarlo y contarlo*/
if (i %2 == 0){
	console.log(i)
	contadorPares++;
}
}
//despues del bucle:mostrar cantidad de pares
console.log("Cant de pares encontrados" + contadorPares);
}//FIN DE LA FUNCIÓN
