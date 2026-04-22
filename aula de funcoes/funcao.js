let n1 = prompt("Digite o primeiro númeroda soma:");
let n2 = prompt("Digite o segundo número da soma:");
let n3 = prompt("Digite o primeiro número da subtração:");
let n4 = prompt("Digite o segundo número da subtração:");
let n5 = prompt("Digite o primeiro número da multiplicação:");
let n6 = prompt("Digite o segundo número da multiplicação:");
let n7 = prompt("Digite o primeiro número da divisão:");
let n8 = prompt("Digite o segundo número da divisão:");
soma(n1, n2);
subtracao(n3, n4);
multiplicacao(n5, n6);
divisao(n7, n8);

function soma(a, b) {
    console.log("Soma:", a + b);
}

function subtracao(a, b) {
    console.log("Subtração:", a - b);
}

function multiplicacao(a, b) {
    console.log("Multiplicação:", a * b);
}

function divisao(a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero!");
        return;
    }
    console.log("Divisão:", a / b);
}

