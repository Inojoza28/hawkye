document.addEventListener("DOMContentLoaded", () => {
  // 1. Animação inicial do Drone (carregamento) - OPICIONAL
  const droneAnimationWrapper = document.getElementById("drone-animation");
  const droneLoading = document.getElementById("drone-loading");

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

  // 2. Rolagem suave ao clicar nos links do menu
  const navLinks = document.querySelectorAll("#nav-menu ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      gsap.to(window, {
        duration: 0.1, // duração praticamente instantânea
        scrollTo: targetSection.offsetTop - 80,
        ease: "power2.inOut",
      });
    });
  });


  // 3. Menu Hamburguer (mobile)
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
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

  // Se quiser recalcular ao redimensionar a janela
  window.addEventListener("resize", () => {
    gsap.killTweensOf(introDrone);
    stopFloating();
    droneIdle();
  });
});

// Botão "Voltar ao Topo"
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

window.addEventListener('scroll', function () {
  var scrollTopButton = document.querySelector('.scroll-top');
  if (this.window.pageYOffset > 200) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});
