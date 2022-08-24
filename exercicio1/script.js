// a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.

/* function meuNome(){
    console.log("Olá, Marco Borges.")
}
meuNome() */

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

/* numero = [6]
divisores = Number(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function tabuada(a, b) {
    for (let i = 1;i <= 10;i ++)
    console.log(a*i)    
}

tabuada(numero*divisores) */

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions

let meuNome = (meuNome) => {
    return `Olá, ${meuNome}`
}
console.log(meuNome('Marco Borges'))

numero = [6]
divisores = Number(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

const fazerTabuada = (a, b) => {
    for (let i = 1;i<=10;i ++)
    console.log(a*i)    
}

fazerTabuada (numero*divisores)

