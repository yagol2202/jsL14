async function carregarUsuarios() {
    const url = 'https://fakestoreapi.com/users' 
    const container = document.querySelector('#container-usuarios');

    try {
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        
        const usuarios = await resposta.json();

        
        container.innerHTML = '';

        
        const titulo = document.createElement('h1');
        titulo.textContent = `Usuários cadastrados: ${usuarios.length}`;
        container.appendChild(titulo);

        
        const lista = document.createElement('ul');

        
        usuarios.forEach(usuario => {
            
            const item = document.createElement('li');
            
       
            const primeiroNome = usuario.name.firstname;
            const sobrenome = usuario.name.lastname;
            
           
            const nomeCompleto = `${primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1)} ${sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1)}`;
            
            
            item.textContent = nomeCompleto;
            lista.appendChild(item);
        });

        
        container.appendChild(lista);

    } catch (erro) {
        console.error('Erro detalhado:', erro);
        container.innerHTML = `<p style="color: red;">Erro ao buscar usuários: ${erro.message}</p>`;
    }
}


carregarUsuarios();

