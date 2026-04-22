let funcionario ={
    nome: "João",
    salario: 2000,
    anosEmpresa: 6,
    filhos: 2
}


let funcionario2 ={
    nome: "Maria",
    salario: 3000,
    anosEmpresa: 3
}
function calcularBonus(func) {
    let bonus = 0; 
    if (func.anosEmpresa > 5) {
        bonus += func.salario * 0.15; 
    }
    return bonus;
}
function filhos(func){
    if(func.filhos){
        console.log(`${func.nome} tem ${func.filhos} filhos.`);
    } else {
        console.log(`${func.nome} não tem filhos.`);
    }
}
function salariomodificado(func) {
    let novoSalario = func.salario + calcularBonus(func);
    console.log(`${func.nome} tem um novo salário de R$ ${novoSalario.toFixed(2)}.`);
}
filhos(funcionario);
filhos(funcionario2);
salariomodificado(funcionario);
salariomodificado(funcionario2);