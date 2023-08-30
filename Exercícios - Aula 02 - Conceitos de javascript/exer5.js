/**
 * Escreva uma função que recebe um vetor de números inteiros e mostre como
 * resultado qual é o menor e qual é o maior número.
 */

const prompt = require('prompt-sync')();

const getMenorMaior = (numbers) => {
    let max = Number.MIN_VALUE
    let min = Number.MAX_VALUE

    numbers.forEach(number => {
        if(number > max){
            max = number;
        }

        if (number < min){
            min = number;
        }
    });

    console.log(`O menor número é ${min} e o maior é ${max}`)
}

let loop = true;
let numbers = [];

while(loop){
    var number = parseFloat(prompt('Digite um número: '));
    numbers.push(number);

    var answer = prompt('Deseja adicionar mais números? (s/n) ');
    loop = (answer == 's');
}

console.log(numbers);

getMenorMaior(numbers);