/*(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.*/
function mostrar(){
let dia;
dia=prompt("Ingrese un dia de la semana");

switch(dia){
case "sabado":
case "domingo":
    console.log ("Buen finde");
    break;
case "lunes":
case "martes":
case "miercoles":
case "jueves":
case "viernes":
console.log ("A trabajar");
break;
default:
alert ("No es un dia valido")
break;
}
}
