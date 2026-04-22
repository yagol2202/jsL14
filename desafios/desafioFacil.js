let listaCompras = ["leite", "pão", "ovos", "frutas", "verduras"];
let continuar = true;

while (continuar) {
    let entrada = prompt("Digite um item (ou 'sair' para encerrar):");

    if (entrada === null || entrada.toLowerCase() === "sair") {
        continuar = false;
    } else {
        let item = entrada.toLowerCase().trim();

        if (listaCompras.includes(item)) {
            
            alert(`Atenção: O item "${item}" já está na lista e não será adicionado.`);
        } else {
            listaCompras.push(item);
            alert(`"${item}" foi adicionado!`);
        }
    }
}

console.log("------- LISTA DE COMPRAS ATUALIZADA -------");
listaCompras.forEach(item => console.log(`- ${item}`));
console.log("-------------------------------------------");
