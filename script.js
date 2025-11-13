document.addEventListener("DOMContentLoaded", function() {
  // --- ELEMENTOS ---
  const img = document.getElementById("img-eu");
  const nome = document.querySelector(".perfil h1");
  const btn = document.querySelector("button");
  const icones = document.querySelectorAll(".redes img");

  if (img) {
    img.style.opacity = "0";
    img.style.transform = "scale(0.8)";
    img.style.filter = "blur(5px)";
    setTimeout(() => {
      img.style.transition = "all 1.3s ease";
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
      img.style.filter = "blur(0)";
    }, 300);
  }


  if (nome) {
    nome.style.opacity = "0";
    nome.style.letterSpacing = "4px";
    setTimeout(() => {
      nome.style.transition = "all 1.3s ease";
      nome.style.opacity = "1";
      nome.style.letterSpacing = "1px";
    }, 900);
  }

  
  if (btn) {
    btn.style.transition = "all 0.3s ease";
    btn.style.boxShadow = "0 0 10px rgba(37, 211, 102, 0.6)";

    setInterval(() => {
      btn.animate(
        [
          { transform: "scale(1)", boxShadow: "0 0 10px rgba(37, 211, 102, 0.6)" },
          { transform: "scale(1.08)", boxShadow: "0 0 25px rgba(37, 211, 102, 0.9)" },
          { transform: "scale(1)", boxShadow: "0 0 10px rgba(37, 211, 102, 0.6)" }
        ],
        {
          duration: 1500,
          iterations: 1,
          easing: "ease-in-out"
        }
      );
    }, 4000);

    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.boxShadow = "0 0 25px rgba(37, 211, 102, 0.9)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "0 0 10px rgba(37, 211, 102, 0.6)";
    });
  }


  icones.forEach(icon => {
    icon.style.transition = "all 0.4s ease";
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.2) rotate(5deg)";
      icon.style.filter = "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))";
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1) rotate(0)";
      icon.style.filter = "drop-shadow(0 0 0 transparent)";
    });
  });

  
  const elementos = document.querySelectorAll(".perfil, .direita, footer");
  window.addEventListener("scroll", () => {
    elementos.forEach(el => {
      const pos = el.getBoundingClientRect().top;
      const altura = window.innerHeight;
      if (pos < altura - 100) {
        el.style.transition = "all 1s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  });

  elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
  });
});
