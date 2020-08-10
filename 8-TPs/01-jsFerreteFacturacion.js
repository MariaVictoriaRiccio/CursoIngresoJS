/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultadoSuma;


    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    resultadoSuma = precio1 + precio2 + precio3;
    alert ("El resultado de la suma es $" + resultadoSuma.toFixed(2));
	
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;


    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
promedio = (precio1 + precio2 + precio3) / 3
alert ("El promedio es $" + promedio.toFixed(2))


}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let preciofinal;
    let suma;
    let iva;


    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma=precio1+precio2+precio3;

    iva=suma*21/100;
    preciofinal=suma+iva;

    alert ("El precio final es " + preciofinal.toFixed(2));
}