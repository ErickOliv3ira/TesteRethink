const pessoas = [
    { name: "fabiana Araujo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernado Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel de Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
]

/*Agora que você manipulou os dados, precisamos que desenvolva uma função que retorna os dados de uma pessoa
 pelo nome passado via parâmetros.*/

console.log('Desafio 3')
function Busca(lista, nome) {
    let resultadaBusca = pessoas.filter(lista => lista.name == nome)
    resultadaBusca.forEach(element => {
        console.log(element)
    })
}
Busca(pessoas, 'Gabriel Gomes')


//E então, desenvolva uma função que retorna um vetor com os nomes das pessoas.
console.log('Desafio 4')
let listaNomes = []
pessoas.forEach(element => {
    let nome = element.name
    let primeiroNome = nome.split(' ')[0]
    listaNomes.push(primeiroNome)
})
console.log(listaNomes)


//Desenvolva uma função que insira um id único para cada pessoa no vetor 
console.log('Desafio 5')
pessoas.forEach(function id(item, indice) {
    item.id = indice + 1

})
console.log(pessoas)


/*Desenvolva uma função que retorna os dados das pessoas para quem tem idade suficiente para tirar a primeira 
habilitação.*/
console.log('Desafio 6')
function habilitação() {
    let resultadoBusca = pessoas.filter(lista => lista.age >= 18)
    resultadoBusca.forEach(element => {
        console.log(element)
    })
}
habilitação()


//Cria uma função que retorne a média das idades das pessoas.
console.log('Desafio 7')
function MediaIdade() {
    let soma = 0
    let totalPessoas = 0
    pessoas.forEach(element => {
        soma += element.age
        totalPessoas++
    })
    let media = soma / totalPessoas
    console.log(media)
}
MediaIdade()