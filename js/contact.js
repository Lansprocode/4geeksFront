/* Formulario Contact */
function validarFormulario(){

	var expRegNombre = /^[a-zA-Z\s]+$/i;
	var expRegEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
	var expRegTelefono = /^[0-9]+$/;

var enviar = true;
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var telefono = document.getElementById("telefono");

if (!nombre.value) {
	alert("Ingresa tu nombre por favor");
	enviar=false;
	nombre.focus();
} else if (!expRegNombre.exec(nombre.value)) {
	alert("Ingresa un nombre correcto por favor");
	enviar=false;
	nombre.focus();
} else if (!email.value) {
	alert("Debes ingresar un Email");
	enviar=false;
	email.focus();
} else if (!expRegEmail.exec(email.value)) {
	alert("Ingresa un email valido por favor");
	enviar=false;
	email.focus();
} else if (!telefono.value) {
	alert("Debes ingresar un numero");
	enviar=false;
	telefono.focus();
} else if (!expRegTelefono.exec(telefono.value)) {
	alert("Debes ingresar un numero valido");
	enviar=false;
	telefono.focus();
} else if (!mensaje.value) {
	alert("Debes escribir un mensaje");
	enviar=false;
	mensaje.focus();
} if (enviar == true) {
	document.formulario.submit();
}

}

window.onload=function() {
	var botonEnviar = document.getElementById('enviar');
	botonEnviar.onclick=validarFormulario;
}
