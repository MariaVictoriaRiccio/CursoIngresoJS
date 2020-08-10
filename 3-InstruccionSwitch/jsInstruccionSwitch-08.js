function mostrar()
//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
{
	let destino;
	destino=document.getElementById("txtIdDestino").value;
	switch(destino){
case "Cataratas":
	case "Mar del plata":
	alert ("Hace calor");
	break;
	case "Ushuaia":
		case "Bariloche":
			alert ("Hace frio");
	}
}
/*con if:
if (destino == Bariloche || destino == Ushuaia);{   
    alert ("Hace frio")
}
else { 
    alert ("hace calor")
*/