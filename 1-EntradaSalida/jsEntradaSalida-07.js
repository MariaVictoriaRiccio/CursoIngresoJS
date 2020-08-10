/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	suma=numeroUno+numeroDos;
	alert ("El resultado de la suma es "+ suma);
	}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;
	numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	resta=numeroUno-numeroDos;
	alert ("El resultado de la resta es "+ resta);
	}

function multiplicar()
{ 
		let numeroUno;
		let numeroDos;
		let multiplicar;
		numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
		numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);
		multiplicar=numeroUno*numeroDos;
		alert ("El resultado de la multiplicacion es "+ multiplicar);
		}
function dividir()
	{
		let numeroUno;
		let numeroDos;
		let dividir;
		numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
		numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);
		dividir=numeroUno/numeroDos;
		alert ("El resultado de la division es "+ dividir);
		}
	
