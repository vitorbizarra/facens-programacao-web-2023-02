/**
 * Escreva uma função que recebe uma string como argumento e 
 * retorna o número de vogais presentes nessa string. 
 * Considere apenas vogais minúsculas (a, e, i, o, u).
 */

const prompt = require('prompt-sync')();

const text = prompt('Digite um texto e descubra quantas vogais existem: ');

const vowels = [...text.matchAll(/[aeiou]/gi)].length

console.log("Quantidade de vogais:", vowels);