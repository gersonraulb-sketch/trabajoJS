const productos = [
  { nombre: "Lapicero", precio: 1200 },
  { nombre: "Cuaderno", precio: 3500 },
  { nombre: "Regla", precio: 800 },
  { nombre: "Borrador", precio: 600 },
  { nombre: "Tajalápiz", precio: 700 },
  { nombre: "Marcador", precio: 2000 },
  { nombre: "Corrector", precio: 1500 },
  { nombre: "Cartulina", precio: 900 },
  { nombre: "Pegante", precio: 2500 },
  { nombre: "Carpeta", precio: 4000 }
];

const subtotal = productos.reduce((total, item) => total + item.precio, 0);

const iva = subtotal * 0.19;

const total = subtotal + iva;

console.log("========= FACTURA =========");
productos.forEach((p, i) => {
  console.log(`${i + 1}. ${p.nombre.padEnd(15)} $${p.precio.toFixed(2)}`);
});
console.log("===========================");
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`IVA (19%): $${iva.toFixed(2)}`);
console.log(`TOTAL:     $${total.toFixed(2)}`);


module.exports = {
}