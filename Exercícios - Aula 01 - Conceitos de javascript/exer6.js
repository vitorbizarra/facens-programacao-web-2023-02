/**
 * Faça uma função que mostre o dobro do número passado.
 * Caso o número seja menor ou igual a zero deve mostrar
 * a mensagem “Só é aceito números positivos maiores que zero”.
 */
const prompt = require('prompt-sync')();

const number = parseFloat(prompt('Digite um número para saber seu dobro: '));

const duplicate = (number) => {
    if(number <= 0){
        throw new Error('Só é aceito números positivos maiores que zero');
    }

    return number * 2;
}

try{
    console.log(duplicate(number));
} catch(e){
    console.log(e)
}