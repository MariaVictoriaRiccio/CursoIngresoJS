/*Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.*/
/*function mostrar(){
let seguir="si"//hay q inicializar la var de control, para q la cond q le pusimos la pase o no 
let numero;
let suma=0//acumulador, va acumulando los valores de los num q ingreso
let i=0//contador, va contando la cant de numeros q ingreso
let promedio;

while (seguir=="si"){
numero=parseInt(prompt("Ingrese un numero"));
suma=numero+suma;
i++;
    
seguir=prompt("Desea ingresar otro numero?");
}
promedio=suma/i;

document.getElementById("txtIdSuma").value=suma;
document.getElementById("txtIdPromedio").value=promedio;
}
cuando quiero hacer un codigo repetitivo q si o si se ejecute una vez al menos
se utiliza un bloque: do while
do{se va a ejecutar si o si y si la cond es V en while, se volvera a ejecutar todo el bloque desde aca

}while(condicion);

}termina con la llave de cierre de la funtion

*/
function mostrar(){
let seguir;//no es necesario inicializar la var de control 
let numero;
let suma=0//acumulador, va acumulando los valores de los num q ingreso
let i=0//contador, va contando la cant de numeros q ingreso
let promedio;
do{
numero=parseInt(prompt("Ingrese un numero"));
suma=numero+suma;
i++;
seguir=prompt("Desea ingresar otro numero?");
}while (seguir=="si");

promedio=suma/i;

document.getElementById("txtIdSuma").value=suma;
document.getElementById("txtIdPromedio").value=promedio;
}
