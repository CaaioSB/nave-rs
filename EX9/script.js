/* Imprima se existir alguem com menos 25 anos. */

// Array de objeto  padrão para o exercício.
const pessoas = [
  { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
  { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
  { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

/* Função responsável por exibir cada pessoa do objeto que contém idade menor
 que 25. */
function logPessoa() {
  let idades = [];
  pessoas.forEach(pessoa => {
    if (pessoa.idade < 25) console.log(`Ei, o ${pessoa.nome.charAt(0).toUpperCase()
      + pessoa.nome.slice(1)} ${pessoa.sobrenome} possui ${pessoa.idade} anos.`)
  })
}

/* O resultado esperado ao executar esta função é algo como: Ei, o Fulano de tal
possui 24 anos. */
logPessoa();