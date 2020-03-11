var nome = "Otavio Gomes Mendes"
console.log(nome)

const titulo = "Generation NodeJs"

function maiuscula(nome) {
    return nome.toUpperCase()


}



function minuscula(nome) {
    return nome.toLowerCase()


}



function conteLetras(nome) {
    var total = nome.length
    return "Total de letras: " + total


}

//Para que estas funções fiquem acessiveis a outro codigo 
// teremos que exportar as funcoes
module.exports = {
    maiuscula, // funcao
    minuscula, // funcao
    conteLetras, //funcao
    titulo // constante
}
