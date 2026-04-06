let preco = Number(prompt("Digite o preço do produto:"));
let escolha = prompt("Digite a cor da sua escolha: Verde, Amarelo, Azul ou Vermelho").toLowerCase();
let desconto; // Declarando a variável

switch (escolha) {
    case "verde": // Com aspas e tudo minúsculo (por causa do toLowerCase)
        desconto = preco * 0.10;
        preco = preco - desconto;
        break;
    case "amarelo":
        desconto = preco * 0.20;
        preco = preco - desconto;
        break;    
    case "azul":
        desconto = preco * 0.30;
        preco = preco - desconto;
        break;
    case "vermelho":
        desconto = preco * 0.40;
        preco = preco - desconto;
        break;    
    default:
        desconto = 0;
        console.log("Cor inválida ou sem desconto.");
}

console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Preço final: R$ ${preco.toFixed(2)}`);
