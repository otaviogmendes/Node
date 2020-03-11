//criando um servidor
var http=require("http") //carregando o modulo http dp node
http.createServer(function(requisicao,resposta){
    resposta.end("<h1 style='color:blue;'> Bem vindo ao meu site!</h1>")
}).listen(3000) // porta

//com isso eu crio um servidor
console.log("Meu servidor está rodando!")
//posso subir este codigo para um servidor e todo mundo poderia executar este codigo

