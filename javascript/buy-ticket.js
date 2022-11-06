//declaracion de la constante: precio ticket
const valorTicket = 200;
//variables correspondiente a los descuentos por categoria
var desEstudiante = 80;
var desTrainee = 50;
var desJunior = 15;
//variables obtenidas por id desde html
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
//funcion para calculo de precio de tickets a comprar
function total_a_pagar()
{
    //llamada a la funcion para quitar el error del formulario
    quitarClaseError();

    if (categoria.value === "") {
        alert("seleccione una categoria valida");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
    //calculo del total a pagar por las entradas
    let totalValorT = (cantidad.value) * valorTicket;
    if (categoria.value == 0) {
        totalValorT = totalValorT;
    }
    if (categoria.value == 1) {
        totalValorT = totalValorT - (desEstudiante / 100 * totalValorT);
    }
    if (categoria.value == 2) {
        totalValorT = totalValorT - (desTrainee / 100 * totalValorT);
    }
    if (categoria.value == 3) {
        totalValorT = totalValorT - (desJunior / 100 * totalValorT);
    }
    //verificacion del formulario lleno
    if (nombre.value === "") {
        alert("verifique nombre");
        nombre.classList.add("is-invalid")
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        alert("verifique apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    if (email.value === "") {
        alert("verifique email");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }
    //verificacion de correo valido
    const emailValido = email => 
    {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    if(!emailValido(email.value))
    {
       alert("ingrese un email valido!");
       email.classList.add("is-invalid");
       email.focus();
       return ;
    }
    //verificacion para el rango de la cantidad de tickets
    if ((cantidad.value <= 0) || (isNaN(cantidad.value))) {
        alert("ingrese una cantidad valida");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }
    //devolucion del calculo del precio total de los tickets si los campos estan correctos
    totalPago.innerHTML = totalValorT;
}
//funcion para quitar el error del formulario
function quitarClaseError()
{
    let x = document.querySelectorAll(".form-control,.form-select")
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("is-invalid");
    }
}
//funcion para el boton de borrado
function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.innerHTML = "";
}
//captura de evento para el boton resumen (muestre el total a pagar por los tickets)
btnResumen.addEventListener("click", total_a_pagar);
//captura de evento para el boton borrar (borra todo el contenido del formulario)
btnBorrar.addEventListener("click", reset_total_a_pagar);