function valorVenta(venta) {
  return venta.cantidad * venta.precio;
}
function totalVendidoI(ventas, contador) {
  let total = 0;

  for (const venta of ventas) {
    contador.operaciones++;

    total += valorVenta(venta);
  }

  return total;
}
function ventaMayorI(ventas, contador) {
  if (ventas.length === 0) {
    return null;
  }

  let mayor = ventas[0];

  for (const venta of ventas) {
    contador.operaciones++;

    contador.operaciones++;

    if (valorVenta(venta) > valorVenta(mayor)) {
      mayor = venta;
    }
  }

  return mayor;
}
function totalPorCiudadI(ventas, contador) {
  let ciudades = {};

  for (const venta of ventas) {
    contador.operaciones++;

    let ciudad = venta.ciudad.toLowerCase().trim();

    contador.operaciones++;

    if (ciudades[ciudad] === undefined) {
      ciudades[ciudad] = 0;
    }

    ciudades[ciudad] += valorVenta(venta);
  }

  return ciudades;
}
function primeraVenta(ventas, contador) {
  contador.operaciones++;

  if (ventas.length === 0) {
    return null;
  }

  return ventas[0];
}

module.exports = {
  totalVendidoI,
  ventaMayorI,
  totalPorCiudadI,
  primeraVenta
};