/* E.3 Crie uma função que recebe vários argumentos do tipo string e imprime
todos juntos */

/* A função concatenaValores usufrui do objeto Array que corresponde aos 
argumento passados na chamada, portanto pode haver x valores, todos serão
concatenados inserindo um espaço a cada valor. */
function concatenaValores() {
  var valoresConcatenados = '';
  [].slice.call(arguments, 0).forEach(function (valor) {
    valoresConcatenados += ' '.concat(valor);
  });

  console.log(valoresConcatenados);
}

// Chama a função e espera pela seguinte saída: 'Caio da Silva Batista'
concatenaValores('Caio', 'da Silva', 'Batista');