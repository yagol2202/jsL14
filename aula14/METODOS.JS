// O método splice() é utilizado para adicionar ou remover elementos de um array. Ele recebe dois parâmetros principais: o índice de início e o número de elementos a serem removidos. No exemplo acima, o método splice() removeu o elemento no índice 1 (que é o número 20) e retornou esse elemento em um novo array chamado "retorno". O array original "numeros" agora contém apenas os elementos restantes: [10, 30, 40, 50].
let numeros = [10, 20, 30, 40, 50];
console.log(numeros);
let retorno = numeros.splice(1,1)
console.log(retorno);

//metodo "existe" verifica se um elemento existe em um array, retornando true ou false
let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas.includes('banana'));


// atividade

let sapato = ['nike', 'preto', [12, 15, 20, 6, 8, 43, 31, 25, 28, 30]]
let numeracao = sapato[2]
let numerocleitinho = 6;

if (numeracao.includes(numerocleitinho)) {
    let indice = numeracao.indexOf(numerocleitinho);
    numeracao.splice(indice, 1);

    console.log(`O número ${numerocleitinho} foi encontrado e removido da numeração disponível.`);
    console.log(`Numeração restante: ${numeracao}`);
} else {
    console.log(`O número ${numerocleitinho} não foi encontrado na numeração disponível.`);
}
