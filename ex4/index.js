// import { inherits } from "util";

// console.log("Olá mundo !!!");

//proximo psasso é criar a identidade do projeto "npm init"

// observar se foi criado o arquivo package.json (JavaScript Object notation) que contem informções do projeto
// proximo passo é instalar o framework de node "express"
//executar o comando: npm install express

let express = require('express')
let app = express()
let port = 8081
app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
  })
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
  }) 