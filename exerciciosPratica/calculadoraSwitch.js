function calculadora(num1, sinal, num2) {
    switch(sinal) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '/':
            return num1 / num2 
        case '*':
            return num1 / num2 
        default:
            console.log('Nenhum sinal definido, repita a operação')
    }
}


console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));
