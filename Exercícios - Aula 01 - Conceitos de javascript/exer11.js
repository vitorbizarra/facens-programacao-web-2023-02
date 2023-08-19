/**
 * Escreva uma função que recebe um endereço de e-mail como argumento e retorna 
 * true se o e-mail for válido ou false caso contrário. Um e-mail válido deve 
 * conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.
 */

const prompt = require('prompt-sync')();

const email_parts = prompt('Digite seu email: ').split('@');

if(email_parts.length != 2){
    console.log('Email inválido');
    return;
}

const final_parts = email_parts[1].split('.');
if(final_parts.length < 2){
    console.log('Email inválido');
    return;
}

console.log('Email válido')