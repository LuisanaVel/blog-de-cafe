// querySelector

const heading = document.querySelector('.header__texto h2')  // Retorna 0 o 1 elemento
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

//enlace[0].textContent = 'Nuevo texto';
//enlace[0].classList.add('nueva-clase');
//enlace[0].classList.remove('ejemplo');

/*const nuevoEnlace = document.createElement('A');

nuevoEnlace.href = 'nuevo-enlace.html';

nuevoEnlace.textContent = 'Un nuevo enlace';

nuevoEnlace.classList.add('navegacion__enlace');

console.log(nuevoEnlace);


const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);*/

// Eventos

/*  console.log(1);

window.addEventListener('load', function() {
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
})

console.log(5);   */

// Seleccionar elementos y asociarles un evento 

/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault(); // Es especialmete útil para formularios
    console.log('enviando formulario');
});*/


// Eventos de los inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto); 

//Evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

// Validar el formulario

const {nombre, email, mensaje} = datos;

if(nombre === '' || email === '' || mensaje === '') {
    mostrarAlerta('Todos los campos son obligatorios', true); //Cambiamos el nombre de la funcion

    return;
} 

//Enviar el formulario
    mostrarAlerta('Mensaje enviado correctamente');  //Cambiamos el nombre de la funcion
});

function leerTexto(evento) {
    //console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;
}


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if(error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

