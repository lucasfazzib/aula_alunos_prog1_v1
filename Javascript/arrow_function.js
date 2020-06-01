// Abstração de uma função.

function soma(x,y) {
    return x + y;
}

console.log(soma(3,4));

///////

const multiplicacao = function(x,y) {
    return x * y;
}

console.log(multiplicacao(5,5));

////////
//arrow functions
const dividir = (x,y) => {
    return x / y;
}

console.log(dividir(25, 5));

//arrow funciton construçao dinamica de objetos.

const objeto = () => ({ nome: 'Lucas', sobrenome: 'Fazzi'});










