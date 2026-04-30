const listaAtividades = document.getElementById('atividades');

for (let i = 0; i < 3; i++) {
  let nomeAtividade = prompt("Qual atividade deseja adicionar?");
  let ehPrioritaria = prompt("Essa atividade é prioritária? (sim/não)").toLowerCase();

  
  if (ehPrioritaria === 'sim') {
    listaAtividades.innerHTML += `<li style="color: red;">${nomeAtividade}</li>`;
  } else {

    listaAtividades.innerHTML += `<li>${nomeAtividade}</li>`;
  }
}
