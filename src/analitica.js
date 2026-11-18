function valorVenta(venta) {
  return venta.cantidad * venta.precio;
}


// total vendido
function totalVendido(ventas) {
  let total = 0;

  for (const venta of ventas) {
    total += valorVenta(venta);
  }

  return total;
}


//unidades vendidas
function unidadesVendidas(ventas) {
  let unidades = 0;

  for (const venta of ventas) {
    unidades += venta.cantidad;
  }

  return unidades;
}


//venta de mayor valor
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


// ticket promedio
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


//total en una ciudad
function ventasPorCiudad(ventas, ciudad) {
  let total = 0;

  for (const venta of ventas) {
    if (venta.ciudad.toLowerCase().trim() === ciudad.toLowerCase().trim()) {
      total += valorVenta(venta);
    }
  }

  return total;
}

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


// total v en ciudad por metodos
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


// totalp ciudad
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


//u mas venvdidas
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


// Productos que mas dinero generaron
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

function ventasDelDia(ventas, fecha) {
  let resultado = ventas.filter(venta => {
    return venta.fecha === fecha;
  });

  return resultado;
}
// busca los clientes que compraron más de una vez
function clientesRecurrentes(ventas) {

  const recurrentes = [];

  for (let i = 0; i < ventas.length; i++) {

    for (let j = i + 1; j < ventas.length; j++) {

      if (ventas[i].cliente === ventas[j].cliente &&
          !recurrentes.includes(ventas[i].cliente)) {

        recurrentes.push(ventas[i].cliente);

      }
    }
  }

  return recurrentes;
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
  topProductosPorValor,
  ventasDelDia,
  clientesRecurrentes
};