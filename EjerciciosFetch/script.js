
// Realiza una solicitud usando una función asincrona a esa misma url del ejemplo y recorre el array de datos que te devolverá

// https://jsonplaceholder.typicode.com/posts


// FOREACH

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();

        data.forEach(post => {
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

        const datos = data.map(post => post.title);

        console.log(datos);

    } catch (error) {
        console.error('Error: ', error);
    }
}

fetchPosts();