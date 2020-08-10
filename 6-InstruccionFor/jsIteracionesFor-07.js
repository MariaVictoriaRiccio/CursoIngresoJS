//al presionar el botón pedir un núm. mostrar los nume divisores
// desde el 1 al número ingresado, 
//y mostrar la cantidad de numeros divisores encontrados.
function mostrar(){
//declaro variables
let numero;
let contadorDivisores=0;

//pedir num al usuario
numero=parseInt(prompt("INGRESE NUMERO"));

//mostrar numeros desde el 1 al num ingresado
for (let i=1; i<numero; i++){

	//analizar si el valor q toma la var es divisor del numero ingrsado
if (numero%i==0){//sacar divisor  
	console.log (i);
	contadorDivisores++;
}
}
console.log("Cantidad de divisores encontrados" + contadorDivisores);
}//FIN DE LA FUNCIÓN


//xq me dio 5 en vez de 6 diviisores?