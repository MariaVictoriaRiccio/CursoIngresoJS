//A una pareja se le pide los datos para mostrar un mensaje 
//" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx "


function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let sumaKilos;
  let promedioKilos;

  nombre1=prompt("Por favor ingrese su nombre");
  nombre2=prompt("Por favor ingrese nombre de su pareja");
  peso1=parseInt(prompt("Por favor ingrese su peso"));
  peso2=parseInt(prompt("Por favor ingrese peso de su pareja"));

  sumaKilos= peso1+peso2;
  promedioKilos= sumaKilos/2
  alert ("Ustedes se llaman: "+nombre1 +"y" + nombre2 + "pesan: "+ peso1 +"y" +peso2 +",sumados son: " + sumaKilos + "y el promedio de peso es "   + promedioKilos);
}
