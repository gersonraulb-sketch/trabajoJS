const fs = require("fs");
const ARCHIVO_DATOS = "datos.txt";

fs.unlink(ARCHIVO_DATOS, (err) =>{
  if(err) throw err,
    console.log("archivo eliminado");
})
    