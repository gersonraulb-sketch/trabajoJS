class persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }


    saludar(){
        return `hola soy ${this.nombre}`;
    }

    cumplir(){
        this.edad ++;
        return this.edad;
    };
};

const persona1 = new persona("Juan", 30);

console.log(persona1.saludar());
console.log(persona1.edad);