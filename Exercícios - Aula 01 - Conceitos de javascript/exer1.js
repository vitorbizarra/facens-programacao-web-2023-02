/**
 * Escreva um programa que declare duas variáveis numéricas e realize
 * as quatro operações matemáticas básicas (+, -, *, /). Imprima os 
 * resultados no console.
 */

const prompt = require('prompt-sync')();

var a = parseInt(prompt('Digite o primeiro número: '));

var b = parseInt(prompt('Digite o segundo número: '));

console.log("Soma:", (a + b))
console.log("Subtração:", (a - b))
console.log("Multiplicação:", (a * b))
console.log("Divisão:", (a / b))