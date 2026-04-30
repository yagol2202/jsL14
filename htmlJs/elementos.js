const itens = document.getElementsByTagName('li');
console.log(itens);

const titulo = document.getElementsByTagName('h1');
console.log(titulo);

const destaque = document.getElementsByClassName('destaque');
console.log(destaque);

const lista = document.getElementById('lista');
console.log(lista.innerHTML);
lista.innerHTML += '<li>item</li>';
console.log(lista.innerText); 
console.log(lista.textContent);


titulo[0].style.color = 'red';
titulo[0].style.fontSize = '24px'; 
titulo[0].style.fontFamily = 'Arial, sans-serif';
titulo[0].style.backgroundColor = 'yellow';
