let j = 9;
while (j > 5){
    console.log(j)
    j--;
}

let i = ["juan","luis","camilo"];
while (i > 5){
    console.log(i)
    i--;
}

const fruta = ["naranja","piña","manzana","pera","limon"];

while(fruta.length > 0){
    const fruta4 = fruta.shift();
    console.log(fruta);

    console.log(fruta4)
}

let VAR = 1;

VAR--;

console.log(VAR); 


const frutas = ["naranja","piña","manzana","pera","limon"];
const basura = []

    console.log(frutas);

while(frutas.length > 1){
    basura = frutas.shift();
    console.log(frutas);

    frutas.pop();
    console.log(frutas);

frutas.push("mango","uva","kiwi");
    console.log(frutas);
    console.log(basura)
}


let fruta2 = ["naranja","piña","manzana","pera","limon"];

for (let i = 0 ; i < fruta2.length; i++){
    console.log(fruta2[i])
}



let fruta3 = ["naranja","piña","manzana","pera","limon"];

fruta3.forEach(i=>{
    console.log(i);
})



let fruta4 = ["naranja","piña","manzana","pera","limon"];

for (let fruta2 of fruta4){
    console.log(`fruta2: ${fruta2}`)
}
