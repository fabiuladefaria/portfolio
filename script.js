// ===== MODAL DE CERTIFICADOS =====
const modal = document.getElementById('modalCertificado');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.ver-certificado').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = btn.getAttribute('data-img');
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha modal clicando fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ===== FORMULÁRIO DE CONTATO =====
const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Animação do botão
    const botao = form.querySelector(".btn-solid");
    botao.style.transform = "scale(0.95)";
    setTimeout(() => botao.style.transform = "scale(1)", 200);

    // Envia o formulário para o StaticForms
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(() => {
        window.location.href = "obg.html";
    })
    .catch(() => {
        window.location.href = "obg.html";
    });
});

// ===== BUSCA COM DESTAQUE E ROLAGEM =====
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;

        const sections = document.querySelectorAll("h1, h2, h3, h4, p");

        // Limpa highlights anteriores
        sections.forEach(el => {
            el.style.backgroundColor = "transparent";
        });

        let firstMatch = null;

        sections.forEach(el => {
            if (el.textContent.toLowerCase().includes(query)) {
                if (!firstMatch) firstMatch = el;
            }
        });

        if (firstMatch) {
            // Rola suavemente 
            firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            alert("Nenhum resultado encontrado.");
        }
    }
});
// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

