function mostrarResultado(numero, callback) {
    let resultado = callback(numero);
    console.log(`O resultado é: ${resultado}`);
}
mostrarResultado(4, (n) => {
    if(n > 0) {
        return n + "numero negativo";
    }
    if (n % 2 ===0) {
        let mult = n * n;
        return n + "," + mult + " é par";
        
    }else {
        return n + " é impar";
    }
});

