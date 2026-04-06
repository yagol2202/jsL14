let num = parseInt(prompt("Digite um número:"));
contador = 0;
if (num % 2 === 0) {
    contador = 0;
    while (contador <= num) {
        console.log(contador);
        contador += 2;
    }
} else {
    contador = 1;
    while (contador <= num) {
        console.log(contador);
        contador += 2;
    }
}
 console.log("a soma do numeros pares é: " + contador);  
 console.log("a soma do numeros impares é: " + contador);     