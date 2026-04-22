let filanormal = ['julia', 'yago', 'noah']
let filaprioritaria = ['maria', 'pedro', 'ana']
let atendidos = []

let pacientenormal = filanormal.shift()
atendidos.push(pacientenormal)
console.log(`Paciente atendido da fila normal: ${pacientenormal}`)

let pacienteprioridade = filaprioritaria.shift()
atendidos.push(pacienteprioridade)
console.log(`Paciente atendido da fila prioritária: ${pacienteprioridade}`)

for (let i = 1; i < 4; i++) {
    if(i%2 == 1){
        pacienteprioridade = filaprioritaria.shift()
        atendidos.push(pacienteprioridade)
        console.log(`Paciente atendido da fila prioritária: ${pacienteprioridade}`)
    }
    else{ 
        pacientenormal = filanormal.shift()
        atendidos.push(pacientenormal)
        console.log(`Paciente atendido da fila normal: ${pacientenormal}`)
    }
    let paciente = filanormal.shift()
    atendidos.push(paciente)
    console.log(`Paciente atendido da fila normal: ${paciente}`)
}