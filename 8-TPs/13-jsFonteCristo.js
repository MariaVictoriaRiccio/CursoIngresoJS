/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique 
las distintas cualidades de los números.
13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() {
    let numero;
    let contadorPares=0 	

    numero=document.getElementById("txtIdNumero").value;

    for (let i=0; i<numero; i++) {
    if (i %2 == 0){
        contadorPares++;
    }
     } 
     console.log("Desde el numero ingresado " + numero + " hasta el numero 0 hay " + contadorPares + "numeros pares");
    }

    function NumerosImpares() {
    let contadorImpares=0
    let numero;

    numero=document.getElementById("txtIdNumero").value;

    for (let i=0; i<numero; i++) {
    if (i %2 != 0){
    contadorImpares++;
            }
             } 
             console.log("Desde el numero ingresado " + numero + " hasta el numero 0 hay " + contadorImpares + "numeros impares");
            }

    function NumerosDivisibles() {
        let contadorDivisibles=0
        let numero;
    
        numero=document.getElementById("txtIdNumero").value;
    
        for (let i=1; i<100; i++) {
        if (numero%i==0){
        contadorDivisibles++;
                }
                 } 
                 console.log("Desde el numero ingresado " + numero + ",(y del 1 al 100) hay " + contadorDivisibles + "numeros divisibles");
                }
 function VerificarPrimo() {
 let numero;
 let contadorDivisores=0

    numero=document.getElementById("txtIdNumero").value;
    for (let i=1 ; i<=numero ;i++){

        if (numero % i ==0){
            contadorDivisores++;
        }
    }
    if (contadorDivisores !=2){
        console.log ("No es primo" + numero);
    
    }else{
    console.log ("Es primo" + numero);
    }
}