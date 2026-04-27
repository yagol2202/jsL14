let pessoas = [
    {nome: "João", idade: 30, cidade: "São Paulo", salario: 3000},
    {nome: "Maria", idade: 25, cidade: "Rio de Janeiro", salario: 2500},
    {nome: "Pedro", idade: 35, cidade: "Belo Horizonte", salario: 3500}
];

pessoas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}, Salário: R$${pessoa.salario} bonus: R$${pessoa.salario * 0.20}
    novosalarios: R$${pessoa.salario + (pessoa.salario * 0.20)}`);
});