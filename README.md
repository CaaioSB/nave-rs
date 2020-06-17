# Teste de Estágio nave.rs

Este projeto foi desenvolvido para ser avaliado a uma oportunidade de estágio na Nave.rs.

## Instalação

Faça o download do [reposítório](href="/CaaioSB/nave-rs/archive/master.zip").

Ou realize os seguintes passos:

Navegue até a pasta que deseja clonar o repositório.
```bash
cd /home/user/navers/caaiosb
```
Clone o repositório utilizando a seguinte linha de comando:
```bash
git clone https://github.com/CaaioSB/nave-rs.git
```
Navegue até a pasta do repositório
```bash
cd nave-rs
```
Execute a seguinte linha de comando para abrir o projeto no Visual Studio Code **(melhor opção)**
```
code .
```

## Uso dos Exercícios
Os exercícios estão separados por pasta.

Tendo em mente que você está utilizando o Visual Studio Code para realizar as próximas etapas, saiba que os directórios tem este padrão:
```bash
├── nave-rs
│   ├── EX1
│       ├── script.js
│   ├── EX2
│       ├── script.js
│   ├── EX...
│       ├── script.js
```
E para você executar determinado exercício simplesmente abra o arquivo `script.js` desejado, aperte <kbd>F1</kbd> e então digite `Run Code`, e o código será executado na aba de saída (OUTPUT).

## Uso do Frontend

Navegue até a pasta FRONTEND.
```bash
cd FRONTEND
```
E então abra o arquivo `index.html` (esta linha de comando pode gerar resultados diferentes caso o programa padrão para abrir arquivos de extensão .html não for um navegador).
```bash
cmd /c start index.html
```
Quando carregada a página, será vista uma página com diversos cards similar ao abaixo:
![Layout](https://github.com/CaaioSB/nave-rs/blob/master/FRONTEND/layout.png)

Para ver os comentários de determinada postagem, clique em `Comentários` ou `Clique para ler os comentários`.

## Preparação de ambiente para o exercício de backend
- [x] Tenha o MySQL instalado em sua máquina.

> Caso não tenha o MySQL ou obtenha erros [me envie](mailto:caio_silvabatista@hotmail.com) um e-mail, logo te darei suporte, enviando os  dados de acesso ao banco de dados MySQL utilizado no desenvolvimento ou sanando dúvidas/problemas.

### BANCO DE DADOS 
###### (ignore esta etapa caso queira utilizar o banco de dados MySQL utilizado no desenvolvimento).

Crie um banco de dados e deixe-o em uso
```sql
CREATE DATABASE navers
USE navers
```
E então execute por completo o script localizado no directório `..\nave-rs\DATABASE\EB1.sql`.

### SERVIDOR

Abra o seu terminal de preferência e execute os seguintes passos:

Navegue até a pasta `BACKEND` localizada na raíz do repositório (`nave-rs`)
```bash
cd BACKEND
```
Instala todas as dependencias.
```node
npm install
```
Execute a seguinte linha de comando para abrir o projeto no Visual Studio Code **(melhor opção)**
```bash
code .
```
Vá até o directório `config` pelo Explorer do VSCODE (`../nave-rs/BACKEND/app/config`)
```bash
├── nave-rs
│   ├── BACKEND
│   │   ├── app
│   │   │   ├── config
```
E então abra o arquivo `db.config.js` e defina o esquema utilizando o exemplo a seguir:
```javascript
HOST: "localhost",
USER: "sa",
PASSWORD: "123456",
DB: "navers",
```

### Execute o servidor.
Vá até a pasta raíz do BACKEND
```bash
cd ../nave-rs/BACKEND
```
E então inicialize o servidor utilizando
```bash
node .\server.js
```
ou
```bash
nodemon .\server.js
```

## Agradecimentos
Meus sinceros agradecimentos à [balta.io](https://balta.io/) que a partir deste [curso](https://www.youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn) que me mostrou o caminho e possibilitou de desenvolver minha primeira API em Node.Js.

### License
[MIT](https://choosealicense.com/licenses/mit/)
