/* Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão). */

let soma = (num1,num2) => {
    return num1 + num2
}

let subtracao = (num1,num2) => {
    if (num1 >= num2) {
        return num1 - num2       
    }else{
        return num2 - num1
    }
}

let divisao = (num1,num2) => {
    if (num2 != 0) {
        return num1/num2        
    } else {
        num2/num1
    }
}

let multiplicacao = (num1,num2) => {
    return num1*num2
}

/* Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações. */

num1 = +prompt('Digite o primeiro número.')
num2 = +prompt('Digite o segundo número.')

console.log(`Soma: ${soma(num1,num2)}\nSubtração: ${subtracao(num1,num2)}\nMultiplicação: ${multiplicacao(num1,num2)}\nDivisão: ${divisao(num1,num2)}`)

console.log('O primeiro número digitado foi:', num1)
console.log('O segundo número digitado foi:',num2)
