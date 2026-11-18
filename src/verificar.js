const ventas = require("./datos");

const {
  totalVendido,
  unidadesVendidas,
  ventasPorCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor
} = require("./analitica");
//comparar total
if (totalVendido(ventas) === totalVendidoM(ventas)) {
  console.log("Total vendido: OK");
} else {
  console.log("Total vendido: DIFERENTE");
}
//comparar unidades v
if (unidadesVendidas(ventas) === unidadesVendidasM(ventas)) {
  console.log("Unidades vendidas: OK");
} else {
  console.log("Unidades vendidas: DIFERENTE");
}
//comparar ventas por ciudad
if (ventasPorCiudad(ventas, "Medellín") === ventasPorCiudadM(ventas, "Medellín")) {
  console.log("Ventas por ciudad: OK");
} else {
  console.log("Ventas por ciudad: DIFERENTE");
}

console.log("\n=== TOTAL POR CIUDAD ===");

console.log(totalPorCiudad(ventas));

console.log("\n=== UNIDADES POR PRODUCTO ===");

console.log(unidadesPorProducto(ventas));

console.log("\n=== TOP 3 PRODUCTOS ===");

console.log(topProductosPorValor(ventas, 3));


console.log("\n=== ORDEN ORIGINAL ===");

let ordenAntes = ventas.map(venta => venta.id).join(",");

topProductosPorValor(ventas, 3);

let ordenDespues = ventas.map(venta => venta.id).join(",");

if (ordenAntes === ordenDespues) {
  console.log("Orden original: OK");
} else {
  console.log("Orden original: DIFERENTE");
}