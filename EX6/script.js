const axios = require('axios');

var enderecoUsuario = {
  logradouro: '',
  localidade: '',
  uf: '',
  gia: ''
};

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

function defineObject(enderecoUsuario) {
  delete enderecoUsuario.cep;
  delete enderecoUsuario.complemento;
  delete enderecoUsuario.ibge;
  delete enderecoUsuario.unidade;
  delete enderecoUsuario.gia;
}