let numeros = [
    12, 7, 25, 30, 18, 3, 41, 22, 9, 14,
    55, 60, 2, 33, 27, 8, 19, 44, 6, 11,
    72, 5, 39, 48, 16, 21, 10, 63, 36, 29,
    4, 17, 50, 28, 13, 70, 31, 24, 1, 66,
    15, 80, 23, 38, 20, 35, 42, 26, 53, 68,
    74, 57, 32, 45, 59, 6, 77, 34, 40, 52,
    61, 73, 84, 90, 11, 22, 37, 49, 58, 64,
    71, 83, 95, 100, 88, 76, 54, 43, 62, 67
];

let continuar = true;
let maiorpar = null, menorpar = null, maiorimpar = null, menorimpar = null;
let ultimaEntrada = null; 

while (continuar) {
    let entrada = prompt("Digite um número para verificar (ou 'sair' para encerrar):");

    if (entrada === null || entrada.toLowerCase() === "sair") {
        continuar = false;
    } else {
        let item = parseInt(entrada.trim());

        if (isNaN(item)) {
            alert("Por favor, digite um número válido.");
        } else {
            ultimaEntrada = item; 
            if (numeros.includes(item)) {
                alert(`O número ${item} ESTÁ presente no conjunto.`);
            } else {
                alert(`O número ${item} NÃO está presente no conjunto.`);
            }
        }
    }
}

for (let numero of numeros) {
    if (numero % 2 === 0) {
        if (menorpar === null || numero < menorpar) menorpar = numero;
        if (maiorpar === null || numero > maiorpar) maiorpar = numero;
    } else {
        if (menorimpar === null || numero < menorimpar) menorimpar = numero;
        if (maiorimpar === null || numero > maiorimpar) maiorimpar = numero;
    }
}

console.log("------- RESULTADOS -------");
console.log(`O último número solicitado foi: ${ultimaEntrada !== null ? ultimaEntrada : "Nenhum"}`);
console.log(`Maior número par: ${maiorpar !== null ? maiorpar : "Nenhum"}`);
console.log(`Menor número par: ${menorpar !== null ? menorpar : "Nenhum"}`);
console.log(`Maior número ímpar: ${maiorimpar !== null ? maiorimpar : "Nenhum"}`);
console.log(`Menor número ímpar: ${menorimpar !== null ? menorimpar : "Nenhum"}`);
