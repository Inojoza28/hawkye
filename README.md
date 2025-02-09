# Hawkye - Resgate Inteligente

## Descrição do Projeto

**Hawkye - Resgate Inteligente** é um site desenvolvido para apresentar uma ideia inovadora de startup que utiliza drones, inteligência artificial e tecnologias avançadas para operações de resgate em situações de emergência.  
> **Importante:** A ideia do projeto não é de minha autoria; este site foi desenvolvido integralmente por mim para atender à proposta da startup.

## Funcionalidades

- **Design Responsivo e Moderno**  
  O site foi desenvolvido com uma abordagem mobile-first, garantindo que todos os elementos – desde o menu de navegação até as animações interativas – se adaptem perfeitamente a diferentes tamanhos de tela.

- **Animação de Carregamento do Drone**  
  Uma animação inicial (utilizando GSAP) simula o carregamento do drone, criando um impacto visual enquanto o site é carregado.

- **Scroll Suave e Animação de Fade-In**  
  Ao clicar nos links do menu, o site realiza uma rolagem suave (usando GSAP e ScrollToPlugin) para a seção desejada. Além disso, as seções fazem uma animação de fade-in à medida que entram na área visível da tela.

- **Menu de Navegação Interativo com Dropdown Integrado**  
  O site conta com um menu de navegação totalmente interativo que se adapta a diferentes dispositivos. No modo desktop, os links são exibidos em linha, enquanto que, no modo mobile, o menu se transforma em um **hamburger menu** responsivo para facilitar a navegação.  
  Dentro deste menu, há um item “Sobre” que possui um **dropdown minimalista**. Ao ser clicado, esse dropdown revela duas opções dispostas verticalmente:  
  - **Sobre:** Exibe informações gerais sobre a startup e sua proposta inovadora.  
  - **Membros:** Direciona para a seção dedicada aos colaboradores, onde os cards dos membros são apresentados com detalhes e interatividade.  
  Essa abordagem garante uma experiência de navegação intuitiva e organizada, mantendo o design limpo e adaptável a todos os dispositivos.
  
  No modo desktop, o dropdown aparece sobreposto sem alterar a altura do header; em dispositivos móveis, ele se expande, empurrando os outros itens do menu conforme necessário.


- **Seção de Membros e Premiações**  
  - **Membros:** Cards individuais para cada colaborador, contendo foto, nome, cargo, links para redes sociais e um botão para exibir sua bio.
  - **Premiações:** Uma seção especial que exibe os prêmios e conquistas da startup, incluindo imagens, textos descritivos e animações interativas (como hover e transições suaves).


- **Modal para Visualização de Bios**  
  Cada card de colaborador possui um botão "Ver Bio". Ao clicar, um modal minimalista é exibido com o nome do colaborador (acompanha um ícone de usuário) e sua bio, proporcionando uma experiência limpa e organizada.

- **Feedback Sonoro e Animações Festivas**  
  Um botão "Clique e Comemore" foi adicionado na seção de premiações. Ao ser acionado:
  - É reproduzido um feedback sonoro (áudio de celebração).
  - Uma animação festiva é disparada, combinando confetes (usando canvas-confetti) e balões que sobem – os balões são menores, realistas e desaparecem rapidamente.
  - No modo responsivo, o número de partículas de confete é reduzido para evitar sobrecarga visual.

## Tecnologias Utilizadas

- **HTML5** e **CSS3** (Flexbox, Media Queries, Animações com Keyframes)
- **JavaScript** (Vanilla JS)
- **GSAP** e **ScrollToPlugin** (para animações e rolagem suave)
- **canvas-confetti** (para a animação de confetes)
- **Font Awesome** (para ícones)
- **Áudio** (para feedback sonoro na celebração)

## Como Executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seuusuario/hawkye.git
