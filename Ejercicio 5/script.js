

let calculadora = prompt('Qué operación desea hacer: 1 - Suma | 2 - Resta | 3 - Multiplicación | 4 - División'); // Primero hacemos un prompt para que el usuario escoga una opción 

let numero1 = Number(prompt('Ingrese el primer numero')); // esto no hace falta explicarlo xd
let numero2 = Number(prompt('Ingrese el segundo numero'));

let total; // Variable para guardar y enseñar el resultado final de la operación

if (calculadora == 1) {
    total = numero1+numero2
    alert('El resultado de la suma es de ' +total) // Con un if else se hacen las 4 operaciones, == es para igualar que cada operación coincida con los numeros colocados en el primer prompt
} else if (calculadora == 2) {
    total = numero1-numero2 // acá las respectivas operaciones, en este caso resta
    alert('El resultado de la resta es de ' +total) 
} else if (calculadora == 3) {
    total = numero1*numero2
    alert('El resultado de la multiplicación es de ' +total) // el alert es para enseñar el resultado, con la variable total
} else if (calculadora == 4) {
    total = numero1/numero2
    alert('El resultado de la división es de ' +total)
} else {
    alert('Opción de operación incorrecta') // por si ponen una opción que no se encuentra en el prompt
}


// Switch Case


function calculadora(operacion, num1, num2) {
    let resultado; 

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta': 
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                return "Error: No se puede dividir entre 0";
            }
            resultado = num1 / num2;
            break;
        default: 
            return 'La operación no es válida';        
    }

    return `El resultado de la ${operacion} es ${resultado}`;
}
