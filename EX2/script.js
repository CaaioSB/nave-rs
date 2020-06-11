/* E.2 Crie uma função que recebe três argumentos, uma função e duas string,
aplique a função nas duas string e imprima o resultado. */

/* Função com três argumentos, sendo o primeiro "concatena" o que representa a 
função a ser executada e  os outros dois parâmetros as string a serem
concatenadas. */ 
function tresArgumentos(concatena, argumentoString1, argumentoString2) {
  concatena(argumentoString1, argumentoString2);
}

/* Função responsável por concatar as duas strings passadas como parâmetros
desde a primeira função (tresArgumentos). */
function concatenaStrings(argumentoString1, argumentoString2) {
  console.log(argumentoString1.concat(argumentoString2))
}

/* Chama a funçao que requere três argumentos, o resultado esperado da saída é 
Nave.rs */
tresArgumentos(concatenaStrings, 'Nave', '.rs')