## minireto 1
se exploraron los datos 
## minireto 2
# Bitácora – Café Origen

## MiniReto 2 – Indicadores de ventas con ciclos

### ¿Qué hice?

en este reto se trabajo con las 12 ventas de cafe origen. se uilizaron ciclos for of para recorrer los datos y hacer funciones que calculan el dinero vendido, las unidades, la venta mas grande, el ticket promedio y las ventas por ciudad

**Total vendido**
1. Crear una variable total que empiece en 0.
2. Recorrer todas las ventas.
3. Multiplicar la cantidad por el precio y sumar el resultado.
4. Devolver el total.

**Unidades vendidas**
1. Crear una variable unidades que empiece en 0.
2. Recorrer las ventas.
3. Sumar la cantidad de cada venta.
4. Devolver las unidades.

**Venta mayor**
1. Comprobar si el arreglo está vacío y devolver `null` si lo está.
2. Guardar la primera venta como la mayor.
3. Recorrer las ventas y comparar sus valores.
4. Si encuentro una venta más grande, guardarla.
5. Devolver el registro completo.

**Ticket promedio**
1. Crear un total y un contador, ambos en 0.
2. Recorrer las ventas.
3. Si la cantidad es mayor que 0, sumar el valor y aumentar el contador.
4. Si no hay ventas válidas, devolver 0.
5. Dividir el total entre el contador.

**Ventas por ciudad**
1. Crear una variable total en 0.
2. Recorrer las ventas.
3. Comparar las ciudades utilizando `toLowerCase()` y `trim()`.
4. Si coinciden, sumar el valor de la venta.
5. Devolver el total.

### Pruebas realizadas

Probé las funciones con las 12 ventas, con una sola venta y con un arreglo vacío.

| Función | Arreglo completo | Una venta | Arreglo vacío |
|---|---|---|---|
| Total vendido | 985000 | 84000 | 0 |
| Unidades vendidas | 21 | 2 | 0 |
| Venta mayor | ID 10 | ID 1 | null |
| Ticket promedio | 89545.45 | 84000 | 0 |
| Ventas por ciudad (Medellín) | 356000 | 84000 | 0 |

### Trazas manuales

**Traza 1: Total vendido**

| Venta | Valor de la venta | Total acumulado |
|---|---:|---:|
| 1 | 84000 | 84000 |
| 2 | 26000 | 110000 |
| 3 | 95000 | 205000 |
| 4 | 42000 | 247000 |
| 5 | 135000 | 382000 |
| 6 | 52000 | 434000 |
| 7 | 120000 | 554000 |
| 8 | 0 | 554000 |
| 9 | 90000 | 644000 |
| 10 | 168000 | 812000 |
| 11 | 95000 | 907000 |
| 12 | 78000 | 985000 |

Resultado: **985000**, igual al programa.

**Traza 2: Unidades vendidas**

| Venta | Cantidad | Total acumulado |
|---|---:|---:|
| 1 | 2 | 2 |
| 2 | 1 | 3 |
| 3 | 1 | 4 |
| 4 | 1 | 5 |
| 5 | 3 | 8 |
| 6 | 2 | 10 |
| 7 | 1 | 11 |
| 8 | 0 | 11 |
| 9 | 2 | 13 |
| 10 | 4 | 17 |
| 11 | 1 | 18 |
| 12 | 3 | 21 |

Resultado: **21 unidades**, igual al programa.

### Casos borde

- **Venta con cantidad 0:** no la cuento como una venta válida para el ticket promedio.
- **Ciudad escrita en minúscula:** utilizo `toLowerCase()` y `trim()` para reconocerla correctamente.
- **Arreglo vacío:** las funciones devuelven 0 y `ventaMayor()` devuelve `null` para evitar errores.

---

## MiniReto 3 – Métodos de arreglos y agrupaciones

### ¿Qué hice?

En este reto aprendí a utilizar métodos de arreglos para realizar operaciones que antes hacia con ciclos for of
Utilicé map(), filter() y reduce() para calcular los indicadores. También agrupe las ventas por ciudad y producto, y ordené los productos según el dinero que generaron (porfin entendi el reduce 😭)

### Las cinco preguntas sobre colecciones

| Función | ¿Qué recorro? | ¿Qué filtro? | ¿Qué transformo? | ¿Qué acumulo? | ¿Cómo agrupo? |
|---|---|---|---|---|---|
| `totalVendidoM` | Las ventas | Nada | Cada venta a su valor | El dinero | No agrupo |
| `unidadesVendidasM` | Las ventas | Nada | Obtengo la cantidad | Las unidades | No agrupo |
| `ventasPorCiudadM` | Las ventas | Una ciudad | Normalizo el nombre | El dinero | Por coincidencia de ciudad |
| `totalPorCiudad` | Las ventas | Nada | Normalizo las ciudades | El dinero | Por ciudad |
| `unidadesPorProducto` | Las ventas | Nada | Obtengo el producto | Las unidades | Por producto |
| `topProductosPorValor` | Las ventas | Los primeros k | Los productos y sus valores | El dinero por producto | Por producto |

### Pruebas realizadas

Creé el archivo `verificar.js` para comparar las funciones hechas con ciclos y las nuevas funciones con métodos.

Los resultados esperados de las comparaciones son:

```text
Total vendido: OK
Unidades vendidas: OK
Ventas por ciudad: OK
```

También comprobé los resultados de las agrupaciones.

**Total por ciudad**

| Ciudad | Total vendido |
|---|---:|
| Medellín | 356000 |
| Bogotá | 276000 |
| Cali | 185000 |
| Pereira | 168000 |

**Unidades por producto**

| Producto | Unidades |
|---|---:|
| Origen Huila 500 g | 7 |
| Origen Nariño 250 g | 6 |
| Prensa francesa | 2 |
| Origen Sierra 500 g | 5 |
| Molino manual | 1 |

**Top 3 productos por dinero generado**

| Posición | Producto | Total |
|---|---|---:|
| 1 | Origen Huila 500 g | 294000 |
| 2 | Origen Sierra 500 g | 225000 |
| 3 | Prensa francesa | 190000 |

### Decisiones tomadas

Para evitar que Medellín apareciera dos veces, convertí los nombres de las ciudades a minúsculas y eliminé los espacios sobrantes.

Para ordenar los productos, utilicé una copia del arreglo con `...` antes de aplicar `sort()`, evitando modificar el arreglo original.

### Conclusión

Con estos dos retos aprendí a calcular indicadores de ventas utilizando ciclos y después a obtener los mismos resultados con métodos de arreglos.

También entendí la importancia de revisar los datos antes de utilizarlos y de probar las funciones con diferentes entradas para evitar errores.