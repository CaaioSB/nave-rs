/* Imprima a soma das idades (dica: utilize reduce) */

// Função que será executada para cada elemento do meu Array
const redutor = (acumulado, valorAtual) => acumulado + valorAtual;

// Array de objeto  padrão para o exercício.
const pessoas = [
  { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
  { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
  { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

// Função responsável por escrever uma saudação para cada pessoa do objeto.
function somarIdades() {
  let idades = [];
  pessoas.forEach(pessoa => {
    idades.push(pessoa.idade);
  })

  console.log(idades.reduce(redutor));
}

// O resultado esperado ao executar esta função é algo como: 'Olá, Fulano de tal!'.
somarIdades();