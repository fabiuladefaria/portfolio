// ===== FORMULÁRIO =====
const form = document.querySelector('.form-contato');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const telefone = form.telefone.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (!nome || !email || !telefone || !mensagem) {
            alert('Preencha todos os campos.');
            return;
        }

        const assunto = encodeURIComponent(`Contato do site - ${nome}`);
        const corpo = encodeURIComponent(
            `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
        );

        // Vai para página de obrigado
        window.location.href = 'obg.html';

        // Abre o e-mail
        setTimeout(() => {
            window.open(
                `mailto:fabiulafaria@gmail.com?subject=${assunto}&body=${corpo}`,
                '_blank'
            );
        }, 300);

        return false; // trava total do submit
    });
}

// ===== MENU HAMBURGUER =====
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}
