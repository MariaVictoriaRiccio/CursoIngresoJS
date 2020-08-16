/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/
function mostrar()
{
    let planeta;
    planeta=prompt("Ingrese un planeta del sistema solar");


    switch (planeta){
        case "tierra":
            console.log("Aca vivimos");
            break;
            case "mercurio":
            case "venus":
                console.log("Aca hace mas calor")
                break;
                case "marte":
                    case "jupiter":
                        case "saturno":
                            case "urano":
                                case "neptuno":
                                    console.log("Aca hace mas frio");
                                    break;
                                     default:
                    console.log ("No es un planeta valido");

    }

}
