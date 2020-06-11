/* Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada 
imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'. */

/* Sabe-se que para a resolução deste exercício existe uma forma mais 
simplificada, porém foi feito o código a seguir afins de demonstração de lógica. 
*/

// Requere a biblitetca axios localizada no node_module.
const axios = require('axios');

// Define um objeto padrão para armazenar o endereço.
var enderecoUsuario = {
  logradouro: '',
  localidade: '',
  uf: '',
  gia: ''
};

/* Faz a requisição do tipo GET na API e realiza os procedimentos solicitados no
enunciado do exercício */
axios.get('https://viacep.com.br/ws/01001000/json/', {})
  .then(function (response) {
    // Success (202)
    enderecoUsuario = response.data;
    let returnFormat = '';
    defineObject(enderecoUsuario);

    Object.entries(enderecoUsuario).forEach(([key, value]) => {
      if (key === 'logradouro') {
        returnFormat += ''.concat(value.toUpperCase());
      }
      else if (key === 'uf') {
        returnFormat += '/'.concat(value.toUpperCase());
      }
      else {
        returnFormat += ', '.concat(value.toUpperCase());
      }
    });

    console.log(returnFormat);
  });

/* Remove os atributos não necessários no objeto enderecoUsuario para a
aplicação da lógica de programação posteriormente */
function defineObject(enderecoUsuario) {
  delete enderecoUsuario.cep;
  delete enderecoUsuario.complemento;
  delete enderecoUsuario.ibge;
  delete enderecoUsuario.unidade;
  delete enderecoUsuario.gia;
}