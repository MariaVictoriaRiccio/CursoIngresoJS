//al seleccionar un mes informar.
//si es Febrero: " Este mes no tiene más de 29 días."
//si NO es Febrero: "Este mes tiene 30 o más días
function mostrar()
{
	let mes;
	mes=document.getElementById("txtIdMes").value;
	switch (mes){
	case "Febrero":
		alert ("Este mes no tiene mas de 29 dias");
		break;
		default:
		alert ("Este mes tiene 30 o + dias");
}}
        //hay un case especial q se llama default: entra en el caso q no haya entrado a otro case, si llego hasta el default, cuanod quiero ejecutar algo en el caso q no haya entrado a alguno de los anteriores
        //default viene a ser como el else del final. 
        //ej aca: case -....break....default alert .
//if (mes=="Febrero"){
//  alert ("Este mes no tiene mas de 29 dias");
//}
//else{
    //alert ("Este mes tiene 30 o mas dias")//}