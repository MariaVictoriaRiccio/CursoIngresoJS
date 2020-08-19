/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y
 temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
let nombre;
let edad;
let sexo;
let estadoCivil;
let temperatura;
let seguir;
let temperaturaMax;
let flagMaxTemp=0;
let nombreTempMax;
let contadorViudos=0;
let contadorViudosMayores=0;
let contadorSolteros=0;
let promedio;
let contadorTemp38=0;
let acumEdad=0;
//pido datos hasta que el usuario quiera, ingresa datos y valido.
do{
nombre=prompt("Ingrese el nombre del pax");
while (!isNaN(nombre)){
nombre=prompt("ERROR.Reingrese el nombre del pax");
}
edad=parseInt(prompt("Ingrese la edad del pax"));
while (edad<0 || edad>120){
edad=parseInt(prompt("ERROR.Reingrese la edad del pax"));
}
sexo=prompt("Ingrese el sexo del pax, m o f");
while (sexo!="m" && sexo!="f"){
sexo=prompt("ERROR.Reingrese el sexo del pax, m o f");
}
estadoCivil=prompt("Ingrese estado civil");
while (estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo"){
estadoCivil=prompt("ERROR.Reingrese estado civil: soltero,casado o viudo");
}
temperatura=parseFloat(prompt("Ingrese la temperatura del pax"));
while (temperatura<0 || temperatura>60 || isNaN(temperatura)){
temperatura=parseFloat(prompt("ERROR.Reingrese la temperatura del pax"));
}

//a.nombre de la persona con mas temp
if (flagMaxTemp==0 || temperatura>temperaturaMax){
temperaturaMax=temperatura
nombreTempMax=nombre;
flagMaxTemp=1;
}
//b Cuantos >18 estan viudos.
if (edad>18 && estadoCivil=="viudo"){
	contadorViudos++;
}
//c.cant de hombres solteros,y cantidad de hombres viudos
if (sexo=="m"){
if (estadoCivil=="soltero"){
	contadorSolteros++;
	acumEdad=acumEdad+edad;
}if(estadoCivil=="viudo"){
	contadorViudosMayores++;
}
}//d.pax de mas de 60 años tienen mas de 38 de temperatura
if (temperatura>38 && edad>=60){
contadorTemp38++;
}
seguir=prompt("Desea seguir ingrsando pasajeros?");
}while (seguir=="si");
//e
promedio=acumEdad/contadorSolteros;

console.log ("A.El nombre de la persona con mas temp es: " + nombreTempMax + " y su temp es de: " + temperaturaMax);
console.log ("B. La cantidad de personas mayores de 18 que estan viudos es: " + contadorViudos);
console.log ("C. La cantidad de hombres solteros es: " + contadorSolteros + " y la cantidad de viudos: " + contadorViudosMayores);
console.log ("D. Cantidad de pasajeros mayores de 60 años tienen mas de 38 de temperatura: " + contadorTemp38 );
console.log ("E. El promedio de edad de los hombres solteros es:  " + promedio);
}//fin funcion

























/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y
 temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let soltero;
	let contadorViudos=0;
	let temperatura;
	let flagTemperatura=0;
	let temperaturaMax;
	let seguir;
	let mayoresMastemp=0;
	let contadorsolteros=0;
	let promedioSolteros;
	let sumaSolteros=0
	let nombreTempMax;
	let edadSolteros=0;
do {
	nombre=prompt("Ingrese su nombre");
	edad=parseInt(prompt("Ingrese su edad"));
	sexo=prompt("Ingrese su sexo")
	while(sexo!="f" && sexo !="m"){
	sexo=prompt("Reingrese sexo: f o m")
}
	estadoCivil=prompt("Ingrese su estado civil: soltero,casado o viudo");
	while (estadoCivil !="viudo" && estadoCivil !="soltero" && estadoCivil !="casado"){
	estadoCivil=prompt("Reingrese estado civil")
}
	temperatura=parseInt(prompt("Ingrese su temperatura"));

	if (flagTemperatura==0 || temperatura>temperaturaMax){
		temperaturaMax=temperatura;
		nombreTempMax=nombre;
		flagTemperatura=1
	}
	if (estadoCivil=="viudo" && edad>18){
	contadorViudos++;
	}
	if(edad>60 && temperatura>38){
	mayoresMastemp++;
	}
	if (estadoCivil=="soltero" && sexo== "m"){
	soltero=sumaSolteros+soltero;
	contadorsolteros++;
	edad=edadSolteros+edad;
edadSolteros=edad;
}
	seguir=prompt("Desea ingresar mas datos?");
}while (seguir=="SI");

promedioSolteros=edadSolteros/contadorsolteros;

console.log("A.La temperatura maxima es : " + temperaturaMax + "y el nombre de la persona es: " + nombreTempMax);
console.log("B.Hay " + contadorViudos + "viudos y mayores de edad");
console.log ("C. LA cantidad de hombres solteros es; " + contadorsolteros + "y viudos" + contadorViudos);
console.log("D. Tienen mas de 60 anios y mas de 38 de temperatura " + mayoresMastemp + "personas");
console.log ("E. El promedio de edad de hombres solteros es: " + promedioSolteros)
}*/