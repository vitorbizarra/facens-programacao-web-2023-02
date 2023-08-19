/**
 * Escreva uma função que receba uma string
 * como argumento e retorne a string invertida.
*/

const prompt = require('prompt-sync')();
console.log(prompt('Digite um texto: ').split('').reverse().join(''));