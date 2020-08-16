//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
function mostrar()
{
    let precio;
    let porcetajedesc;
    let precioFinal;
    
    precio=parseFloat(prompt("Por favor ingrese el precio"));
    while (isNaN(precio) || precio<=0){
    precio=parseFloat(prompt("ERROR.Por favor reingrese el precio"));
    }
    porcetajedesc=parseFloat(prompt("Por favor ingrese el porcentaje de descuento"));
    while (isNaN(porcetajedesc) || porcetajedesc<=0){
    porcetajedesc=parseFloat(prompt("ERROR.Por favor reingrese el porcentaje de descuento"));
    }    
    precioFinal=precio - (precio*porcetajedesc/100);
    document.getElementById("elPrecioFinal").value=precioFinal
}