// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

/**
 * Remove a classe 'selecionado' do botão atualmente selecionado
 */
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

/**
 * Marca o botão clicado como selecionado
 * @param {Element} botao - O botão que foi clicado
 */
function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

/**
 * Remove a seleção atual de personagem
 */
function desmarcarPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

/**
 * Exibe o personagem correspondente ao índice do botão clicado
 * @param {number} indice - Índice do botão clicado
 */
function mostrarPersonagem(indice) {
    personagens[indice].classList.add('selecionado');
}

/**
 * Função principal que adiciona os eventos de clique em cada botão
 */
function adicionarEventosAosBotoes() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            desmarcarBotaoSelecionado();
            marcarBotaoSelecionado(botao);
            desmarcarPersonagemSelecionado();
            mostrarPersonagem(indice);
        });
    });
}

// Inicializa o script
adicionarEventosAosBotoes();



