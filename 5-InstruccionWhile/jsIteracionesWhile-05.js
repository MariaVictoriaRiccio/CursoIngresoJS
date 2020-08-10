/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar(){
let sexo;
sexo= prompt("Ingrese F o M");

while (sexo !="F" && sexo !="M" && sexo !="m" && sexo !="f"){
sexo=prompt("Sexo invalido.Por favor reingrese el sexo");
}
document.getElementById("txtIdSexo").value=sexo;
}//FIN DE LA FUNCIÓN
/*condicion: mientras el dato sea invalido (el sexo no sea ni f ni m)
o mientras el dato no sea valido (el sexo sea distinto de f o m)
*/