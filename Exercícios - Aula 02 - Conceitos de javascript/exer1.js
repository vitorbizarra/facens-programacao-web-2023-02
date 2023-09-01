/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus
 * lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais.
 * Escaleno: Todos os lados são diferentes. Crie uma função que recebe os
 * comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados.
 */

const getTipoTriangulo = (a, b, c) => {
    if ((a == b && b != c) || (a != b && b == c)) {
        return "Isóceles";
    }

    if (a != b && b != c) {
        return "Escaleno";
    }

    return "Equilátero";
}

console.log("3, 3, 3: " + getTipoTriangulo(3, 3, 3))

console.log("3, 3, 2: " + getTipoTriangulo(3, 3, 2))

console.log("1, 2, 3: " + getTipoTriangulo(1, 2, 3))