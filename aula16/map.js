let produtos = [
    {nome: "Camiseta", preco: 50.00, etiqueta: "vermelho", departamento: "Roupas"},
    {nome: "Calça", preco: 100.00, etiqueta: "verde", departamento: "Roupas"},
    {nome: "Tenis", preco: 150.00, etiqueta: "amarelo", departamento: "Calcados"},
    {nome: "Blusa", preco: 30.00, etiqueta: "vermelho", departamento: "Roupas"},
    {nome: "Sapato", preco: 80.00, etiqueta: "vermelho", departamento: "Calcados"},
    {nome: "Meia", preco: 10.00, etiqueta: "verde", departamento: "Roupas"},
    {nome: "Chinelo", preco: 20.00, etiqueta: "amarelo", departamento: "Calcados"}
];

let produtosComDesconto = produtos.map((produto) => {
    let desconto = 0;
    if (produto.etiqueta === "vermelho") {
        desconto = 0.20;
    } if (produto.etiqueta === "verde") {
        desconto = 0.10;
    } else if (produto.etiqueta === "amarelo") {
        desconto = 0.05;
    }
    return { nome: produto.nome,
         precoDesconto: produto.preco - (produto.preco * desconto),};
});


console.log(produtosComDesconto);