

const form = document.getElementById("formulario");
const datosIn = document.getElementById("in_datos");
const listaDatos= document.getElementById("listaDatos");

// cargar datos
let datosGuardados = JSON.parse(localStorage.getItem("DatosRUD")) || [];







// agregar datos
  const AgregarDatos = (event) => {
    event.preventDefault();
    const nuevoDato = datos.value.trim();
    if (nuevoDato) {
        data.push(newData);
        dataInput.value = "";
        localStorage.setItem("crudData", JSON.stringify(data));
        renderList();
    }
};