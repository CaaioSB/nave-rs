/* Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as 
ocorrências de números pelo valor '[removido]'. */

function detectaNumericos(argumentoString) {
  [...argumentoString].forEach(char => { 
    if (!isNaN(parseInt(char))) {
      argumentoString = argumentoString.replace(char, '[removido]');
    }
  });

  console.log(argumentoString);
}

/* Chama a função que altera números pela string 'removido', tendo como
resultado esperado 'teste [removido] de [removido] string [removido]' */
detectaNumericos('teste 1 de 2 string 3');
