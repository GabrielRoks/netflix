document.addEventListener('DOMContentLoaded', () => {
    const perfilLinks = document.querySelectorAll('.perfil');

    perfilLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const item = link.closest('.item-perfil');
            if(!item) return;

            const nomeEl = item.querySelector('.nome-perfil');
            const imgEl = item.querySelector('img');

            const nome = nomeEl ? nomeEl.textContent.trim() : '';
            let imgSrc = imgEl ? imgEl.getAttribute('src') : '';

            if(imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('/') && !imgSrc.startsWith('..')) {
                imgSrc = '../' + imgSrc;
            }

            try {
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imgSrc);
            } catch (e) {
                console.warn('Não foi possível salvar o perfil ativo no localStorage', e);
            }
        });
    });
});

