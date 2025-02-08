document.addEventListener("DOMContentLoaded", () => {
  // 1. Animação inicial do Drone (carregamento) - OPICIONAL
  const droneAnimationWrapper = document.getElementById("drone-animation");
  const droneLoading = document.getElementById("drone-loading");

  if (droneAnimationWrapper && droneLoading) {
    gsap.fromTo(
      droneLoading,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: -window.innerHeight / 2 + 100,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(droneAnimationWrapper, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              droneAnimationWrapper.style.display = "none";
            },
          });
        },
      }
    );
  }

  // 2. Rolagem suave ao clicar nos links do menu
  const navLinks = document.querySelectorAll("#nav-menu ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Verifica se o elemento alvo existe
      if (targetSection) {
        gsap.to(window, {
          duration: 0.2, // Mantém transição rápida
          scrollTo: {
            y: targetSection, // Pode usar diretamente o elemento, em vez de offsetTop
            offsetY: 80       // Compensa o header fixo
          },
          ease: "power2.inOut",
        });
      }
    });
  });

  // 3. Menu Hamburguer (mobile)
  const menuBtn = document.getElementById("burger-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuBtn.addEventListener("change", () => {
    navMenu.classList.toggle("open");
  });

  // Fechar menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuBtn.checked = false; // Fecha animação do menu
    });
  });

  // 4. Animação de Fade-In das seções ao rolar (GSAP)
  const fadeInSections = document.querySelectorAll(".fade-in-section");
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
  }
  function checkFadeIn() {
    fadeInSections.forEach((section) => {
      if (isElementInViewport(section)) {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    });
  }
  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn();

  // 5. Dropdown "Sobre" (abre/fecha ao clique)
  const dropdownLi = document.querySelector(".dropdown");
  const dropdownBtn = document.querySelector(".dropdown .dropbtn");

  if (dropdownLi && dropdownBtn) {
    dropdownBtn.addEventListener("click", (event) => {
      event.preventDefault();
      dropdownLi.classList.toggle("open");
    });

    // Fecha caso clique fora
    window.addEventListener("click", (event) => {
      if (!dropdownLi.contains(event.target)) {
        dropdownLi.classList.remove("open");
      }
    });
  }
});

// Botão "Voltar ao Topo"
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

// Mostrar ou ocultar o botão "Voltar ao Topo" ao rolar a página
window.addEventListener('scroll', function () {
  const scrollTopButton = document.querySelector('.scroll-top');
  if (window.pageYOffset > 200) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});
