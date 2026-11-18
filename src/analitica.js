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

//reto3

// total v usando metodos
function totalVendidoM(ventas) {
  let valores = ventas.map(venta => valorVenta(venta));

  let total = valores.reduce((suma, valor) => suma + valor, 0);

  return total;
}


// unidades v usando metodos
function unidadesVendidasM(ventas) {
  let total = ventas.reduce((suma, venta) => {
    return suma + venta.cantidad;
  }, 0);

  return total;
}


// total v en ciudad usando metodos
function ventasPorCiudadM(ventas, ciudad) {
  let ciudadBuscada = ciudad.toLowerCase().trim();

  let resultado = ventas.filter(venta => {
    return venta.ciudad.toLowerCase().trim() === ciudadBuscada;
  });

  let total = resultado.reduce((suma, venta) => {
    return suma + valorVenta(venta);
  }, 0);

  return total;
}


// total v
function totalPorCiudad(ventas) {
  let ciudades = ventas.reduce((total, venta) => {

    let ciudad = venta.ciudad.toLowerCase().trim();

    if (!total[ciudad]) {
      total[ciudad] = 0;
    }

    total[ciudad] += valorVenta(venta);

    return total;

  }, {});

  return ciudades;
}


// unidades v
function unidadesPorProducto(ventas) {
  let productos = ventas.reduce((total, venta) => {

    let producto = venta.producto;

    if (!total[producto]) {
      total[producto] = 0;
    }

    total[producto] += venta.cantidad;

    return total;

  }, {});

  return productos;
}


// productos q mas generaron
function topProductosPorValor(ventas, k) {
  let productos = ventas.reduce((total, venta) => {

    let producto = venta.producto;

    if (!total[producto]) {
      total[producto] = 0;
    }

    total[producto] += valorVenta(venta);

    return total;

  }, {});

  let lista = Object.entries(productos);

  let copia = [...lista];

  copia.sort((a, b) => b[1] - a[1]);

  let primeros = copia.slice(0, k);

  let nombres = primeros.map(producto => producto[0]);

  return nombres;
}
module.exports = {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor
};


