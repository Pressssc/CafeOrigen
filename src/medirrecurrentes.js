const ventas = require("./datos");

const { generarVentas } = require("./generador");

const { clientesRecurrentes } = require("./analitica");

console.log("=== CLIENTES RECURRENTES ===");

console.log(clientesRecurrentes(ventas));

const tamanos = [1000, 2000, 4000, 8000, 16000];


let resultados = [];

for (const n of tamanos) {

  let ventasPrueba = generarVentas(n);

  console.time("Tiempo " + n);

  let inicio = performance.now();

  clientesRecurrentes(ventasPrueba);

  let fin = performance.now();

  console.timeEnd("Tiempo " + n);

  let tiempo = fin - inicio;

  resultados.push({
    ventas: n,
    tiempoMs: tiempo.toFixed(2)
  });

}

console.log("\n=== TABLA DE TIEMPOS ===");

console.table(resultados);

//ultima medicion
let tiempo16000 = Number(resultados[4].tiempoMs);

// estimar para 100.000 ventas
let estimado100000 = tiempo16000 * (100000 / 16000) ** 2;

// estimar para 1.000.000 de ventas
let estimado1000000 = tiempo16000 * (1000000 / 16000) ** 2;

console.log("\n=== ESTIMACIONES ===");

console.log("100.000 ventas:", (estimado100000 / 1000).toFixed(2), "segundos");

console.log("1.000.000 ventas:", (estimado1000000 / 1000).toFixed(2), "segundos");


//comprobar 10000

if (estimado100000 < 120000) {

  console.log("\nProbando con 100.000 ventas...");

  let ventasGrandes = generarVentas(100000);

  console.time("Tiempo 100000");

  clientesRecurrentes(ventasGrandes);

  console.timeEnd("Tiempo 100000");

} else {

  console.log("\nNo se ejecuta la prueba de 100.000 ventas.");
  console.log("El tiempo estimado supera los 2 minutos.");

}