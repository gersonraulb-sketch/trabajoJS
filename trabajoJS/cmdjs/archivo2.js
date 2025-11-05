let nombre = "jose";
let apellido = ["perez"];
let mensaje = "hola como esta";
let cedula = 12345678;

console.log(mensaje, nombre, apellido, "de cedula", cedula);
console.log(typeof nombre);
console.log(typeof apellido);
console.log(typeof cedula);

let mensaje2 ='no correas que "te caes"'

console.log(mensaje2)

let n1 = 6
let n2 = 1

let suma = n1 + n2
let resta = n1 - n2
let mult = n1 * n2
let div = n1 / n2

console.log("El resultado de la suma", suma);
console.log("El resultado de la resta", resta);
console.log("El resultado de la multiplicaion", mult);
console.log("El resultado de la division es", div);


let temperatura = 10;
if (temperatura >= 30){
    console.log("Esta caliente:", temperatura);
} else if(temperatura <= 20){
    console.log("Esta frio:", temperatura)
} else {
    console.log("Es normal:", temperatura)
}


let var1 = false;
let var2 = false;

if (var1 && var2 === true){
    console.log("verdadero");
} else if(var1 || var2 === true){
    console.log("verdadero");
} else {
    console.log("Falso")
}

let edad = 10;

let mensaje3 = edad > 18? "mayor de edad" : "menor de edad";

console.log(mensaje3)

if (edad >= 18){
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}
