
// estudiantes
let estudiantes = 20;

let cantidad = estudiantes >= 20? "Puede continuar con la clase" : "No hay estudiantes suficientes"; 

console.log(cantidad)

if(estudiantes > 15){
    console.log("Puede continuar con al clase")
} else {
    console.log("No hay estudiantes suficientes")
}

// nivel

let nivel = 500;

let suf = nivel < 500? "Aun no puede proceder en el juego" : "Ya ha consegido el nivel necesario para continuar";

console.log(suf)

if(nivel < 500){
    console.log("Aun no puede proceder en el juego")
} else {
    console.log("Ya ha consegido el nivel necesario para continuar")
}

// familia

let familia = ["papá", "hermano", "tio"];

let reunion = familia.includes ("primo")? "Mi primo esta en la reunion" : "Mi primo no ha llegado por andar borracho";

console.log(reunion)

if(familia.includes ("primo")){
    console.log("Mi primo esta en la reunion")
} else {
    console.log("Mi primo no ha llegado por andar borracho")
}
