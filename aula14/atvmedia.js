let alunosnotas = [
    ['joão', 10,10,8],
    ['maria', 9,10,9],
    ['pedro', 8,7,6],
    ['ana', 7, 5, 7],
    ['joana', 6, 8, 10]
]

for (let i = 0; i < alunosnotas.length; i++) {
    let aluno = alunosnotas[i][0]
    let soma = 0;
    let totalnotas = 0;

    for (let j = 1; j < alunosnotas[i].length; j++) {
        soma += alunosnotas[i][j]
        totalnotas++
    }
    let media = soma / totalnotas
    console.log(`Aluno: ${aluno} - Média: ${media.toFixed(2)}`)
}