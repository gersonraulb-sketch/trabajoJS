const { error } = require("console");
const fs = require("fs");
const ARCHIVO_DATOS = "datos.txt";

fs.readFile (ARCHIVO_DATOS, "UTF-8", (error, datos)=>{
    if(error){
        console.error("error al leer", error);
    }
    const nuevocontenido = datos + new Date().toLocaleString();
    
    fs.writeFile(ARCHIVO_DATOS, nuevocontenido, (error)=>{
        if(error){
            console.error("error de", error);
        } else {
            console.log("archivo ediado");
        }
    });
});