
// Codigo de Formulario

function validarFormulario(){
	var enviar = true;
	var expRegNombre = /^[a-zA-Z\s]+$/i;
	var expRegApellido = /^[a-zA-Z\s]+$/i;
	var expRegDireccion = /^[a-zA-Z0-9\s]+$/i;
	var expRegEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
	var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z\-\.]+([a-z\.])+\.[a-z]{2,4}$/i;
	var expRegTelefono = /^[0-9]+$/;

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var direccion = document.getElementById("direccion");
	var email = document.getElementById("email");
	var url = document.getElementById("url");
	var telefono = document.getElementById("telefono");
	var mensaje = document.getElementById("mensaje");
	var formulario = document.getElementById("formulario");

	if (!nombre.value) {
		alert("Ingrese su nombre por favor");
		enviar=false;
		nombre.focus();
	} else if (!expRegNombre.exec(nombre.value)) {
		alert("El campo nombre solo acepta solo letras");
		enviar=false;
		nombre.focus();
	} else if (!apellido.value) {
		alert("Ingrese su apellido por favor.");
		enviar=false;
		apellido.focus();
	} else if (!expRegApellido.exec(apellido.value)) {
		alert("El campo apellido solo acepta letras");
		enviar=false;
		apellido.focus();
	} else if (!direccion.value) {
		alert("Ingrese su direccion por favor");
		enviar=false;
		direccion.focus();
	} else if (!expRegDireccion.exec(direccion.value)) {
		alert("Ingrese una direccion valida por favor");
		enviar=false;
		direccion.focus();
	} else if (!email.value) {
		alert("Ingrese su Email por favor");
		enviar=false;
		email.focus();
	} else if (!expRegEmail.exec(email.value)) {
		alert("Ingrese un email valido por favor");
		enviar=false;
		email.focus();
	} else if ((url.value!="") == !expRegUrl.exec(url.value)) {
		alert("Ingrese una direccion de URL valida por favor");
		enviar=false;
		url.focus();
	} else if (!telefono.value) {
		alert("Ingrese su numero de telefono");
		enviar=false;
		telefono.focus();
	} else if (!expRegTelefono.exec(telefono.value)) {
		alert("Ingrese un numero de telefono valido");
		enviar=false;
		telefono.focus();
	} else if (!mensaje.value) {
		alert("Que molleja tambien vais a dejar este vacio? llena toooodo necio! enviale un mensaje a Maduro!");
		enviar=false;
		mensaje.focus();
	} if (enviar == true) {
		document.formulario.submit();
	} 

}

function calcular() {
	var contadorChar = document.getElementById('contador-char').innerHTML=1000 - document.formulario.mensaje.value.length;
}

window.onload=function() {
	var botonEnviar = document.getElementById('enviar');
	botonEnviar.onclick=validarFormulario;
}