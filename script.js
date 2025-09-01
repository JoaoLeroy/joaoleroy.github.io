document.addEventListener("DOMContentLoaded", function () {
  const openModalButtons = document.querySelectorAll(".open-modal");
  const closeButtons = document.querySelectorAll(".close-button");
  const modals = document.querySelectorAll(".modal");

  // Função para abrir o modal
  openModalButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o comportamento padrão do link (#)
      const modalId = this.dataset.modal; // Pega o ID do modal do atributo data-modal
      const targetModal = document.getElementById(modalId);

      if (targetModal) {
        targetModal.classList.add("active"); // Adiciona a classe 'active' para mostrar o modal
        document.body.style.overflow = "hidden"; // Desabilita o scroll da página principal
      }
    });
  });

  // Função para fechar o modal (botão X)
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal"); // Encontra o modal pai do botão de fechar
      if (modal) {
        modal.classList.remove("active"); // Remove a classe 'active' para esconder o modal
        document.body.style.overflow = ""; // Restaura o scroll da página principal
      }
    });
  });

  // Função para fechar o modal clicando fora dele
  modals.forEach((modal) => {
    modal.addEventListener("click", function (event) {
      // Se o clique foi diretamente no fundo do modal (e não no modal-content)
      if (event.target === this) {
        this.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Função para fechar o modal com a tecla ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modals.forEach((modal) => {
        if (modal.classList.contains("active")) {
          modal.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }
  });
});