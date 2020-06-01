const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Fazzi',
    idade: 28,
    profissao: 'Developer'
};

console.log(pessoa);

//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissao = pessoa.profissao;

// Criado uma forma desestruturada de olhar pro objeto pessoa

let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome, sobrenome, idade, profissao);