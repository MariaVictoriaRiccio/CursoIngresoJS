//al presionar el botón mostrar 10 repeticiones
 //con números ASCENDENTE, desde el 1 al 10

function mostrar(){
	for (let i =1; i<=10; i++){
		console.log(i);
	}
}


/*Nosotros para el bucle usamos while (condicion) y 
tenemos una variable de control i, q le ponemos un valor. 
Se evalua la condicion y en algun momento 
hay una modif dfe la variable de control i.
En for, es una estructura,un bucle que me acomoda las 3
caract en la misma linea (inicializacion,condicion,modif)

for (let i=0, i<5, i++)

es lo mismo q para while:

let i=0
while(i<5)
i++
El q usamos dependera de: el while cuando no conozco la cant de repeticiones (pedir numeros hasta q una suma hasta q de...)
y cuando conozco de antemano la cant de repet uso for(si tengo q pedir 5 veces...)
cuando quiero q el codigo se ejecute x lo menos 1 vez, do while(mientras el usuario quiera)
*/