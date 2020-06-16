# Teste de Estágio nave.rs

Este projeto foi desenvolvido para ser avaliado a uma oportunidade de estágio na Nave.rs.

## Instalação

Faça o download do [reposítório](href="/CaaioSB/nave-rs/archive/master.zip").

Ou realize os seguintes passos:

```github
## Exemplo
cd /home/user/navers/caaiosb
git clone https://github.com/CaaioSB/nave-rs.git

## Para abrir no Visual Studio Code (melhor opção para este projeto)
code .
```

## Uso dos Exercícios
Os exercícios estão separados por pasta.

Tendo em mente que os directórios tem este padrão:
```bash
├── nave-rs
│   ├── BACKEND
│       ├── ...
│   ├── EX1
│       ├── script.js
│   ├── EX2
│       ├── script.js
│   ├── EX3
│       ├── script.js
│   ├── EX4
│       ├── script.js
│   ├── EX5
│       ├── script.js
│   ├── EX6
│       ├── script.js
│   ├── EX7
│       ├── script.js
│   ├── EX8
│       ├── script.js
│   ├── EX9
│       ├── script.js
│   ├── EX10
│       ├── script.js
│   ├── EX11
│       ├── script.js
│   ├── FRONTEND
│       ├── ...
│   ├── node_modules
│       ├── ...
```
Abra o arquivo `script.js` desejado, aperte <kbd>F1</kbd> e então digite `Run Code`, e o código será executado na aba de saída (OUTPUT).

## Uso do Frontend
Navegue até a pasta FRONTEND e então execute o arquivo `index.html`, quando carregado será vista uma página com diversos cards similar ao abaixo:

![Layout](https://github.com/CaaioSB/nave-rs/blob/master/FRONTEND/layout.png)

Para ver os comentários de determinada postagem, clique em `Comentários` ou `Clique para ler os comentários`.

## Preparação de ambiente para o exercício de backend
[x] Tenha o MySQL instalado em sua máquina.

[~] Caso não tenha o MySQL ou obtenha erros envie um e-mail para [eu](href="mailto:caio_silvabatista@hotmail.com"), assim envio os dados de acesso ao banco de dados MySQL utilizado no desenvolvimento.

Abra o seu terminal de preferência e execute os seguintes passos:

```node
# Exemplo
cd /home/user/navers/caaiosb/nave-rs/BACKEND

# Instala todas as dependencias.
npm install

# Crie uma pasta chamada config na pasta app.
cd /home/user/navers/caaiosb/nave-rs/BACKEND/app
mkdir config
```
Crie um arquivo chamado `db.config.js` na pasta `../app/config`

Dado seguinte esquema:
```javascript
module.exports = {
  HOST: "hostname",
  USER: "user",
  PASSWORD: "password",
  DB: "database",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
```

### Execute o servidor.
```node
cd /home/user/navers/caaiosb/nave-rs/BACKEND
nodemon .\server.js
```
## Agradecimentos
Meus sinceros agradecimentos à [balta.io](https://balta.io/) que a partir deste [curso](https://www.youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn) me deu ideias e possibilitou de aprender a desenvolver uma API.

### License
[MIT](https://choosealicense.com/licenses/mit/)
