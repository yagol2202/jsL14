let notas = [
7.5, 8.0, 5.5, 9.0, 6.0, 7.2, 4.8, 6.5, 8.3, 7.0,
5.9, 6.8, 7.7, 8.5, 9.2, 4.5, 5.0, 6.2, 7.1, 8.8,
9.5, 3.5, 4.0, 6.9, 7.8, 8.1, 5.4, 6.6, 7.3, 8.9,
9.0, 2.5, 3.8, 4.9, 5.7, 6.3, 7.4, 8.6, 9.1, 6.7,
5.2, 4.4, 3.9, 2.8, 7.6, 8.4, 9.3, 6.1, 5.6, 4.7,
3.2, 2.9, 1.5, 7.9, 8.7, 9.4, 6.4, 5.8, 7.0, 8.2
];
let aprovados = [];
let reprovados = [];
let situação = [];
let somatotal = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7.0) {
        aprovados.push(notas[i]);
    } else {
        reprovados.push(notas[i]);
    }
}
for (let nota of notas) {
    somatotal += nota;
}
let media = somatotal / notas.length;

    if (media >= 7.0) {
        situação.push("Aprovado");
    } if (media >= 5.0 && media < 7.0) {
        situação.push("Em recuperação");
    } else {
        situação.push("Reprovado");
    }


console.log("------- RESULTADOS -------");
console.log(`Média das notas: ${media.toFixed(2)}`);
console.log(`Aprovados: ${aprovados.length}`);
console.log(`Reprovados: ${reprovados.length}`);  
console.log(`Situação Final: ${situação[0]}`);  