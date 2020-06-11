/* Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na 
frase 'T35t3 d3 35t4g1o' conforme o dicionário. */

/* Sabe-se que para a resolução deste exercício existe uma forma mais 
simplificada, porém foi feito o código a seguir afins de demonstração de lógica. 
*/

var testeEstagio = 'T35t3 d3 35t4g1o';

var dicionario = [];
dicionario[1] = 'i';
dicionario[3] = 'e';
dicionario[4] = 'a';
dicionario[5] = 's';

function usarDicionario(argumentoString) {
  [...argumentoString].forEach(verificaChar);
  
  console.log(testeEstagio);
}

function verificaChar(element) {
  dicionario.forEach(function (value, i){
    if (element == i){
      testeEstagio = testeEstagio.replace(element, dicionario[i]);
    }
  });
}

// De acordo com a string pré definida, o valor esperado é: 'Teste de estagio'.
usarDicionario(testeEstagio);