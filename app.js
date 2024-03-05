const ingresos = [new Ingreso("Sueldo", 2000), new Ingreso("Ventas", 1500)];

const egresos = [new Egreso("Renta", 700), new Egreso("Ropero", 400)];

let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

let totalIngresos = () => {
  let totalIngresos = 0;
  for (let ingreso of ingresos) {
    totalIngresos += ingreso.valor;
  }
  return totalIngresos;
};

let totalEgresos = () => {
  let totalEgresos = 0;
  for (let egreso of egresos) {
    totalEgresos += egreso.valor;
  }
  return totalEgresos;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();

  let procentaje = totalEgresos() / totalIngresos();

  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    foramatoPorcentaje(procentaje);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};
