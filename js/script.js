/* Formulario de Registro */

function validar() {

	var email, password, cpassword, name, lastname, cellphone, direccion, checkbox, expresion;

	email = document.getElementById('inputEmail').value;
	password = document.getElementById('inputPassword').value;
	cpassword = document.getElementById('cpass').value;
	name = document.getElementById('name').value;
	lastname = document.getElementById('lastname').value;
	cellphone = document.getElementById('cellphone').value;
	direccion = document.getElementById('textarea').value;
	checkbox = document.getElementById('checkbox').value;
	expresion = /\w+@\w+\.+[a-z]/;


	if (email === "" || password === "" || cpassword === "" || name === "" || lastname === "" || cellphone === "" || direccion === "" || checkbox === "") {

			alert('All the fields are obligatory');
			return false;
	} else if (email.length>100) {
		alert('The email is to long');
		return false;
	} else if (!expresion.test(email)) {
		alert('The email is invalid');
		return false;
	} else if (password.length>20 || cpassword.length>20) {
		alert('The password is to long');
		return false;
	} else if (name.length>30 || lastname.length>30) {
		alert('The name or last name are to long');
		return false;
	} else if (cellphone.length>20) {
		alert('The cellphone is to long');
		return false;
	} else if (direccion.length>500) {
		alert('The addres is wrong');
		return false;
	} else if (isNaN(cellphone)) {
		alert('The field cellphone is wrong');
		return false;
	}



}

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


/* busqueda */

search = document.querySelector('.search');
dale = document.querySelector('.dale');
show = document.querySelector('.shownamee');



dale.addEventListener('click', enter);
search.addEventListener('keyup', enter);


function validarSearch(evento) {
	evento.preventDefault();
	if (!search.value) {

		show.innerHTML = "Debes ingresar un nombre";
		enviar=false;
		search.focus();
	}
}

window.onload=function(){
	dale.onclick=validarSearch;
}




function enter(event){
	event.preventDefault();
		var name = search.value;

		console.log(name); 

		   
		const apiURL = 'https://got-quotes.herokuapp.com/quotes?char=';
		//se crea una variable xhr que inicializa una peticion (XMLHttprequest...)
		const xhr = new XMLHttpRequest();
		//esta instancia tiene muchas funciones para usar
		//en este caso se usa open con sus atributos, 
		//get + URL + true(asincrono) (false (sincrono))

		xhr.open('GET', apiURL, true); //abrimos nuestra petiticion
		//cuando carge la peticion se abre la siguiente funcion

		xhr.onload = () => {
		    let json = JSON.parse(xhr.responseText);
		    show.innerHTML = json.quote;

		}

		//este console sale cuando la llamada al url (apiURL) no se resuelve;
		xhr.onerror = () => {
		    
		}

		//cada vez que se quiera abrir un API (json) se tiene que enviar con esta funcion
		xhr.send()    
}


