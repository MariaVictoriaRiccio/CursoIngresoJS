/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar(){
let notas;
let sexo;
let promedio;
let acumNotas=0;
let contadorVarones=0;
let notaBaja;
let sexoBajo;
let flagNota=0;

for (i=0;i<5;i++){
    sexo=prompt("Por favor ingrese sexo m o f ");
while (sexo!="f" && sexo !="m"){
    sexo=prompt("ERROR!!! Por favor reingrese sexo m o f ");
}
notas=parseInt(prompt("Por favor ingrese la nota"));
while (notas<=0 || notas>10){
notas=parseInt(prompt("Por favor reingrese la nota valida"));    
}
acumNotas+= notas;
if (flagNota==0 || notas<notaBaja){
    notaBaja=notas;
    sexoBajo=sexo;
    flagNota=1;
}
if (sexo=="m" && notas>=6){
    contadorVarones++;
    }
}//fin for
if (acumNotas!=0){
promedio=acumNotas/5;
}
console.log("A.El promedio es: " + promedio)
console.log("B.La nota mas baja es: " + notaBaja + "y su sexo es: " + sexoBajo);
if (contadorVarones==0){
console.log("No se ingresaron varones");
}else{
console.log("C.La cantidad de varones que su nota ha sido >=6 es: " + contadorVarones);
}
}