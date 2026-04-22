
let nomesProdutos = [];
let valoresProdutos = [];
let quantidade = parseInt(prompt("Quantos produtos deseja cadastrar?"));
for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome do produto ${i + 1}:`);
    nomesProdutos.push(nome);
    let valor = parseFloat(prompt(`Digite o valor de ${nome}:`));
    valoresProdutos.push(valor);
}
console.log("------- NOTA FISCAL -------");

for (let i = 0; i < nomesProdutos.length; i++) {
    console.log(`${nomesProdutos[i]} - R$ ${valoresProdutos[i].toFixed(2)}`);
}
console.log("---------------------------");
