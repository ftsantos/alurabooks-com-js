//const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
//btnFiltrarLivrosFront.addEventListener('click', filtrarLivrosFront);
const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros(){

    const botaoClicado = document.getElementById(this.id);
    let categoria = botaoClicado.value;

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorQuantidade() : filtrarPorCategoria(categoria);

    //console.table(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados);

    if(categoria == 'disponivel'){
        //let valorTotal = livrosFiltrados.reduce((acc, atual) => acc + atual.preco, 0);
        let valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML =
    `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
}