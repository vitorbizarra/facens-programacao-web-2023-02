/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
 * e tempo de aplicação. A primeira função retornará o montante da aplicação
 * financeira sob o regime de juros simples e a segunda retornará o valor da
 * aplicação sob o regime de juros compostos.
 */

const jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => capitalInicial + ((capitalInicial * taxaDeJuros * tempoDeAplicacao) / 100);


const jurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => (capitalInicial * Math.pow((1 + taxaDeJuros / 100), tempoDeAplicacao))

console.log(jurosSimples(10, 5, 5))
console.log(jurosCompostos(10, 5, 5))