
function aplicarDesconto(){
    const desconto = 0.3;
    livrosComDesconto = livros.map( livro => {
        // os ... significa: faz uma cópia de livro e vou alterar apenas o preço dele
        return {...livro, preco : livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}