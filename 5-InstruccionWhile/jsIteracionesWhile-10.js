/*
Al presionar el botón pedir  números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.//con el modulo
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).//contadorneg menos cont positiv */
function mostrar(){
	let numero; 
	let seguir;
	let Sumapositivos=0;
	let Sumanegativos=0; 
	let contadorPositivos=0;
	let contadorNegativos=0;
	let contadorCeros=0;
	let NumerosPares=0;
	let PromedioPositivos=0
	let PromedioNegativos=0
	let DiferenciaNegativosPositivos;
	
	do {
		numero=parseInt(prompt ("Ingrese un numero"));
		seguir=prompt("Desea continuar ingresando numeros?"); 
	if (numero<0){
		contadorNegativos++;
		Sumanegativos=Sumanegativos+numero;
	}
	else if (numero>0){
		Sumapositivos=Sumapositivos+numero;
		contadorPositivos++;
	}
	else {
		contadorCeros++;
	}
	if (numero%2==0){
	NumerosPares++;
}
}while(seguir=="si");
	
if (contadorPositivos !=0) {
PromedioPositivos=Sumapositivos/contadorPositivos;
 } if (contadorNegativos!=0) {
PromedioNegativos=Sumanegativos/contadorNegativos;
 }
DiferenciaNegativosPositivos=contadorPositivos-contadorNegativos;

	document.write("La suma de numeros negativos es: " + Sumanegativos + "</br>");
	document.write("La suma de numeros positivos es: " + Sumapositivos + "</br>");
	document.write("Cantidad de numeros negativos ingresados es: " + contadorNegativos + "</br>");
	document.write("Cantidad de numeros positivos ingresados es: " + contadorPositivos + "</br>");			
	document.write("La cantidad de numeros cero es: " + contadorCeros + "</br>");
	document.write("El promedio de numeros negativos es: " + PromedioNegativos + "</br>");
	document.write("El promedio de numeros positivos es: " + PromedioPositivos + "</br>");
	document.write("La diferencia entre cantidad de num negativos y positivos es: " + DiferenciaNegativosPositivos + "</br>");
	document.write("La cantidad de numeros pares es : " + NumerosPares + "</br>");
}	