let usuario = {
    nome: "",
    idade: 0
}
let nomedigitado = prompt("Digite o nome do usuário:");
let idadedigitada = prompt("Digite a idade do usuário:");

usuario.nome = nomedigitado;
usuario.idade = parseInt(idadedigitada);

function cadastrarUsuario() {
    let chaves = Object.keys(usuario);
    if (!chaves.includes("nome") || !chaves.includes("idade")) {
        console.log("Erro: Dados do usuário incompletos.");
        return;
    }
    if (usuario.idade < 18) {
        console.log(`${usuario.nome} é menor de idade, cadastro não permitido.`);
    } else {
        console.log(`${usuario.nome} cadastrado com sucesso!`);
    }
}

cadastrarUsuario();