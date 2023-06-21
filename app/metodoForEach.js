const elementoParaInserirLivro = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros){

    elementoParaInserirLivro.innerHTML = '';

    listaDeLivros.forEach(livro => {
        
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        //let disponibilidade = verificaDisponibilidadeDoLivro(livro);

        elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
        
        elementoParaInserirLivro.innerHTML +=
         `<div class="livro">
         <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
         <h2 class="livro__titulo">
           ${livro.titulo}
         </h2>
         <p class="livro__descricao">${livro.autor}</p>
         <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
         <div class="tags">
           <span class="tag">Front-end</span>
         </div>
       </div>`;
    });
}

/*
function verificaDisponibilidadeDoLivro(livro){
    if(livro.quantidade > 0){
        return 'livro__imagens'; // true; // já retorno o nome da classe
    } else {
        return 'livro__imagens indisponivel';
    }
}
*/
