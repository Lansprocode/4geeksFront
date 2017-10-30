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






/* Formulario de Inicio de Sesion */

function validarInicio(){

	var namelogin, passlogin, btnlogin, expresionn;

	namelogin = document.getElementById('namelogin').value;
	passlogin = document.getElementById('passlogin').value;
	btnlogin = document.getElementById('btnlogin');

	if (namelogin === "") {

		alert('Enter a login');
		return false;
		namelogin.focus();
	} else if (passlogin === "") {

		alert('Enter a password');
		return false;
		passlogin.focus();
	}



}





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


/*  */

window.sr = ScrollReveal();
sr.reveal('#menu1', {
	duration: 3000,
	origin: 'bottom'
}),

sr.reveal('.header', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
});
sr.reveal('.game-right', {
	duration: 2000,
	delay: 2000,
	origin: 'right',
	distance: '300px'
});
sr.reveal('.carouselle', {
	duration: 2000,
	origin: 'right',
	distance: '300px',
	viewFactor: 0.2

});
sr.reveal('.got', {
	duration: 3000,
	origin: 'bottom',
	distance: '300px',
	viewFactor: 0.2

});
sr.reveal('.parrafo1', {
	duration: 3000,
	origin: 'right',
	distance: '200px',
	viewFactor: 0.2

});
sr.reveal('.parrafo2', {
	duration: 3000,
	origin: 'left',
	distance: '200px',
	viewFactor: 0.2

});
sr.reveal('.span1', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	viewFactor: 0.2

});
sr.reveal('.sansa', {
	duration: 3000,
	origin: 'top',
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.cersie', {
	duration: 3000,
	origin: 'top',
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.daenerys', {
	duration: 3000,
	origin: 'left',
	delay: 1000,
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.arya', {
	duration: 3000,
	delay: 1000,
	origin: 'right',
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.tituloellas', {
	duration: 2000,
	delay: 2000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.dragonwolf', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.dragonwolf', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.KingL', {
	duration: 2000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa1', {
	duration: 2000,
	origin: 'left',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa2', {
	duration: 2000,
	delay: 1000,
	origin: 'left',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.BJ', {
	duration: 2000,
	delay: 1000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa3', {
	duration: 2000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa4', {
	duration: 2000,
	delay: 1000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.TJ', {
	duration: 2000,
	delay: 1000,
	origin: 'left',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa5', {
	duration: 2000,
	origin: 'left',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa6', {
	duration: 2000,
	delay: 1000,
	origin: 'left',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.JD', {
	duration: 2000,
	delay: 1000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa7', {
	duration: 2000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.pa8', {
	duration: 2000,
	delay: 1000,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.CB', {
	duration: 2000,
	delay: 1000,
	origin: 'left',
	distance: '100px',
	viewFactor: 0.2

});

sr.reveal('.at', {
	duration: 2000,
	origin: 'bottom',
	distance: '400px',
	viewFactor: 0.2

});


sr.reveal('.pa10', {
	duration: 2000,
	delay: 1000,
	origin: 'left',
	distance: '400px',
	viewFactor: 0.2

});

sr.reveal('.pa11', {
	duration: 3000,
	delay: 1000,
	origin: 'left',
	distance: '400px',
	viewFactor: 0.2

});

sr.reveal('.pa12', {
	duration: 2000,
	delay: 1000,
	origin: 'bottom',
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.aryaa', {
	duration: 2000,
	origin: 'right',
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.RAL1', {
	duration: 2000,
	origin: 'left',
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.pa13', {
	duration: 2000,
	delay: 1000,
	origin: 'right',
	distance: '200px',
	viewFactor: 0.2

});

sr.reveal('.pa14', {
	duration: 3000,
	delay: 1000,
	origin: 'right',
	distance: '200px',
	viewFactor: 0.2

});







