/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.*/

let eleccionMaquina;//lamaquina va a tener su num 1,2 o 3 guardado en esa variable

function comenzar(){
    eleccionMaquina=Math.round(Math.random ()*2+1);
}
function piedra(){//si yo pulso piedra
if (eleccionMaquina== 1){
    alert ("Empate");
}
else if (eleccionMaquina==2){
    alert ("Perdiste");
}
else {
    alert ("Ganaste")
}
}
function papel(){//si yo pulso papel
    if ( eleccionMaquina == 1) {
alert ("Ganaste");
}
else if (eleccionMaquina == 2){
    alert("Empate");
}
else {
alert ("Perdiste")
}
}
function tijera(){//si yo pulso tijera
        if ( eleccionMaquina == 1) {
        alert ("Perdiste");
        }
        else if (eleccionMaquina==2){
            alert("Ganaste");
        }
        else {
        alert ("Empate")
        }        
    }