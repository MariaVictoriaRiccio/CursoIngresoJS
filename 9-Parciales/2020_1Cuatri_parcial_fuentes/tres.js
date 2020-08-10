
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
}