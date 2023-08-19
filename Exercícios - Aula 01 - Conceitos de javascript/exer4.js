/**
 * Faça um programa que recebe o nome de uma variável
 * e mostre o <<primeiro>>.<<último nome>>@facens.br
 */
const prompt = require('prompt-sync')();

const name = prompt('Digte seu nome completo e iremos gerar seu email institucional facens: ').toLowerCase()

const name_parts = name.split(' ');

const email = `${name_parts[0]}.${name_parts[name_parts.length -1]}@facens.br`;

console.log("Seu email:", email);