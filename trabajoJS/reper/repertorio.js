const fs = require("fs");
const path = require("path");
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Ingresa tu nombre: ", (nombre) => {
  rl.question("Ingresa tu número: ", (numero) => {
    
    const datos = `Nombre: ${nombre}, Número: ${numero}\n`;
    const rutaArchivo = path.join(__dirname, "datos.txt");
    
    fs.appendFile(rutaArchivo, datos, (err) => {
      if (err) {
        console.error("Error escribiendo el archivo:", err);
      } else {
        console.log("Datos guardados correctamente!");
      }
      rl.close();
    });

  });
});

module.exports = {
}
