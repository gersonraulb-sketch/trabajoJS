const fs = require("fs");
const ARCHIVO_DATOS = "datos.txt";

fs.writeFile(ARCHIVO_DATOS, "Hola mundo", 
  (err) => err? console.error(err):
  console.log("archivo creado")
);

module.exports = {
}