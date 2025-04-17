document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".tab-link");
    const sections = document.querySelectorAll(".tab-content");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        // Remove ativa das outras
        links.forEach(l => l.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));
  
        // Adiciona na selecionada
        this.classList.add("active");
        const target = document.getElementById(this.dataset.tab);
        target.classList.add("active");
      });
    });
  });