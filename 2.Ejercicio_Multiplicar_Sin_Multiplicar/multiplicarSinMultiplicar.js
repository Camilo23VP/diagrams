/**
 * @description Se proporcionaran dos numeros, el objetivo es multiplicarlos sin utilizar el operador de multiplicación.
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
}

(async () => {
    const multiplying = Number(await preguntar('Ingrese el multiplicando: '));
    const multiplier = Number(await preguntar('Ingrese el multiplicador: '));

    if (multiplying && multiplier) {
        let result = 0;
        
        for (let i = 0; i < multiplier; i++) {
            result += multiplying;
        }

        console.log(`El resultado de la multiplicación es: ${result}`);
    } else {
        console.error('Por favor ingrese números validos para realizar la multiplicación.');
    }

    rl.close();
})();