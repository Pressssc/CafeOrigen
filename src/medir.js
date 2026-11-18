const { generarVentas } = require("./generador");

const {
  totalVendidoI,
  ventaMayorI,
  totalPorCiudadI,
  primeraVenta
} = require("./instrumentadas");

// cantidades a probar
const tamanos = [100, 1000, 10000, 100000];

// guardar
let resultados = [];

// recorrer cada tamañ0
for (const n of tamanos) {

  let ventas = generarVentas(n);

  let contadorTotal = { operaciones: 0 };
  let contadorMayor = { operaciones: 0 };
  let contadorCiudad = { operaciones: 0 };
  let contadorPrimera = { operaciones: 0 };

  totalVendidoI(ventas, contadorTotal);
  ventaMayorI(ventas, contadorMayor);
  totalPorCiudadI(ventas, contadorCiudad);
  primeraVenta(ventas, contadorPrimera);

  resultados.push({
    ventas: n,
    totalVendido: contadorTotal.operaciones,
    ventaMayor: contadorMayor.operaciones,
    totalPorCiudad: contadorCiudad.operaciones,
    primeraVenta: contadorPrimera.operaciones
  });
}

console.log("\n=== MEDICIÓN DE OPERACIONES ===");

console.table(resultados);