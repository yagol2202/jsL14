let preco = Number(prompt("Digite o preço do produto:"));
let escolha = prompt("Digite a cor da sua escolha: Verde, Amarelo, Azul ou Vermelho").toLowerCase();
switch (escolha) {
    case verde:
        console.log("Voce tem 10% de desconto");
        break;
    case amarelo:
        console.log("Voce tem 20% de desconto");
        break;    
    case azul:
        console.log("Voce tem 30% de desconto");
        break;
    case vermelho:
        console.log("Voce tem 40% de desconto");
        break;    
    default:
        console.log("Opcao invalida");
}