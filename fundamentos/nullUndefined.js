let valor // não inicializada 
console.log(valor)
// console.log(valor2) -- Não declarada

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) -- Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(produto.preco)
delete produto.preco
console.log(produto.preco)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)