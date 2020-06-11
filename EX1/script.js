// E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.

// Função que retorna o texto da string de maior comprimento.
function doisArgumentos(argumentoUm, argumentoDois) {
  /* if ternário, no qual valida se o tamanho do argumentoUm é menor ou igual ao
   do argumentoDois, se sim, execute o código antes dos dois pontos, se não
   execute o código sucessor aos dois pontos.
  */
  argumentoUm.length <= argumentoDois.length ? console.log(argumentoDois) : console.log(argumentoUm);
}

// Chama a função passando os dois parâmetros do tipo string, a saída esperada é "Teste Estágio 2020".
doisArgumentos('Teste Estágio 2020', 'Nave.rs');