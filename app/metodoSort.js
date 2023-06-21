
const botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

botaoOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){

    let livrosOrdenados = livros.sort((a,b)=>  a.preco - b.preco);
    //let livrosOrdenados = livros.sort((a,b)=>  {a.preco - b.preco}); // com {} não funcionou
    console.table(livrosOrdenados);
    exibirOsLivrosNaTela(livrosOrdenados);
}