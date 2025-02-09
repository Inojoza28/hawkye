document.addEventListener("DOMContentLoaded", () => {
  // Seletores essenciais
  const celebrarBtn = document.getElementById('btn-celebrar');
  const confettiCanvas = document.getElementById('confetti-canvas');
  const balloonsContainer = document.getElementById('balloons-container');

 
  const celebracaoAudio = new Audio('public/sounds/celebracao.mp3');

  // Verifica se os elementos existem
  if (celebrarBtn && confettiCanvas && balloonsContainer) {
    // Cria a instância do confetti
    const confettiInstance = confetti.create(confettiCanvas, {
      resize: true,
      useWorker: true, // melhora performance
    });

    celebrarBtn.addEventListener('click', () => {
      // Tocar som (caso o usuário permita)
      celebracaoAudio.play().catch(err => console.warn(err));

      // Define se é mobile (largura de tela menor que 768px)
      const isMobile = window.innerWidth < 768;

      // Menos confetes no mobile
      const particleCount = isMobile ? 60 : 120;

      // Dispara confetes
      confettiInstance({
        particleCount: 120,  // Número de partículas (confetes) que serão disparadas.
        spread: 70,          // Ângulo de dispersão, determinando o quão amplamente os confetes se espalham.
        origin: { y: 0.7 }   // Ponto de origem do disparo. Aqui, 'y: 0.7' indica que o confete
                             // começa aproximadamente 70% da altura da tela a partir do topo.
      });      

      // Lança balões
      launchBalloons(isMobile ? 8 : 12); 
    });
  }

  // Função para criar diversos balões
  function launchBalloons(count) {
    for (let i = 0; i < count; i++) {
      createBalloon();
    }
  }

  // Cria um balão individual
  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
 
    // Define cores aleatórias ou pré-determinadas
    const colors = ['#ff4081', '#ffeb3b', '#4caf50', '#2196f3', '#ff5722'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
 
    // Posição X aleatória (entre 10% e 90%)
    const randomX = Math.floor(Math.random() * 80) + 10;
    balloon.style.left = `${randomX}%`;
 
    // Tamanho aleatório se quiser
    const scale = Math.random() * 0.4 + 0.8; 
    balloon.style.transform = `scale(${scale})`;
 
    // Insere no container
    balloonsContainer.appendChild(balloon);
 
    // Remove o balão do DOM após a animação terminar (5s)
    balloon.addEventListener('animationend', () => {
      balloon.remove();
    });
  }
});
