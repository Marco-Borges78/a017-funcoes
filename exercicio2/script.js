/* Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado. */

const soma = (num1, num2) => num1 + num2
console.log(soma(20, 50))

/* b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo. */

const maiorOuIgual = (numero1, numero2) => {
    return numero1 >= numero2
}

console.log(maiorOuIgual(500, 1000))

/* c) Uma função que receba um número e imprima se ele é par ou não */

const numeroPar = (numero) => {
    return numero % 2 === 0
}

console.log(numeroPar(5))
console.log(numeroPar(80))

/* d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas. */

let nome = prompt('Qual o seu nome?')

const tamanhoECaixaAlta = (mensagem) => {
    return `O tamanho é: ${mensagem.length} 
    e em caixa alta fica ${mensagem.toUpperCase()}`
}

console.log(tamanhoECaixaAlta(nome))
