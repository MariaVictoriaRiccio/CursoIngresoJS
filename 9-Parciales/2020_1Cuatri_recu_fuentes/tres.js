/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y
 temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar(){
let nombre;
let nacionalidad;
let edad;
let sexo;
let estadoCivil;
let temperatura;
let seguir;
let nacionalidadMasTemp;
let flagTemp=0;
let tempMax;
let contadorSolteros=0;
let contadorMujeresCasadas=0;
let contadorMujeresSolteras=0;
let contadorMujeresViudas=0;
let promedio;
let contadorMayores=0;
let acumEdad=0;

do {
nombre=prompt("Ingrese nombre del pax");
while (!isNaN(nombre)){
nombre=prompt("ERROR.Reingrese nombre del pax");
}
nacionalidad=prompt("Ingrese nacionalidad del pax");
while (!isNaN(nacionalidad)){
nacionalidad=prompt("ERROR.Reingrese nombre del pax");
}
edad=parseInt(prompt("Ingrese edad del pax"));
while (isNaN(edad) || edad<0 || edad>120){
edad=parseInt(prompt("ERROR.Reingrese edad del pax"));
}
sexo=prompt("Ingrese sexo: m o f");
while (sexo!= "m" && sexo!= "f"){
sexo=prompt("ERROR.Reingrese sexo: m o f");
}
estadoCivil=prompt("Ingrese estado civil: soltero,casado o viudo");
while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo"){
estadoCivil=prompt("ERROR.Reingrese estado civil: soltero,casado o viudo");
}
temperatura=parseFloat(prompt("Ingrese temperatura del pax"));
while (temperatura<0 || temperatura>50){
temperatura=parseFloat(prompt("ERROR.Reingrese temperatura del pax"));
}
//a.Nacionalidad de la persona con mas temperatura.
if (flagTemp==0 || temperatura>tempMax){
tempMax=temperatura;
nacionalidadMasTemp=nacionalidad;
    flagTemp=1;
}
//b. Cuantos mayores de edad( más de 17) estan solteros
if (edad>17 && estadoCivil=="soltero"){
contadorSolteros++;
}
//c. La cantidad de Mujeres que hay solteras o viudas. e)promedio edad mujeres casadas(coloco acum de edad y contador)
if (sexo=="f"){
    if (estadoCivil=="soltero"){
    contadorMujeresSolteras++;
    }else if (estadoCivil=="viudo"){
    contadorMujeresViudas++;
    }else{
        contadorMujeresCasadas++;
        acumEdad=acumEdad+edad;
    }   
}//d.mayores de 60 con mas de 38 temp
if (edad>=60 && temperatura>38){
contadorMayores++;
}
seguir=prompt("Desea continuar ingresando pax?");
}while (seguir=="si");
promedio=acumEdad/contadorMujeresCasadas;
console.log ("A. La nacionalidad de la persona con mas temperatura es : " + nacionalidadMasTemp);
console.log ("B. La cantidad de mayores de 17 que estan solteros es: " + contadorSolteros);
console.log ("C. La cantidad de mujeres solteras: " + contadorMujeresSolteras + " la cantidad de mujeres viudas es: " + contadorMujeresViudas);
console.log ("D.La cantidad de personas mayores de 60 años que tienen mas de 38 de temperatura son: " + contadorMayores);
console.log ("E. Promedio de edad de mujeres casadas es: " + promedio);
}