/**
 * Escreva um programa que imprima os números de 1 a 10 no console usando um loop.
 * Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. 
 * Observação: após o número 10 não pode ter um traço.
 */

let text = '';
for(i = 0; i <=10; i++){
    if(i != 10){
        text += `${i} - `
        continue;
    }

    text += i;
}

console.log(text)