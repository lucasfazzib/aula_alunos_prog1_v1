
function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log('Ola Gama, você é o: ' + nome);
}


var resultadoDaSoma = soma(1,2);
var resultadoNovoDaSoma = soma(10,36);

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaGama('LUCAS');