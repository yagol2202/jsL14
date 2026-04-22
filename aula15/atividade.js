let Livraria = {
    nome: "Livraria do Cleitinho",
    endereco: "Rua do Cleitinho, 123",
    livros: []
}

let modeloLivro = {
    titulo: "titulo do livro",
    autor: "autor do livro",
    ano: 2020,
    editora: "editora do livro",
    preco:10, 
    estoque: 10
}
let livro1 = Object.create(modeloLivro)
livro1.titulo = "Biblia Sagrada"
livro1.autor = "Profetas e Apóstolos"
livro1.ano = 1500
livro1.editora = "Editora Sagrada"
livro1.preco = 100
livro1.estoque = 50
Livraria.livros.push(livro1)
let livro2 = Object.create(modeloLivro)
livro2.titulo = "O Senhor dos Anéis"    
livro2.autor = "J.R.R. Tolkien"
livro2.ano = 1954
livro2.editora = "Editora HarperCollins"
livro2.preco = 50
livro2.estoque = 30
Livraria.livros.push(livro2)
let livro3 = Object.create(modeloLivro)
livro3.titulo = "O Duque e eu"
livro3.autor = "Julia Quinn"
livro3.ano = 2000
livro3.editora = "Editora Arqueiro"
livro3.preco = 30
livro3.estoque = 20
Livraria.livros.push(livro3)



const livroConcorrente = `{
  "titulo": "JavaScript: O Guia Definitivo",
  "autor": "David Flanagan",
  "ano": 2020,
  "editora": "Novatec",
  "preco": 129.9,
  "estoque": 25
}`

let livrariaConcorrentejs = JSON.parse(livroConcorrente)
livrariaConcorrentejs.preco *= 0.7;
livrariaConcorrentejs.estoque *= 2;
Livraria.livros.push(livrariaConcorrentejs)
let jasonlivraria = JSON.stringify(Livraria)
 console.log (`---Livros Listados na livraria do Cleitinho---`)
for (livro of Livraria.livros) {
    console.log(`Título: ${livro.titulo}`)
    console.log(`Autor: ${livro.autor}`)
    console.log(`Preço: R$${livro.preco.toFixed(2)}`)
}
