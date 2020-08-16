/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar(){
let ancho;
let largo;
let perimetro;

ancho=parseFloat(prompt("Ingrese el ancho del rectangulo"));
while (ancho<=0 || isNaN(ancho)){
ancho=parseFloat(prompt("ERROR!!!Reingrese el ancho del rectangulo"));
}
largo=parseFloat(prompt("Ingrese el largo del rectangulo"));
while (largo<=0 || isNaN(largo)){
largo=parseFloat(prompt("ERROR!!!Reingrese el largo del rectangulo"));
}
perimetro=2*(ancho+largo)
alert ("El perimetro del rectangulo es: " + perimetro );
}
