
// Realiza una solicitud usando una función asincrona a esa misma url del ejemplo y recorre el array de datos que te devolverá

// https://jsonplaceholder.typicode.com/posts



// FOR 

async function fetchPosts() { 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Realizo la solicitud asíncrona con la misma url 

        const data = await response.json(); // Obtengo la respuesta a la api y la convierto en un objeto json

        array(data); // Acá llamo a la funcion que hice más abajo llamada array donde paso los datos 

    } catch (error) {
        console.error('Error: ', error); // El manejo de errores
    }
}

function array(data) {  // Acá recorro el array y lo imprimo en consola
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]); 
    }
}

fetchPosts(); // Llamada a la función para que se inicie 



// FOREACH

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();

        data.forEach(post => { // utilizo el array function para hacer el metodo foreach, con la funcion llamada post 
            console.log(post);
        });

    } catch (error) {
        console.error('Error: ', error);
    }
}

fetchPosts();



// MAP 

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();

        const datos = data.map(post => post.title) // Con map acceso al array de la variable data, y extraigo el titulo de cada post a traves de esta variable llamada post

        console.log(datos); // imprimo la variable donde guarde la array function 

    } catch (error) {
        console.error('Error: ', error);
    }
}

fetchPosts(); 