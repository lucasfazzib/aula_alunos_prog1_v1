// Classes em JAVASCRIPT provêm uma maneira mais simples e clara de criar objetos e lidar com herança.
// É uma descrição de propriedades e características e funções sobre as ações da instancia que esta sendo criada.
class Matematica  {

    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

// Sempre que é dado um new, significa que estamos criando em memória, ela passa a ser um agregado de funções e propriedades dentro do JAVASCRIPT.
var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(5,7);

console.log(resultado);