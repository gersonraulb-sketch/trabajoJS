const fs = require("fs");
const ARCHIVO_DATOS = "datos.txt";

fs.readFile (ARCHIVO_DATOS, "UTF-8",
    (err, data)=>{
        console.log(data);
    }
)