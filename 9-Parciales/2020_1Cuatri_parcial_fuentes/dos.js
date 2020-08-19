
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pgar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
    let tipo;
    let cantidad;
    let cantidadBolsas;
    let cantidadTotalDeBolsas=0;
    let precioBolsa; 
    let seguir;
    let preciototalBruto=0;//sin desc
    let arenaPrecio;
    let arenaCantidad;
    let calPrecio;
    let calCantidad;
    let cementoPrecio;
    let cementoCantidad;
    let precioDescuentoQuince;
    let precioDescuentoTreinta;
    let tipoConMayorPrecio;
    let tipoConMayorCantidad;

do{
tipo=prompt("Favor, ingrese productos de construccion: CAL, CEMENTO o ARENA");
while (tipo!="CAL" && tipo!="CEMENTO" && tipo!="ARENA"){
tipo=prompt("Por favor, reingrese un producto valido: CAL, CEMENTO O ARENA");
}
cantidadBolsas=parseInt(prompt("Favor, ingrese cantidad de bolsas"));

precioBolsa=parseInt(prompt("Favor,ingrese precio de la bolsa"));

while (cantidadBolsas<0){
precioBolsa=parseInt(prompt("Favor,Reingrese precio de la bolsa mayor a 0"));
}   
switch (tipo) {
    case "arena":
      cantidadTotalDeBolsas += cantidad; //acumulador de las cant de bolsas ingresadas
      preciototalBruto += (precioBolsa * cantidad); //precio total sin desc
      arenaPrecio += precioBolsa; //acumulador de precios de la bolsa
      arenaCantidad += cantidad;
      break;
    case "cal":
      cantidadTotalDeBolsas += cantidad;
      preciototalBruto += (precioBolsa * cantidad);
      calPrecio += precioBolsa;
      calCantidad += cantidad;
      break;
    case "cemento":
      cantidadTotalDeBolsas += cantidad;
      preciototalBruto += (precioBolsa * cantidad);
      cementoPrecio += precioBolsa;
      cementoCantidad += cantidad;
      break;
  }
seguir=prompt("Desea ingresar mas productos?");
}while (seguir=="SI");

if (cantidadTotalDeBolsas >10){
    precioDescuentoQuince=preciototalBruto - (preciototalBruto*15)/100;
    }else if (cantidadTotalDeBolsas >30){
        precioDescuentoTreinta=preciototalBruto - (preciototalBruto*25)/100;
    }
    console.log ("Compraste mas de 30 bolsas, tenes 25% desc, y abonas: " + precioDescuentoTreinta);
    console.log ("Compraste mas de 10 bolsas, tenes 15% desc, y abonas: " + precioDescuentoQuince);


    if (arenaCantidad > calCantidad && arenaCantidad > cementoCantidad) {
        tipoConMayorCantidad = "Arena";
      } else if (calCantidad >= arenaCantidad && calCantidad > cementoCantidad) {
        tipoConMayorCantidad = "Cal";
      } else {
        tipoConMayorCantidad = "Cemento";
      }
      console.log ("El tipo con mayor cantidad es:" + tipoConMayorCantidad)

    
      if (arenaPrecio > calPrecio && arenaPrecio > cementoPrecio) {
        tipoConMayorPrecio = "Arena";
      } else if (calPrecio >= arenaPrecio && calPrecio > cementoPrecio) {
        tipoConMayorPrecio = "Cal";
      } else {
        tipoConMayorPrecio = "Cemento";
      }
      console.log ("El tipo con mayor precio es:" + tipoConMayorPrecio)

}//FIN FUNCION