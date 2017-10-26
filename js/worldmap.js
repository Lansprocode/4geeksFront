const apiURL = '';
//se crea una variable xhr que inicializa una peticion (XMLHttprequest...)
const xhr = new XMLHttpRequest();
//esta instancia tiene muchas funciones para usar
//en este caso se usa open con sus atributos, 
//get + URL + true(asincrono) (false (sincrono))

xhr.open('GET', apiURL, true); //abrimos nuestra petiticion
//cuando carge la peticion se abre la siguiente funcion

xhr.onload = () => {
    let json = JSON.parse(xhr.responseText);
    console.log(json);
}

//este console sale cuando la llamada al url (apiURL) no se resuelve;
xhr.onerror = () => {
    console.log('API no encontrada')
}

//cada vez que se quiera abrir un API (json) se tiene que enviar con esta funcion
xhr.send()   */ 


/* New Modal 

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

//Get the <span> element that closes the modal
var span = document.getElementById("close");

//When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


/*class Modal {

	constructor() {

		this.modalContainer = document.createElement('div');
		this.modalContainer.className = 'modal';
		document.body.appendChild(this.modalContainer);

		const contentContainer = document.createElement('div');
		contentContainer.className = 'container';
		this.modalContainer.appendChild(contentContainer);

		const closeButton = document.createElement('button');
		closeButton.innerHTML = '&times;';
		contentContainer.appendChild(closeButton);
		closeButton.addEventListener('click', this.close );

		this.content = document.createElement('div');
		contentContainer.appendChild(this.content);
	}

	set html (value) {
		this.content.innerHTML = value;
	}

	open () {
		this.modalContainer.classList.add('open');
	}

	close () {
		this.modalContainer.classList.remove('open');
	}
}

let m = new modal();
m.html = 'Hello, World';
m.open();*/