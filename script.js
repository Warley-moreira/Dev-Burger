const lista = document.querySelector('ul');
const mostraProduto = document.querySelector('.mostrarTudo');
const descontoMap = document.querySelector('.descontoProdutos');
const somarTudo = document.querySelector('.somarProduto');
const filtraLista = document.querySelector('.filtraProduto');

function formatoDaMoeda(valor) {
    const novoValor = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return novoValor;
}

function mostrarConteudo(novoProduto) {
    let novaLista = '';
    novoProduto.forEach((produtos) => {

        novaLista +=
            `
        <li>
            <img src=${produtos.src}>
            <p>${produtos.name}</p>
            <p class="item-price">${formatoDaMoeda(produtos.price)}</p>
        </li>
    
      `
        lista.innerHTML = novaLista;
    });
}

function descontoProduto() {
    const novoPreco = menuOptions.map((produto) => ({
        ...produto,
        price: produto.price * 0.90,
    }));

    mostrarConteudo(novoPreco)
}

function totalProduto() {
    const total = menuOptions.reduce((acumulado, atual) => acumulado + atual.price, 0);

    lista.innerHTML =
        ` <li>
             <p>Ah soma Total da comprar é ${formatoDaMoeda(total)} Reais</p>
         </li>
        `
}

function filtrar() {
    const filtrarSaudaveis = menuOptions.filter(produto => produto.vegan);
    mostrarConteudo(filtrarSaudaveis)
}

mostraProduto.addEventListener('click', () => mostrarConteudo(menuOptions));
descontoMap.addEventListener('click', descontoProduto);
somarTudo.addEventListener('click', totalProduto);
filtraLista.addEventListener('click', filtrar)


