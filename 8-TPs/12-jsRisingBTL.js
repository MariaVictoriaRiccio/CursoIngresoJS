/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada 
e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () {
 	let edad;
 	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let legajo;
	let nacionalidad;

edad=parseInt(prompt("Ingrese su edad"));
while (!(edad>=18 && edad<=90)){
edad= prompt ("Edad invalida. Reingrese edad")
}document.getElementById("txtIdEdad").value=edad

sexo=(prompt("Ingrese su sexo"));
while (sexo !="F" && sexo !="M" && sexo !="m" && sexo !="f"){
sexo=prompt("Sexo invalido.Por favor reingrese el sexo");
}document.getElementById("txtIdSexo").value=sexo

estadoCivil=(prompt("Ingrese si es soltero colocando 1, casado colocando 2, divorciado colocando 3 y viudo colocando 4"));	 
while (!(estadoCivil==1 ||estadoCivil==2||estadoCivil==3||estadoCivil==4)){
estadoCivil=prompt("Por favor, reingrese un estado civil valido");
}document.getElementById("txtIdEstadoCivil").value=estadoCivil

sueldoBruto=parseInt(prompt("Ingrese su sueldo bruto"));
while (sueldoBruto<=800){
sueldoBruto=prompt("Favor ingrese sueldo bruto valido");
}document.getElementById("txtIdSueldo").value=sueldoBruto

legajo=parseInt(prompt("Ingrese su legajo de 4 digitos"));
while (!(legajo>=1000 || legajo<=9999)){
legajo=prompt("Favor ingrese un legajo valido");
}document.getElementById("txtIdLegajo").value=sueldoBruto

nacionalidad=(prompt("Ingrese su Nacionalidad, A: Argentino, E:Extranjero N:Nacionalizados"));
while (!(nacionalidad==A || nacionalidad==E || nacionalidad==N)){
nacionalidad=prompt("Favor ingrese nacionalidad valida");
}document.getElementById("txtIdNacionalidad").value=nacionalidad

}
