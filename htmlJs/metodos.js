const listaAtividades = document.createElement(<ul></ul>)

for(let i=0; i<3; i++){
    let itenslista =  prompt('qual a sua tarefa')
    let simNao = prompt('e prioridade? (sim/nao)')

    if(simNao === 'sim'){
        listaAtividades.innerHTML += `<li style= "color red" >${simNao}</li>`

    }else {
        listaAtividades.innerHTML 
        += `<li>${itenslista}</li>`
    }
}

