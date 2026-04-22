let aluno = [
        {
        nome: 'João',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Maria',
        idade: 20,
        sexo: 'F',
        media : 9
    },
    {
        nome: 'Pedro',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Ana',
        idade: 20,
        sexo: 'F',
        media : 10
    },
    {
        nome: 'Joana',
        idade: 20,
        sexo: 'F',
        media : 9
    }
]
for (let x in aluno[1]) {
  console.log(`${x} : ${aluno[1][x]}`);
}
