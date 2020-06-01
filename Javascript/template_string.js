let meuNome = 'Lucas';
let meuSobrenome = 'Fazzi';
let minhaProfissao = 'Developer';

//Maneira basica
console.log('Olá, meu nome é ' + meuNome + ' ' + meuSobrenome + ' ' + 'e minha profissão é ' + minhaProfissao);

//Template String
console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);

console.log(`O resultado da soma de 1 + 1 = ${1 + 1}`);

let meuObjeto = {
    chave: 'novo valor'
}

console.log(meuObjeto);
console.log(`O objeto json ${{chave: 'valor'}}`);
