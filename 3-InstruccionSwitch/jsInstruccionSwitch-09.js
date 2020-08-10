function mostrar(){
//declaracion de variables
    let estacion; 
    let destino;
    let aumento=0;
    let descuento=0;
    let precioFinal;
    const PRECIO=15000;
//relevamiento de datos de entrada
    estacion = document.getElementById("txtIdEstacion").value;
    destino = document.getElementById("txtIdDestino").value;
//calculo de porcentajes de aumento o desc dpnde de estacion y destino
switch (estacion){
case "Invierno":
switch (destino){
    case "Bariloche":
        aumento=20;
       break;
    case "Mar del plata":
        descuento=20;
       break;
    case "Cataratas":
    case "Cordoba":
        descuento=10;
        break;
      } 
        break;
case "Verano":
switch (destino){
            case "Bariloche":
                descuento=20;
            break;
            case "Mar del plata":
                aumento=20;
            break;
            case "Cataratas":
            case "Cordoba":
                aumento=10;
             break;
             }
            break;
case "Otoño":    //podria usar deafault
case "Primavera":
switch (destino){
            case "Bariloche":
            case "Mar del plata":
            case "Cataratas":
                aumento = 10;
                break;              
}
break;
}//fin de switch de la estacion
//aplico desc o aument segun corresp pa conocer precio final
if (aumento!= 0){
  precioFinal=PRECIO+PRECIO*aumento/100;
}
else if (descuento !=0){ //sitenemos descuento
    precioFinal=PRECIO-PRECIO*descuento/100;
}
else {
    precioFinal= PRECIO
}
//mostramos la info obtenida al usuario
alert ("Precio Final $ " + precioFinal);
}//fin de la funcion

//una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
//en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
//en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
//en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
