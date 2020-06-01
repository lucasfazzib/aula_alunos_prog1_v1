//Funcionalidade para buscar conteudos especificos sobre uma massa de dados que vc nao tem certeza de 
// como ela esta estruturada la dentro.

const textoNaoEstruturado = "Meu CPF é 123.456.789-22";

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(textoNaoEstruturado.match(regex));