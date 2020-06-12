/* Imprima todos os elementos em que a idade é menor que 30 anos. */

/* **O enunciado solicita que imprime todos os elementos, entre tanto eu interpreto
que os elementos são cada elemento do objeto, portanto eu realmente imprimi o
elemento do objeto. */

// Array de objeto  padrão para o exercício.
const pessoas = [
  { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
  { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
  { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

/* Função responsável por exibir cada pessoa do objeto que contém idade menor
 que 25. */
function imprimirElementos() {
  let idades = [];
  pessoas.forEach(pessoa => {
    if (pessoa.idade < 30) console.log(pessoa)
  })
}

/* O resultado esperado ao executar esta função é algo como: 
{ id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 } */
imprimirElementos();