let numero = parseInt(prompt ("Digite um número (ou uma letra para sair):"));
let somaPares = 0;
let contadorImpares = 0;

while (!isNaN(numero)) {
    if (numero % 2 == 0) {
        somaPares += numero*2;
        console.log(`Número par: ${numero}` + ` - Soma dos pares: ${somaPares}`);
    } else {
       
        contadorImpares++;
         console.log(`Número ímpar: ${numero}` + ` - Contador de ímpares: ${contadorImpares}`);
    }
    numero = parseInt(prompt ("Digite um número (ou uma letra para sair):"));
}
