
let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar(){
	let numero;
	numero=Math.round(Math.random()*2+1);

	if(numero == 1){
	eleccionMaquina = "Piedra";
	}
	else if (numero ==2){
	eleccionMaquina = "Papel";
	}
	else{
	eleccionMaquina = "Tijera";
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN
//pedimos q se ejecute la funcion mostrar resultado
//nos actualiza las cajas de texto
//alert (eleccionMaquina)//para probar, testing, nos muestra q eligio la maquina aleatoreamente0


function piedra(){//si caemos en esta funcion, es porq hicimos click en PIEDRA
let comoSalio;//declaro 1 var de como salio, q de acuerdo a lo q eligio la maquina y a lo q elegimos nosotros,
	if (eleccionMaquina =="Piedra"){//si la maquina eligio piedra
		 comoSalio = "Empate";//es empate
 ContadorDeEmpates++;
		}
	else if (eleccionMaquina =="Papel"){
	comoSalio = "Perdiste";
	ContadorDePerdidas++;
}
else{//si no eligio ni piedra ni papel, eligio tijera.
	comoSalio ="Ganaste";
	ContadorDeGanadas++;
}
	alert(eleccionMaquina + "--->" + comoSalio);
	mostrarResultado();
	comenzar();//para q el flujo del programa vuelva a comenzar, a func comenzar.
}//fin de la func 
function papel(){
	let comoSalio;
if (eleccionMaquina == "Piedra") {
	comoSalio = "Ganaste";
	ContadorDeGanadas++;
}
	else if (eleccionMaquina == "Papel"){
		comoSalio = "Empate";
		ContadorDeEmpates++;
	}
	else {
		comoSalio = "Perdiste";
		ContadorDePerdidas++;
	}
	alert(eleccionMaquina + "--->" + comoSalio);
	mostrarResultado();
	comenzar();
}
//FIN DE LA FUNC

function tijera(){
	let comoSalio;
if (eleccionMaquina == "Piedra") {
	comoSalio="Perdiste";
	ContadorDePerdidas++;
}
	else if (eleccionMaquina=="Papel"){
		comoSalio="Ganaste";
		ContadorDeGanadas++;
	}
	else {
		comoSalio="Empate";
		ContadorDeEmpates++;
	}        
	alert(eleccionMaquina + "--->" + comoSalio);
	mostrarResultado();
	comenzar();
}	
function mostrarResultado() {
//en el html veo los input,y busco los id de las cajas de texto
document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
}