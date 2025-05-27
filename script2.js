//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
// me estrese profe
let personas = [];
let editando = -1;

function validar() {
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");

    let errorNombre = document.getElementById("errorNombre");
    let errorEdad = document.getElementById("errorEdad");

    let nombreValido = false;
    let edadValida = false;

    // Validar nombre
    if (nombre.value.trim().length < 3) {
        errorNombre.innerText = "El nombre debe tener al menos 3 caracteres.";
        nombre.style.backgroundColor = "red";
        nombre.style.color = "white";
    } else {
        errorNombre.innerText = "";
        nombre.style.backgroundColor = "green";
        nombre.style.color = "white";
        nombreValido = true;
    }

    // Validar edad
    let edadNumero = parseInt(edad.value);
    if (isNaN(edadNumero) || edadNumero < 18 || edadNumero > 99) {
        errorEdad.innerText = "La edad debe ser entre 18 y 99.";
        edad.style.backgroundColor = "red";
        edad.style.color = "white";
    } else {
        errorEdad.innerText = "";
        edad.style.backgroundColor = "green";
        edad.style.color = "white";
        edadValida = true;
    }

    // Si todo es válido
    if (nombreValido && edadValida) {
        if (editando === -1) {
            personas.push({
                nombre: nombre.value.trim(),
                edad: edadNumero
            });
        } else {
            personas[editando].nombre = nombre.value.trim();
            personas[editando].edad = edadNumero;
            editando = -1;
        }

        nombre.value = "";
        edad.value = "";
        nombre.style.backgroundColor = "";
        nombre.style.color = "";
        edad.style.backgroundColor = "";
        edad.style.color = "";

        mostrarTabla();
    }
}

function mostrarTabla() {
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";

    for (let i = 0; i < personas.length; i++) {
        let fila = "<tr>";
        fila += "<td>" + personas[i].nombre + "</td>";
        fila += "<td>" + personas[i].edad + "</td>";
        fila += "<td>";
        fila += "<button onclick='editar(" + i + ")'>Editar</button>";
        fila += "<button onclick='eliminar(" + i + ")'>Eliminar</button>";
        fila += "</td>";
        fila += "</tr>";

        cuerpoTabla.innerHTML += fila;
    }
}

function editar(index) {
    let persona = personas[index];
    document.getElementById("nombre").value = persona.nombre;
    document.getElementById("edad").value = persona.edad;
    editando = index;
}

function eliminar(index) {
    let confirmar = confirm("¿Estás seguro que querés eliminar este registro?");
    if (confirmar) {
        personas.splice(index, 1);
        mostrarTabla();
    }
}
