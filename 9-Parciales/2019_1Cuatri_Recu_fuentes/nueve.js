/*Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino*/

function mostrar()
{
let nombre;
let edad;
let sexo;
let notaFinal;
let seguir;
let contadorMaprobados=0;
let contadorNotasMenores=0;
let acumNotasMenores=0;
let acumNotasAdol=0;
let contadorNotasAdol=0;
let acumNotasMayores=0;
let contadorNotasMayores=0;
let contadorF=0;
let contadorM=0;
let acumNotasF=0
let acumNotasM=0
let promedioM;
let promedioF;
let promedioMenores;
let promedioMayores;
let promedioAdol;

do{
nombre=prompt ("Ingrese el nombre del estudiante");
edad=parseInt(prompt("Ingrese la edad"));
while (isNaN(edad) || edad<0 || edad>100){
    edad=parseInt(prompt("ERROR.Reingrese la edad"));
}
sexo=prompt("Ingrese el sexo");
while(sexo!="m" && sexo!="f"){
    sexo=prompt("ERROR.Reingrese el sexo");
}   
notaFinal=parseFloat(prompt("Ingrese la nota final del alumno"));
while (isNaN(notaFinal) || notaFinal<0 || notaFinal>10){
    notaFinal=parseFloat(prompt("ERROR.Reingrese la nota final del alumno"));
}
//a.la cantidad de m aprobados
if (sexo=="m" && notaFinal>6){
    contadorMaprobados++;
}
//b.el promedio de las notas de los menores de edad
if (edad<18){
contadorNotasMenores++;
acumNotasMenores=notaFinal+acumNotasMenores;
}
//c.promedio de adolesc 
if (edad>13 && edad<18){
  contadorNotasAdol++;
  acumNotasAdol=notaFinal+acumNotasAdol  
//d.promedio de mayores
}if (edad>18){
    contadorNotasMayores++;
    acumNotasMayores=acumNotasMayores+notaFinal
}
//e.promedio de m y f
if (sexo=="m"){
    contadorM++;
    acumNotasM=acumNotasM+notaFinal;
}else{
contadorF++;
acumNotasF=acumNotasF+notaFinal;
}
seguir=prompt("Desea ingresar mas alumnos?");
}while (seguir=="si");
promedioMenores=acumNotasMenores/contadorNotasMenores;
promedioAdol=acumNotasAdol/contadorNotasAdol;
promedioMayores=acumNotasMayores/contadorNotasMayores;
promedioF=acumNotasF/contadorF;
promedioM=acumNotasM/contadorM;
console.log ("A. La cantidad de m aprobados es: " + contadorMaprobados);
console.log ("B. El promedio de las notas de menores de edad es: " + promedioMenores);
console.log ("C. El promedio de las notas de los adolesc es: " + promedioAdol);
console.log ("D. El promedio de las notas de los mayores de edad es:  " + promedioMayores);
console.log ("E. El promedio de las notas de las mujeres es: " + promedioF + " y el de los varoes es: " + promedioM);
}