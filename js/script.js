// ao clicar em um summary, fecha todos os outros elements que estão abertos
const summaries = document.querySelectorAll("summary");

summaries.forEach((targetSummary) => {
  targetSummary.addEventListener("click", () => {
    summaries.forEach((summary) => {
      if (summary !== targetSummary) {
        summary.parentNode.removeAttribute("open");
      }
    });
  });
});

// atualiza a visibilidade do elemento h1 com base na largura da tela e na posição de rolagem
const header = document.querySelector("header");
const h1 = header.querySelector(".logo");

function verificaTamanhoTela() {
  if (window.innerWidth <= 1329 && window.pageYOffset < 10) {
    h1.style.display = "block";
  } else {
    h1.style.display = "none";
  }
}

window.addEventListener("scroll", verificaTamanhoTela);
window.addEventListener("resize", verificaTamanhoTela);

// é alternada no elemento da lista de navegação para mostrar ou esconder o menu e fazendo com que o menu seja fechado automaticamente
const menuToggle = document.querySelector(".icone-menu");
const menu = document.querySelector(".menu");
const itensDeNavegacao = document.querySelectorAll(".menu li a");

menuToggle.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("aberto");
});

itensDeNavegacao.forEach(function (item) {
  item.addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
});



// cria um carrossel de imagens com botões de navegação "Próximo" e "Anterior". Ele define o espaço entre as imagens como 16 pixels e usa o método scrollBy() para mover o carrossel para a esquerda ou para a direita quando um dos botões é clicado. Além disso, ele verifica se o carrossel chegou ao fim para desativar o botão "Próximo" ou "Anterior" apropriado.

const gap = -190;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

function checkWidth() {
  const width = carousel.offsetWidth;
  if (width < 800) {
    next.style.display = "none";
    prev.style.display = "none";
  } else {
    next.style.display = "flex";
    prev.style.display = "flex";
  }
}

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
  checkWidth();
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
  checkWidth();
});

let width = carousel.offsetWidth;
window.addEventListener("resize", checkWidth);
checkWidth();