let produtos = [
    {nome: "Banana", preco: 2.00, categoria: "Fruta"},
    {nome: "Abacaxi", preco: 5.00, categoria: "Fruta"},
    {nome: "Laranja", preco: 3.00, categoria: "Fruta"},
    {nome: "Pera", preco: 4.00, categoria: "Fruta"},
]
const promocao = document.getElementById("promo");
promocao.innerHTML = "<h2>Promoção de Frutas</h2>";
promocao.innerHTML += produtos.map(produto => `<p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>`).join("");
console.log(promocao.innerHTML);