/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra(precio/cant unid)
c) Cuántas unidades de jabones hay en total(cacumulador jabones)*/
function mostrar(){
let tipo;
let precio;
let cantidad;
let marca;
let fabricante;
let acumAlcohol=0;
let contadorAlcohol=0;
let acumBarbijo=0;
let contadorBarbijo=0;
let acumJabon=0;
let contadorJabon=0;
let flagAlcoholBarato=0;
let precioAlcoholBarato;
let cantidadAlcoholBarato;
let fabricanteAlcoholBarato;
let productoMasUnidades;
let promedio;

for (i=0;i<5;i++){
tipo=(prompt("Ingrese el producto de prevencion: barbijo, jabon o alcohol"));
while (tipo!="barbijo"&& tipo!="jabon" && tipo!="alcohol"){
tipo=(prompt("ERROR.Reingrese el producto: barbijo, jabon o alcohol"));
}
precio=parseFloat(prompt("Ingrese el precio del producto"));
while (precio<100 || precio>300){
	precio=parseFloat(prompt("ERROR.Reingrese el precio del producto entre 100 y 300"));
}
cantidad=parseInt(prompt("Ingrese la cantidad del producto"));
while (cantidad<0 || cantidad>1000){
	cantidad=parseInt(prompt("ERROR.Reingrese la cantidad del producto: mayor a 0 y menor a 1000"));
}
marca=(prompt("Ingrese la marca del producto"));
fabricante=(prompt("Ingrese el fabricante del producto"));

switch (tipo){
case "alcohol":
	acumAlcohol=acumAlcohol+cantidad;
	contadorAlcohol++;
if (flagAlcoholBarato==0 || precio<precioAlcoholBarato){
precioAlcoholBarato=precio;
fabricanteAlcoholBarato=fabricante;
cantidadAlcoholBarato=cantidad;
	flagAlcoholBarato=1;
}
	break;
case "barbijo":
	acumBarbijo=acumBarbijo+cantidad;
	contadorBarbijo++;
break;
case "jabon":
	acumJabon=acumJabon+cantidad;
	contadorJabon++;
break;
}//fin switch	

}//fin for

if (acumAlcohol>acumBarbijo && acumAlcohol>acumJabon){//el tipo c mas unidades
productoMasUnidades="alcohol"
promedio=acumAlcohol/contadorAlcohol;
}else if (acumJabon>acumBarbijo && acumJabon>acumAlcohol){
	productoMasUnidades="jabon"
	promedio=acumJabon/contadorJabon;
}else{
	productoMasUnidades="barbijo"
promedio=acumBarbijo/contadorBarbijo;
}
if (tipo=="alcohol"){
console.log ("A. El alcohol mas barato sale: " + precioAlcoholBarato + " y su fabricante es: " + fabricanteAlcoholBarato + " y su cantidad es: " + cantidadAlcoholBarato)
}else{
console.log("A.No se ingreso alcohol")
}
console.log ("B. El producto con mas unidades es: " + productoMasUnidades + "y el promedio por compra es: " + promedio);
console.log ("C.La cantidad de jabones ingresados es: " + acumJabon)
}
//fin funcion

/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra(precio/cant unid)
c) Cuántas unidades de jabones hay en total(cacumulador jabones)
function mostrar(){
	let tipo;
	let precio;
	let marca;
	let cantidad;
	let fabricante;
	let promedioCompra;
	let precioAlcoholBarato;//del alcohol:
	let cantidadAlcoholBarato=0
	let fabricanteAlcoholBarato;
	let flagAlcohol=0
	let tipoMayorCantidad;
	let acumBarbijo=0
	let acumAlcohol=0
	let acumJabon=0
	let contadorAlcohol=0
	let contadorJabon=0
	let contadorBarbijo=0
//generar un bucle q itere 5 veces(for porq se de ante mano las repeticiocnes)pido los datos de c producto(tipo,cantidad,precio,marca,fabricante) y validar datos
	 for (let i=0; i<5; i++){//es un bloque q se va a ejecutar 5 veces
	 tipo= prompt('Ingrese un producto de prevencion de contagio:"barbijo","jabon" o "alcohol"');
	 while(!(tipo=="barbijo" || tipo =="alcohol" || tipo=="jabon")){//lo valido
         tipo=prompt('Tipo invalido."barbijo","jabon" o "alcohol"')
	 }
	 precio=parseInt(prompt("Ingrese el precio del producto"));
	 while (!(precio>=100 && precio<=300)){
		precio=parseFloat(prompt ("Precio invalido.Ingrese un precio entre 100 y 300"));
	 }
	 cantidad=parseInt(prompt("Ingrese la cantidad max 1000 unidades"));
	 while (!(cantidad>0 && cantidad<=1000)){
		cantidad=parseInt(prompt("Cantidad invalida"));
	 }
     marca=prompt("Ingrese la marca");
	 fabricante=prompt("Ingrese el fabricante");	 

	//hasta aca pedi y valide los datos.
	switch (tipo){
		case "alcohol":
			acumAlcohol = acumAlcohol+cantidad;
			contadorAlcohol++;
	if (flagAlcohol==0 || precio<precioAlcoholBarato){//para guardar el mas barato y cantidad precio y fabricante
	precioAlcoholBarato=precio;
	cantidadAlcoholBarato=cantidad;
	fabricanteAlcoholBarato=fabricante;
	flagAlcohol=1;
	}
	break;
		case "barbijo":
			acumBarbijo = acumBarbijo+cantidad;
			contadorBarbijo++;
	break;
		case "jabon":
			acumJabon=acumJabon+cantidad;
			contadorJabon++;
	break;
	}
	}//fin del for	//ahora hago calculos q se realizan una sola vez y me tengo q fijar cual es el acumulador mayor,si es el de barbijos,jabones o alcoholes
if (acumAlcohol>acumBarbijo  && acumAlcohol > acumJabon){
tipoMayorCantidad="Alcohol";
promedioCompra=acumAlcohol/contadorAlcohol;
}else if(acumBarbijo>= acumAlcohol && acumBarbijo > acumJabon ){
tipoMayorCantidad= "Barbijo";
promedioCompra= acumBarbijo/contadorBarbijo;
}else{
tipoMayorCantidad="Jabon";
promedioCompra=acumJabon/contadorJabon;
}
//muestro la info
	//a 
if (flagAlcohol==0){
	alert ("A.No se compro alcohol");
}
else{
	alert ("A. Datos alcohol barato:\nFabricante " + fabricanteAlcoholBarato + "\nCantidad" + cantidadAlcoholBarato + "\nPrecio:" +precioAlcoholBarato);   //barra invertida n nueva linea 
}
//b

alert ("B- Tipo con mas unidades: " + tipoMayorCantidad + " y el promedio de compra es: " + promedioCompra);
//c

	alert ("C-Cantidad de jabones: " + acumJabon);
}*/