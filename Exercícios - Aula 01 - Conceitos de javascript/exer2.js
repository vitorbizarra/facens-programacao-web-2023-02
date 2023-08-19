/**
 * Faça um programa que mostre os números
 * impares em um intervalo de 0 a 100.
 */

for(i = 0; i <= 100; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}