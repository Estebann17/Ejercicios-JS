

function mayorDeDos (n1, n2) { // Creamos la función que recibe los dos parámetros

    if (n1 > n2) { // Acá hacemos la lógica de que si numero 1 es mayor que numero 2, devuelva el numero 1, caso contrario, devuelve el numero 2 (en este caso devolvería el mayor de los dos). 
        return n1;
    } else {
        return n2;
    }
}

console.log(mayorDeDos(40, 20)); // Imprimimos en la consola, en este caso se devolvería el n1. 