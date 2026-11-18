const productos = [
  "Origen Huila 500 g",
  "Origen Nariño 250 g",
  "Prensa francesa",
  "Origen Sierra 500 g",
  "Molino manual"
];

const precios = [
  42000,
  26000,
  95000,
  45000,
  120000
];

const ciudades = [
  "Medellín",
  "Bogotá",
  "Cali",
  "Pereira"
];

function generarVentas(n) {
  let ventas = [];

  for (let i = 0; i < n; i++) {

    let producto = Math.floor(Math.random() * productos.length);
    let ciudad = Math.floor(Math.random() * ciudades.length);
    let cantidad = Math.floor(Math.random() * 5) + 1;
    let cliente = Math.floor(Math.random() * Math.max(1, Math.floor(n / 3))) + 1;

    let venta = {
      id: i + 1,
      fecha: "2026-09-01",
      cliente: "C" + cliente,
      producto: productos[producto],
      ciudad: ciudades[ciudad],
      cantidad: cantidad,
      precio: precios[producto]
    };

    ventas.push(venta);
  }

  return ventas;
}

module.exports = { generarVentas };