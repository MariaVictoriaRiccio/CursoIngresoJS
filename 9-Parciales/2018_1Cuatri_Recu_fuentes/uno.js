/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar(){
let ancho;
let largo;
let perimetro;

ancho=parseFloat(prompt("Por favor, ingrese el ancho del rectangulo"));
while (isNaN(ancho)){
ancho=parseFloat(prompt("ERROR. Reingrese el ancho del rectangulo"));
}
largo=parseFloat(prompt("Por favor, ingrese el largo del rectangulo"));
while (isNaN(largo)){
largo=parseFloat(prompt("ERROR. Reingrese el largo del rectangulo"));
}
perimetro=(largo+ancho)*2;
alert ("El perimetro del rectangulo es: " + perimetro);

}
