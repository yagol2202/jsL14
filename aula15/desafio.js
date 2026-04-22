let usuarios = [

    {nome:'Joao', email:'joao@email', senha: '1235'},
    {nome:'Maria', email:'maria@email'},
    {nome:'Pedro', email:'pedro@email', senha: '1235'},
    {nome:'Ana', email:'ana@email', senha: '1235'},
    {nome:'Cleitinho', email:'cleitinho@email'},
]
for(let i = 0; i < usuarios.length; i++){
    if('senha' in usuarios[i]){
        console.log(`${usuarios[i].nome} ja possui senha.`)
    } else{
        usuarios[i].senha= prompt('digite uma senha ')
        console.log(`senha criada para: ${usuarios[i].nome}`)
    }
}