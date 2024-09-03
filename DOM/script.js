

/* Ejercicio 1: Cambiar el contenido de un párrafo
Crea un archivo HTML con un párrafo (<p>) que tenga algún texto dentro.
 Selecciona el párrafo usando JavaScript y cambia su texto a "Texto cambiado con JavaScript". */


const element = document.getElementById('miParrafo');

element.textContent = 'Texto cambiado con JavaScript'; */



/* Ejercicio 2: Cambiar el color de un botón al hacer clic
Crea un botón (<button>) en un archivo HTML.
Usa JavaScript para cambiar el color del botón a rojo cuando se haga clic en él. */

const element = document.querySelector('button');

function handleClick() {
    element.style.backgroundColor = 'red';
}

element.addEventListener('click', handleClick); */


/* Ejercicio 3: Añadir un nuevo elemento a la lista
Crea una lista (<ul>) en tu archivo HTML con algunos elementos de lista (<li>).
Usa JavaScript para añadir un nuevo elemento de lista al final de la lista. */

const nuevoElemento = document.createElement('li');

document.body.appendChild(nuevoElemento);

nuevoElemento.textContent = 'Nuevo elemento agregado';  */


/* Ejercicio 4: Ocultar y mostrar un elemento
Crea un div con algún contenido.
Añade dos botones, uno para ocultar y otro para mostrar el div usando JavaScript. */

const botonUno = document.createElement('button');

botonUno.textContent = 'Ocultar';

document.body.appendChild(botonUno);


const botonDos = document.createElement('button');

botonDos.textContent = 'Mostrar';

document.body.appendChild(botonDos);


const miDiv = document.getElementById('miDiv');

function ocultarDiv() {
    miDiv.style.display = 'none';
}

function mostrarDiv() {
    miDiv.style.display = 'block';
}

botonUno.addEventListener('click', ocultarDiv);
botonDos.addEventListener('click', mostrarDiv); 

/* 
Ejercicio 5: Alternar una clase en un elemento
Crea un div con una clase que le aplique un color de fondo.
Usa JavaScript para alternar esa clase al hacer clic en el div, de manera que el color de fondo cambie cada vez que se hace clic. */


const miDiv = document.createElement('div');

miDiv.style.height = '200px';
miDiv.style.width = '200px';
miDiv.style.backgroundColor = 'lightgray'



function handleMouseOver() {
    miDiv.style.backgroundColor = 'lightblue';
}


function handleMouseOut() {
    miDiv.style.backgroundColor = 'lightgray';
}


miDiv.addEventListener('mouseover', handleMouseOver);
miDiv.addEventListener('mouseout', handleMouseOut);


document.body.appendChild(miDiv);