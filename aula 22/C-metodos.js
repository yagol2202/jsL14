const form = document.getElementById("formCadastro");
const user = document.getElementById("userName");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const confirmPassword = document.getElementById("userConfirmPassword");
async function cadastrarUsuario(usuario) {
        const resposta = await fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
})};
        
