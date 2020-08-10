/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let perimetro;
let alambre;

largo=parseFloat(document.getElementById("txtIdLargo").value);
ancho=parseFloat(document.getElementById("txtIdAncho").value);
perimetro=(largo+ancho)*2;
alambre=perimetro*3;
alert ("Cantidad necesaria " + alambre + " metros de alambre");

}
function Circulo () 
{
 let radio;
 let perimetro; 
 let alambre;

 radio=parseInt(document.getElementById("txtIdRadio").value);

 perimetro = 2*radio*Math.PI; //math.es un cajon q me da constantes d mate y funciones.Ahi selecciono lo q necesito.
 //es lo mismo q declarar una const PI=3.14 y poner 2*radio*PI o tambien 2*radio*3,14. Es lo mismo.
 
 alambre = perimetro*3
 
 alert ("Cantidad necesaria"+alambre+"metros de alambre");

	
}
function Materiales () 
{
    let largo
    let ancho
    let area
    let bolsaCal
    let bolsaCemento

    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    area = largo*ancho;
    //hago regla de 3, para 1 mt 2 bolsas de cem, para area x bolsas
bolsaCal=area*3
bolsaCemento=area*2

alert ("Se necesitan " + bolsaCal + " bolsas de cal y " + bolsaCemento + " bolsas de cemento");

}