/*Al comenzar el juego generamos un número secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresarun número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.de no ser igual se debe informar si “falta…”  para llegar al número secreto  o 
//si “se pasó…”  del número secreto.*/
let numeroSecreto; //declaro arriba de las funcion es para q exista en las 2
let contadorIntentos=0;
let flag =0;xº

function comenzar() {
numeroSecreto=Math.round(Math.random()*99+1);  //Genero el número RANDOM entre 1 y 100
alert("Ya pensé un numero, trata de adivinar" );
document.getElementById("txtIdNumero").focus(); 
document.getElementById("txtIdIntentos").value=contadorIntentos;
flag = 1; //si presionan esto la bandera da 1, si no presionan comenzar, va a valer 0.
contadorIntentos=0;//para q cada vez q comience el juego, resetea el contador

}

function verificar(){
let numero; //lo declaro en verificar xq solo lo usare aca
if (flag == 0)
{//si flag esta en 0 es decir q no presiono comenzar y no me tira un numero entre 1 y 100, me da 0 o sea no presiono
alert ("Debes presionar primero el botón Comenzar")
}
  else {
  numero = parseInt(document.getElementById ("txtIdNumero").value); //toma el valor q le dio
  contadorIntentos++;//fuera de todo el if else if else xq quiero q se actualice en los 3
  document.getElementById("txtIdIntentos").value=contadorIntentos;

 if (numero==numeroSecreto){
  alert ("Usted es el ganador,en solo " + contadorIntentos +"intentos")
alert ("Precione Comenzar para volver a empezar")//si ya gana, tengo q volver s comenzar el juego 
flag =0;

}
  else if (numero>numeroSecreto){
alert ("Se pasó")
}
else {
  alert ("Le falta...")
}

document.getElementById("txtIdNumero").value="";
document.getElementById("txtIdNumero").focus(); //cuando el navegador ejecuta esa linea, toma foco, le pone el cursos dentro para que ya se pueda empezar a escribir
}
}
//contador de intentos : 3 dormas: contadorIntentos +=1(le suma 1 al contador de intentos)
//o contadorIntentos =contadorIntetos+1 o contadorIntetos++
//patrones de disenio, soluciones estandares a problemas estandares, aca tengo q colocar 
//que si no presiono funtion comenzar, no va a poder utilizar verificar entonces decirle un alert
//o sea, quiero saber si paso algo antes,si presiono algo antes o no.
//aca se usa variables banderas.(es como un buzon q tiene banderita, si se presiona o coloca algo se mueve la posicion de la bandera)
