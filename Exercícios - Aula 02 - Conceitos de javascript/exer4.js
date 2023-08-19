/**
 * Crie uma função que verifica se um número inteiro passado como parâmetro é
 * divisível por 3 e retorne true ou false.
 */

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Digite um número para saber se ele é divisível por 3: '))

const divisibleByThree = (number) => (number % 3 == 0);

console.log((divisibleByThree(number)) ? 'Sim' : 'Não');