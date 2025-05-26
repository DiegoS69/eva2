//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
// me estrese profe
function validar(){
    let nombre = document.getElementById("nombre")
    let vNombre = nombre.value
    let edad = document.getElementById("edad")
    let vEdad = edad.value

    let eNombre = document.getElementById("Hay un error en su nombre")
    let eEdad = document.getElementById("Hay un error en su edad")

    let validarNombre = validarnombre (nombre, vNombre, eNombre)
    let validarEdad = validaredad (edad, vEdad, eEdad)


}