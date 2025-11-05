
const estudiantes = ["gerson","esteban","david","vocero","maicol","miguel","erwin"];

while(estudiantes.length > 0){
    console.log(estudiantes);

    const betados = estudiantes.shift();
    console.log(estudiantes);
}


const componentes = ["televisor","teclado","mouse"];

console.log(componentes);

componentes.push("usb","celular","audifonos");

console.log(componentes);
    
let tel = [3001234567, 3122345678, 3113456789, 3204567890, 3175678901, 3146789012];

for (let i = 0 ; i < tel.length; i++){
    console.log(tel[i])
}


let hervivoro = ["conejo","venado","vaca","elefante","panda"];

hervivoro.forEach(i=>{
    console.log(i);
})



let novia = ["valentina","yurani","sofia"];

for (let novias of novia){console.log(`novias: ${novias}`)
}


