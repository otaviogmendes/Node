var calc = require ("./funcoes")
var n1= 5
var n2= 5

 var resultado = calc.soma(n1,n2)
console.log("Soma = " + resultado)

var resultado = calc.multiplica(n1,n2)
console.log("Multiplicação= " + resultado)

var resultado = calc.subtracao(n1,n2)
console.log("Subtração = " + resultado)

var resultado = calc.divide(n1,n2)
console.log("Divisão = " + resultado)

const express = require("express");  // importando  o modulo express
const app = express(); // criando uma instancia d express
let port = 8081
//rota principal
//send = função do express
//end = uncão do http

app.get("/", (req,res) => {res.send('<h1> Calculadora </h1>' +  "Soma= "+calc.soma(n1,n2)+  "\n Subtração = "+calc.subtracao(n1,n2)+  "\nMultiplicação = "+calc.multiplica(n1,n2)+  "\nDivisão = "+calc.divide(n1,n2))
})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
  }) 
