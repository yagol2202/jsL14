async function mostrarUsuarios() {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();

        const totalUsuarios = data.length;
        const listaUsuarios = document.createElement('ul');

        data.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.name.firstname} ${usuario.name.lastname}`;
            listaUsuarios.appendChild(li);
        });

        const divUsuarios = document.getElementById('usuarios');
        divUsuarios.innerHTML = '';
        divUsuarios.appendChild(document.createElement('h1')).textContent = `Usuários cadastrados: ${totalUsuarios}`;
        divUsuarios.appendChild(listaUsuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

mostrarUsuarios();
