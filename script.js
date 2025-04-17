// Menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Validação básica de formulário
document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});
