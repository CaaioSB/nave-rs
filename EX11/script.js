/* Ordene o array de forma decrescente por idade, em caso de empate o desempate
é pelo id. */

// Array de objeto  padrão para o exercício.
const pessoas = [
  { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
  { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
  { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

/* Função responsável por exibir cada pessoa do objeto que contém idade menor
 que 25. */
function ordenarElementos() {
  pessoas.sort(function (antecessor, sucessor) {
    if (antecessor.idade > sucessor.idade && sucessor.id > antecessor.id) {
      return 1;
    }
    if (antecessor.idade < sucessor.idade && sucessor.id < antecessor.id) {
      return -1;
    }
  });

  console.log(pessoas);
}

/* O resultado esperado ao executar esta função é de todas pessoas ordenadas
pela idade, e caso a idade seja igual o critério desempate seja o id. */ 
ordenarElementos();