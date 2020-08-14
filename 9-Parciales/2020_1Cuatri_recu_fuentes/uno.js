/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar(){
	let tipo;
	let precio;
	let cantidad;
	let fabricante;
	let flagJabonCaro=0;
	let precioJabonCaro;
	let jabonCaroFabricante;
	let acumAlcohol=0;
	let acumBarbijo=0;
	let acumJabon=0;
	let contadorJabon=0;
	let contadorBarbijo=0;
	let contadorAlcohol=0;
	let acumMayor=0;
	let promedio;

for (let i=0;i<5 ;i++){
tipo= prompt ("Por favor ingrese el producto: barbijo, alcohol o jabon");
while (tipo!="barbijo" && tipo != "jabon" && tipo !="alcohol"){
	tipo=prompt("ERROR.Por favor, reingrese un producto: barbijo, alcohol o jabon")
}
precio=parseFloat(prompt("Por favor ingrese el precio entre  100 y 300 pesos"));
while (precio<100 || precio>300){
precio=parseFloat(prompt("ERROR.Por favor ingrese el precio entre  100 y 300 pesos"));
}
cantidad=parseInt(prompt("Por favor ingrese una cantidad del producto"));
while (!(cantidad>0 && cantidad<=1000)){
	cantidad=parseInt(prompt("ERROR.Ingrese una cantidad entre 0 y 1000"));
}
marca=prompt ("Ingrese la marca");
fabricante=prompt("Ingrese el fabricante"); 
/*switch(tipo):
case"alcohol:
contadorAlcohol++;
acumAlcohol+=cantidad
break;
case "barbijo":
	contadorBarbijo++;
	acumBarbijo+=cantidad
break;
	case "jabon"'
	contadorJAbon++;
	acumjabon+=cantidad	
if (flagJabonCaro==0 || precio>precioJabonCaro){
		precioJabonCaro=precio;
		acumJabon=+cantidad;
		jabonCaroFabricante=fabricante;
		flagJabonCaro=1;
	} */

if (flagJabonCaro==0 || precio>precioJabonCaro){
		precioJabonCaro=precio;
		acumJabon=+cantidad;
		jabonCaroFabricante=fabricante;
		flagJabonCaro=1;
	}
	//acumulo todos los tipos para desp ver cual es el q mas hay en la compra punto B
if (tipo=="barbijo"){
acumBarbijo+=cantidad;
}else if (tipo=="alcohol"){
acumAlcohol+=cantidad;
}else{
acumJabon+=cantidad;
}//comparo cual es el q mas tiene
contadorJabon++;
contadorBarbijo++;
contadorAlcohol++;

if (acumJabon>acumAlcohol && acumJabon>acumBarbijo){
acumMayor+=acumJabon;
promedio=acumJabon/contadorJabon;

}else if (acumAlcohol>acumJabon && acumAlcohol>acumBarbijo){
	acumMayor+=acumAlcohol
	promedio=acumAlcohol/contadorAlcohol;

} else{
	acumMayor+=acumBarbijo;
	promedio=acumBarbijo/contadorBarbijo;
}
}
	console.log ("A.El jabon mas caro sale: " + precioJabonCaro + " el fabricante es: " + jabonCaroFabricante + " y la cantidad de unidades: " + acumJabon);
	console.log ("B.El promedio es: " + promedio);
	console.log ("C.La cantidad de barbijos es: " + acumBarbijo);
}