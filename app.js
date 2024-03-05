const ingresos = [new Ingreso("Sueldo", 2000), new Ingreso("Ventas", 1500)];

const egresos = [new Egreso("Renta", 700), new Egreso("Ropero", 400)];

let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};
