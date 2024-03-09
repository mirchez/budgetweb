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
const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const foramatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingresos) => {
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingresos.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingresos.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-outline" onclick='eliminarIngreso(${
                  ingresos.id
                })'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
  return ingresoHTML;
};

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingresos) => ingresos.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
};

const cargarEgresos = () => {
  let EgresosHTML = "";
  for (let egreso of egresos) {
    EgresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egreso").innerHTML = EgresosHTML;
};

const crearEgresoHTML = (egresos) => {
  let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egresos.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egresos.valor)}</div>
        <div class="elemento_porcentaje">${foramatoPorcentaje(
          egresos.valor / totalEgresos()
        )}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-outline" onclick='eliminarEgreso(${
                  egresos.id
                })'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
  return egresoHTML;
};

const eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egresos) => egresos.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

let agregarDato = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo.value === "egreso") {
      egresos.push(new Egreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarEgresos();
    }
  }
};
