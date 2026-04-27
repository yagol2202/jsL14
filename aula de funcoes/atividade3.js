let alunos = [
    {
        nome: 'Cleitinho',
        notas: [10, 9, 8],
        faltas: [1, 0, 2]
    },
    {
        nome: 'Sandoval',
        notas: [7, 6, 5],
        faltas: [0, 1, 0]
    }
]
function calcularMedia(alunos) {
    return alunos.map(aluno => {
        let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / aluno.notas.length;
    });
}
function calcularFaltas(alunos) {
    return alunos.map(aluno => {
        return aluno.faltas.reduce((acc, falta) => acc + falta, 0);
    });
}
function verificarStatusFinal(alunos) {
    let medias = calcularMedia(alunos);
    let totalFaltas = calcularFaltas(alunos);

    return alunos.map((aluno, i) => {
        // Critério: Média >= 7 E faltas <= 2
        if (medias[i] >= 7 && totalFaltas[i] <= 2) {
            return `Aprovado (Média: ${medias[i].toFixed(1)}, Faltas: ${totalFaltas[i]})`;
        } else {
            return `Reprovado (Média: ${medias[i].toFixed(1)}, Faltas: ${totalFaltas[i]})`;
        }
    });
}

function mostrarDados(alunos, callback) {
    let resultados = callback(alunos);

    alunos.forEach((aluno, i) => {
        console.log(`--------------------------`);
        console.log(`Aluno: ${aluno.nome}`);
        console.log(`Status: ${resultados[i]}`);
    });
}
mostrarDados(alunos, verificarStatusFinal);