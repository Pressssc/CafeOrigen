const ventas = require("./datos");

function valorVenta(venta) {
  return venta.cantidad * venta.precio;
}
function totalVendido(ventas) {
  let total = 0;

  for (const venta of ventas) {
    total += valorVenta(venta);
  }

  return total;
}
function unidadesVendidas(ventas) {
  let unidades = 0;

  for (const venta of ventas) {
    unidades += venta.cantidad;
  }

  return unidades;
}

function ventaMayor(ventas) {
  if (ventas.length === 0) {
    return null;
  }

  let mayor = ventas[0];

  for (const venta of ventas) {
    if (valorVenta(venta) > valorVenta(mayor)) {
      mayor = venta;
    }
  }

  return mayor;
}

function ticketPromedio(ventas) {
  let total = 0;
  let cantidadVentas = 0;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total += valorVenta(venta);
      cantidadVentas++;
    }
  }

  if (cantidadVentas === 0) {
    return 0;
  }

  return total / cantidadVentas;
}
function ventasPorCiudad(ventas, ciudad) {
  let total = 0;

  for (const venta of ventas) {
    if (venta.ciudad.toLowerCase().trim() === ciudad.toLowerCase().trim()) {
      total += valorVenta(venta);
    }
  }

  return total;
}

module.exports = {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad
};


// p12v
console.log("=== ARREGLO COMPLETO ===");

console.log("Total vendido:", totalVendido(ventas));
console.log("Unidades vendidas:", unidadesVendidas(ventas));
console.log("Venta mayor:", ventaMayor(ventas));
console.log("Ticket promedio:", ticketPromedio(ventas));
console.log("Ventas en Medellín:", ventasPorCiudad(ventas, "Medellín"));


// Puv
console.log("\n=== UNA SOLA VENTA ===");

console.log("Total vendido:", totalVendido([ventas[0]]));
console.log("Unidades vendidas:", unidadesVendidas([ventas[0]]));
console.log("Venta mayor:", ventaMayor([ventas[0]]));
console.log("Ticket promedio:", ticketPromedio([ventas[0]]));
console.log("Ventas en Medellín:", ventasPorCiudad([ventas[0]], "Medellín"));


// pv
console.log("\n=== ARREGLO VACÍO ===");

console.log("Total vendido:", totalVendido([]));
console.log("Unidades vendidas:", unidadesVendidas([]));
console.log("Venta mayor:", ventaMayor([]));
console.log("Ticket promedio:", ticketPromedio([]));
console.log("Ventas en Medellín:", ventasPorCiudad([], "Medellín"));

//pc
console.log("\n=== PRUEBA DE CIUDAD ===");

console.log("Medellín:", ventasPorCiudad(ventas, " medellín "));