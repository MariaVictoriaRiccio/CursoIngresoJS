//Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:"EXCELENTE" para notas igual a 9 o 10,"APROBÓ" para notas mayores a 4
//,"Vamos, la proxima se puede" para notas menores a 4 
function mostrar(){
let nota;
let maximo=10;
let minimo=1;
	nota = Math.round(Math.random()*(maximo-minimo)+minimo);
	if (nota==9 || nota==10){
	        alert ("Excelente. Su nota fue "+ nota);
	}else if (nota>=4){
		alert ("Aprobo. Su nota fue "+ nota);
	}else{
alert ("Vamos, la proxima se puede. Su nota es "+ nota);
}
}