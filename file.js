document.addEventListener('DOMContentLoaded', () => {
    const modoClaroToggle = document.getElementById('modo-claro-toggle');
    const body = document.body;

    modoClaroToggle.addEventListener('click', () => {
        body.classList.toggle('modo-claro');

        // Verifica se o modo claro está ativado ou desativado e atualiza o armazenamento local
        const modoClaroAtivado = body.classList.contains('modo-claro');
        localStorage.setItem('modo-claro', modoClaroAtivado);

        // Se o modo claro estiver ativado, altera a imagem
        const imagemModoClaro = document.querySelector('.modo-imagem');
        if (modoClaroAtivado) {
            imagemModoClaro.src = 'https://cdn-icons-png.flaticon.com/512/4668/4668277.png';
        } else {
            // Caso contrário, retorna para a imagem original
            imagemModoClaro.src = 'https://cdn-icons-png.flaticon.com/512/581/581601.png';
        }
    });

    // Verifica o estado do modo claro no armazenamento local e aplica-o ao carregar a página
    const modoClaroSalvo = localStorage.getItem('modo-claro');
    if (modoClaroSalvo === 'true') {
        body.classList.add('modo-claro');
    }
});

