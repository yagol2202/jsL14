const ativ = document.querySelector ("atividade2")
const entradas = document.querySelectorAll('#entrada, #pratoPrincipal, #bebidas, #sobremesa');


const campoTaxa = document.getElementById('taxaServico');
const campoSubtotal = document.getElementById('subTotal');
const campoTotal = document.getElementById('total');


entradas.forEach(input => {
    input.addEventListener('input', () => {
        
      
        let subtotal = 0;
        entradas.forEach(campo => {
            subtotal += Number(campo.value) || 0;
        });

        
        const taxa = subtotal * 0.10;

       
        const totalGeral = subtotal + taxa;

        campoSubtotal.value = subtotal.toFixed(2);
        campoTaxa.value = taxa.toFixed(2);
        campoTotal.value = totalGeral.toFixed(2);
    });
});
