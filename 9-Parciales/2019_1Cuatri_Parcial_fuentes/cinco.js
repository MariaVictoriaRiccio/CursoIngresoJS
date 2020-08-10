//una empresa de viajes le solicita ingresar que continente le gustaria visitar
//y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
//Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
//Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
//Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10%
// y cualquier otro medio 5%
//cualquier otro continente tiene un recargo del 20%
function mostrar()
{
    let continente;
    let precioDia=100
    let descuento;
    let aumento;
    let precioFinal;
    let mercadoPago;
    let efectivo;
    let otroMedio;
    let DescDebito;
    let precioConDebito;
    let precioMercadoPago;
continente=document.getElementById("Marca").value;
    
switch (continente){
    case "América":
    descuento=50;
    DescDebito=10;
        precioFinal=precioDia-precioDia*descuento/100;
        precioConDebito=precioDia-precioDia*DescDebito/100 - precioFinal;
        console.log ("El precio final de America con descuento por dia es:$ " + precioFinal + " y con debito:$ " + precioConDebito);    
   break;
    case "África":
    descuento=60;
    mercadoPago=15;
    efectivo=15;
        precioFinal=precioDia-precioDia*descuento/100;
        precioMercadoPago=precioFinal - precioDia*mercadoPago/100;
        console.log ("El precio de Africa con descuento es:$ " + precioFinal + " .Abonando con MercadoPago o efectivo:$ " + precioMercadoPago); 
    break;
    case "Europa":
    descuento=20;
    DescDebito=15;
    mercadoPago=10;
    otroMedio=5;
    precioFinal= precioDia-precioDia*descuento/100;
    precioConDebito= precioFinal - precioDia*DescDebito/100;
    precioMercadoPago= precioFinal - precioDia*mercadoPago/100;
    precioOtromedio= precioFinal - precioDia*otroMedio/100;
    console.log ("El precio de Europa con descuento es:$ " + precioFinal + " .Abonando con MercadoPago:$ " + precioMercadoPago + ".Con debito el precio es $: " + precioConDebito + "Y con otros medios de pago:$ " + precioOtromedio);                 
    break;
    default:
        aumento=20;
        
    precioFinal=precioDia+precioDia*aumento/100;
      console.log ("El precio con un un aumento del 20% es:$ " + precioFinal);
        break;
}//fin switch
}