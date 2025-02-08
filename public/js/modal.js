document.addEventListener("DOMContentLoaded", () => {
    const bioButtons = document.querySelectorAll(".btn-bio");
    const modal = document.getElementById("bio-modal");
    const modalBioText = document.getElementById("modal-bio-text");
    const modalNameText = document.querySelector(".modal-name-text");
    const modalClose = document.querySelector(".modal-close");

    // Garante que o modal esteja oculto ao carregar a página
    modal.style.display = "none";

    // Dentro do evento de clique:
    bioButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const bioText = btn.getAttribute("data-bio");
            const nameText = btn.getAttribute("data-name");
            modalBioText.textContent = bioText;
            modalNameText.textContent = nameText;
            modal.style.display = "flex";
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
