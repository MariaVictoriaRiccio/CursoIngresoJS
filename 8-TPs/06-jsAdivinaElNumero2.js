/*En esta oportunidad el juego evaluará tus aptitudes a partir de la cantidad de intentos, por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; //declaro arriba de las funcion es para q exista en las 2
let contadorIntentos=0;
let flag =0;

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
switch (contadorIntentos){
case 1:
	alert ("Usted es psiquico")
	break;
	case 2:
		alert ("Excelente percepción");
		break;
		case 3:
			alert ("Esto es suerte");
			break;
			case 4:
				alert ("Excelente tecnica");
				break;
				case 5:
					alert ("Usted esta en la media")
					break;
					case 6:
						case 7:
							case 8:
								case 9:
									case 10:
										alert ("Falta tecnica");
										break;
										     default:
										      	alert ("Afortunado en el amor")
} 
alert ("Presione Comenzar para volver a empezar")//si ya gana, tengo q volver s comenzar el juego 
flag =0;

}
  else if (numero>numeroSecreto){
alert ("Se pasó")
}
else {
  alert ("Le falta...")
}

document.getElementById("txtIdNumero").value="";
document.getElementById("txtIdNumero").focus(); 
}
}
