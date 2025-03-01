/**
 * @description Se proporcionara dos numeros, el objetivo es restarlos sin utilizar el operador de resta.
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntar = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
};

(async () => {
    const numberOne = Number(await preguntar('Ingrese el primer número '));
    const numberTwo = Number(await preguntar('Ingrese el segundo número '));
    
    /* Obtenemos el numero mayor y numero menor */
    const largerNumber = (numberOne > numberTwo) ? numberOne : numberTwo;  
    const smallerNumber = (numberOne < numberTwo) ? numberOne : numberTwo;

    /* Obtenemos la diferencia */
    let result = 0;

    if (largerNumber !== smallerNumber) {
        let difference = 0;

        do {
            difference = difference + 1;
            result = smallerNumber + difference;
        } while (result < largerNumber);

        console.log(`El resultado de su resta es: ${difference}`);
    } else {
        console.log(`El resultado de su resta es: ${result}`);
    }

    rl.close();
})();
