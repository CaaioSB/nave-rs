/* Imprima uma mensagem de saudação com o nome completo para cada um dos 
objetos. O nome deve ter a primeira letra maiúscula. */

// Array de objeto  padrão para o exercício.
const pessoas = [
  { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
  { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
  { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

// Função responsável por escrever uma saudação para cada pessoa do objeto.
function saudarPessoa() {
  pessoas.forEach(pessoa => {
    console.log(`Olá, ${pessoa.nome.charAt(0).toLocaleUpperCase() + pessoa.nome.slice(1)} ${pessoa.sobrenome}!`);
  })
}

// O resultado esperado ao executar esta função é algo como: 'Olá, Fulano de tal!'.
saudarPessoa();