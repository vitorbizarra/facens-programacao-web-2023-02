/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
 * e tempo de aplicação. A primeira função retornará o montante da aplicação
 * financeira sob o regime de juros simples e a segunda retornará o valor da
 * aplicação sob o regime de juros compostos.
 */

const jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => {
    return capitalInicial + (taxaDeJuros * tempoDeAplicacao)
}

const jurosCompostos = () => {
    let resultado = 0;

    for(i = 0; i < tempoDeAplicacao; i++){
        resultado = resultado + taxaDeJuros;   
    }

    
}