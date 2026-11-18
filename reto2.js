const ventas = [
  { id: 1, fecha: "2026-09-01", cliente: "C01", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 2, precio: 42000 },
  { id: 2, fecha: "2026-09-01", cliente: "C02", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 1, precio: 26000 },
  { id: 3, fecha: "2026-09-02", cliente: "C03", producto: "Prensa francesa", ciudad: "Cali", cantidad: 1, precio: 95000 },
  { id: 4, fecha: "2026-09-02", cliente: "C01", producto: "Origen Huila 500 g", ciudad: "Medellín", cantidad: 1, precio: 42000 },
  { id: 5, fecha: "2026-09-03", cliente: "C04", producto: "Origen Sierra 500 g", ciudad: "medellín", cantidad: 3, precio: 45000 },
  { id: 6, fecha: "2026-09-03", cliente: "C05", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 2, precio: 26000 },
  { id: 7, fecha: "2026-09-04", cliente: "C02", producto: "Molino manual", ciudad: "Bogotá", cantidad: 1, precio: 120000 },
  { id: 8, fecha: "2026-09-04", cliente: "C06", producto: "Origen Huila 500 g", ciudad: "Cali", cantidad: 0, precio: 42000 },
  { id: 9, fecha: "2026-09-05", cliente: "C03", producto: "Origen Sierra 500 g", ciudad: "Cali", cantidad: 2, precio: 45000 },
  { id: 10, fecha: "2026-09-05", cliente: "C07", producto: "Origen Huila 500 g", ciudad: "Pereira", cantidad: 4, precio: 42000 },
  { id: 11, fecha: "2026-09-06", cliente: "C01", producto: "Prensa francesa", ciudad: "Medellín", cantidad: 1, precio: 95000 },
  { id: 12, fecha: "2026-09-06", cliente: "C08", producto: "Origen Nariño 250 g", ciudad: "Bogotá", cantidad: 3, precio: 26000 },
];

const valorVenta = (venta) => venta.cantidad * venta.precio;

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
  let resultado = [];

  for (const venta of ventas) {
    if (venta.ciudad.toLowerCase().trim() === ciudad.toLowerCase().trim()) {
      resultado.push(venta);
    }
  }

  return resultado;
}

console.log("=== REPORTE CAFÉ ORIGEN ===");

console.log("Total vendido:", totalVendido(ventas));

console.log("Unidades vendidas:", unidadesVendidas(ventas));

console.log("Venta de mayor valor:", ventaMayor(ventas));

console.log("Ticket promedio:", ticketPromedio(ventas));

console.log("Ventas en Medellín:", ventasPorCiudad(ventas, "Medellín"));