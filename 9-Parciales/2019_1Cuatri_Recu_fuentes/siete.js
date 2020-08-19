/*Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , 
sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/

function mostrar(){
let bolsa;
let kilos;
let sabor;
let promediokilos;
let acumKilos=0;
let flagLiviano=0;
let saborliviano;
let menosKilos;
let contadorCarne=0;
let acumCarne=0;
let flagCarne=0;

for (i=0;i<10;i++){
bolsa=prompt("Ingrese la bolsa de alimento");
kilos=parseInt(prompt("Ingrese los kilos"));
while (kilos<0 && kilos>500){
kilos=parseInt(prompt("ERROR. Reingrese los kilos"));
}
sabor=prompt("Ingrese el sabor");
while (sabor!="carne" && sabor!="vegetales" && sabor!="pollo"){
    sabor=prompt("ERROR.Reingrese el sabor");

}//a promedio de kilos totales
acumKilos=acumKilos+kilos;
//b el mas liviano y su sabor
if (flagLiviano==0 || kilos<menosKilos){
    menosKilos=kilos;
    saborliviano=sabor;
    bolsaLiviana=bolsa;
    flagLiviano=1;
}if (sabor=="carne"){ //c.
    contadorCarne++;
    acumCarne=acumCarne+kilos;
}
}
promediokilos=acumKilos/10;
promedioCarne=acumCarne/contadorCarne;
console.log("A.El promedio de los kilos totales es: " + promediokilos)
console.log("B.La bolsa mas liviana es: " + bolsaLiviana + ".Su sabor es: " + saborliviano + " y los kilos son: " + menosKilos);
console.log("C.La cantidad de carne es: " +  contadorCarne + " y su promedio: " + promedioCarne)
}
