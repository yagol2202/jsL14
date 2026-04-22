let produto = `{
    "nome": "TV 4K",
    "preco": 5000,
    "qtd": 10,
    "estoque": true
}`
let produto1 = JSON.parse(produto)
produto1.valorAvista = 4500
produto1.qtd = 100
produto1.fabricante = "sansung"
delete produto1.estoque
let produto2 = JSON.stringify(produto1)
console.log(produto)
console.log(produto2)