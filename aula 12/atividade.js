let num = parseInt(prompt("Digite um número:"));
let contador = 0;
let somaPares = 0;
let somaImpares = 0;
if (num % 2 === 0) {
    contador = 0;
    while (contador <= num) {
        console.log(contador);
        somaPares += contador;
        contador += 2;
    }


} else {
    contador = 1;
    while (contador <= num) {
        console.log(contador);
        somaImpares += contador;
        contador += 2;
    }
   
}
  console.log("a soma do numeros pares é: " + somaPares); 
    console.log("a soma do numeros impares é: " + somaImpares);   