/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”)
de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar(){
let nota;
let sexo;
let acumNotas=0;
let flagNotaBaja=0;
let notaBaja;
let sexoBajo;
let contadorV=0;
let contadorNotas=0;

for (i=0;i<5;i++){
nota=parseInt(prompt("Ingrese su nota"));
while (isNaN(nota)){
    nota=parseInt(prompt("ERROR.Reingrese su nota"));
}
sexo=prompt("Ingrese su sexo");
while (sexo!="f" && sexo!="m"){
    sexo=prompt("ERROR.Reingrese su sexo");
}
//a el promedio de las notas totales
acumNotas=acumNotas+nota;
contadorNotas++;
//b la nota mas baja y el sexo de la persona
if (flagNotaBaja==0 || nota<notaBaja){
    notaBaja=nota;
    sexoBajo=sexo;
    flagNotaBaja=1;
}
//c cant de varones nota >=6
if (sexo == "m" && nota>=6){
    contadorV++;
}
}
promedio=acumNotas/contadorNotas;
alert ("A. EL PROMEDIO DE LAS NOTAS ES: " + promedio);
alert ("B. LA NOTA MAS BAJA ES: " + notaBaja + " Y EL SEXO ES: " + sexoBajo);
alert ("C. LA CANTIDAD DE VARONES CON NOTA MAYOR E IGUAL A 6 ES: " + contadorV);
}
