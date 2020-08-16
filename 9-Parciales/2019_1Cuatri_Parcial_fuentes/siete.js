//Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
//el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
//a) El promedio de las alturas totales.
//b) La altura más baja y el sexo de esa persona.
//c) La cantidad de muheres que su altura supere los 190 centimetros
function mostrar(){
let altura;
let sexo;
let contadorMujeres=0;//contador
let promedio;
let acumAltura=0;//acumulador
let alturaMasBaja;
let sexoMasBajo;
let flagBaja=0;

for(let i=0;i<5;i++){
 altura=parseInt(prompt("Ingrese su altura expresada en cm"));
 while(altura<0 && altura>250){
 altura=parseInt(prompt("Altura invalida! Ingrese una altura entre 0 y 250"));
}
sexo=prompt("Ingrese F si es mujer y M si es varón".toLowerCase());
while(sexo!="f" && sexo !="m"){
sexo=prompt("Letra invalida! Ingrese F si es mujer y M si es varón".toLowerCase());
}
//a.
acumAltura+=altura;//es lo mismo  q acumAltura=acumAltura+ altura.//me suma el acumulador c altura

//b.
if(flagBaja==0 || altura<alturaMasBaja){//paso x aca, puso mujeres
    alturaMasBaja=altura;
    sexoMasBajo=sexo;
    flagBaja=1;
}
//c.
if(sexo=="f" && altura>190){
    contadorMujeres++//aca cuento la cantidad de mujeres 
}
}//cierro for

promedio=acumAltura/5;
alert("El promedio es "+promedio);
alert("La altura mas baja es "+alturaMasBaja+" y esa persona es "+sexoMasBajo);
alert("La cantidad de mujeres cuya altura es superior a 190cm es "+contadorMujeres);
}