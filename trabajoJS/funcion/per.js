const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

rl.question("Ingresa tu nombre: ", (nombre)=> {
    rl.question("Ingresa tu apellido: ", (apellido) => {
        rl.question("Ingresa tu edad: ", (edad) => {
            const nuevapersona = new persona(nombre, apellido, edad);
            console.log("Datos de la persona: ", nuevapersona);
            rl.close();
        });
    });
});

