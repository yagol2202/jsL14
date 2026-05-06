const cardapio = {
    burgueres: [
        {
            nome: "Clássico Angus Burger",
            preco: 22.50,
            descricao: "Delicie-se com o nosso Hambúrguer Clássico, feito com um suculento hambúrguer de carne angus, queijo derretido, alface crocante, tomate fresco e um toque especial do nosso molho secreto. Perfeito para saciar sua fome!",
            img: "imagens/burger01.png"
        },
        {
            nome: "Gourmet Burger",
            preco: 35.00,
            descricao: "O nosso Hambúrguer Gourmet, preparado com um suculento hambúrguer de carne nobre, queijo derretido, cebola caramelizada e bacon. Uma escolha irresistível!",
            img: "imagens/burger02.png"
        },
        {
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            img: "imagens/burger03.png"
        }
    ],

    acompanhamentos: [
        {
            nome: "Fritas",
            preco: 15.00,
            descricao: "Nossas batatas fritas são o acompanhamento perfeito para qualquer refeição! Cortadas em palitos e fritas até ficarem douradas e crocantes por fora, e macias por dentro, elas são irresistíveis em cada mordida.",
            img: "imagens/acomp01.png"
        }
    ],

    bebidas: [
        {
            nome: "Coca-Cola",
            preco: 5.00,
            descricao: "Refresque-se com a clássica Coca-Cola gelada, uma bebida que encanta paladares há décadas. Com seu sabor único e inconfundível para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagens/bebida01.png"
        },
        {
            nome: "Sprite",
            preco: 5.00,
            descricao: "Revitalize seus sentidos com a refrescante Sprite, uma bebida cítrica e efervescente que desperta os sentidos e eleva o seu ânimo para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagens/bebida02.png"
        }
    ]
};

let carrinho = [];

document.addEventListener("DOMContentLoaded", () => {
   
    renderizarProdutos();

    
    configurarMenuLateral();
});

function criarCardProduto(produto) {
    return `
        <div class="card mb-3 p-2" style="max-width: 540px;">
            <div class="row g-0 align-items-center">
                <div class="col-4">
                    <img src="${produto.img}" class="img-fluid rounded-start" alt="${produto.nome}">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text text-muted" style="font-size: 0.9rem;">${produto.descricao}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold text-success">R$ ${produto.preco.toFixed(2)}</span>
                            <button class="btn btn-sm btn-primary" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function renderizarProdutos() {
    const secaoBurguer = document.getElementById("secaoBurguer");
    const secaoAcomp = document.getElementById("secaoAcompanhamentos");
    const secaoBebidas = document.getElementById("secaoBebidas");

    cardapio.burgueres.forEach(p => secaoBurguer.innerHTML += criarCardProduto(p));
    cardapio.acompanhamentos.forEach(p => secaoAcomp.innerHTML += criarCardProduto(p));
    cardapio.bebidas.forEach(p => secaoBebidas.innerHTML += criarCardProduto(p));
}


function configurarMenuLateral() {
    const linksMenu = document.querySelectorAll("nav ul li a");
    const offcanvasElement = document.getElementById("staticBackdrop");
    
    if (offcanvasElement) {
        const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
        linksMenu.forEach(link => {
            link.addEventListener("click", () => {
                bsOffcanvas.hide();
            });
        });
    }
}

function adicionarAoCarrinho(nomeItem, precoItem) {
    carrinho.push({ nome: nomeItem, preco: precoItem });
    atualizarVisualizacaoCarrinho();
}


function atualizarVisualizacaoCarrinho() {
    const corpoCarrinho = document.querySelector(".offcanvas-body");
    const tituloCarrinho = document.getElementById("staticBackdropLabel");
    
    tituloCarrinho.innerText = "Seu Carrinho";

    if (carrinho.length === 0) {
        corpoCarrinho.innerHTML = "<p class='text-muted text-center'>Seu carrinho está vazio.</p>";
        return;
    }

    let htmlCarrinho = "<ul class='list-group mb-3'>";
    let total = 0;

    carrinho.forEach(item => {
        htmlCarrinho += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.nome}
                <span class="badge bg-secondary rounded-pill">R$ ${item.preco.toFixed(2)}</span>
            </li>
        `;
        total += item.preco;
    });

    htmlCarrinho += `
        </ul>
        <div class="d-flex justify-content-between font-weight-bold border-top pt-2">
            <span><strong>Total:</strong></span>
            <span class="text-success"><strong>R$ ${total.toFixed(2)}</strong></span>
        </div>
        <button class="btn btn-success w-100 mt-3" onclick="alert('Pedido finalizado!')">Fechar Pedido</button>
    `;
    
    corpoCarrinho.innerHTML = htmlCarrinho;
}
