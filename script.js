/*!
 * Copyright (c) 2022 Brad Traversy
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


// ESSE ARQUIVO CONTÉM AS ANIMAÇÕES ADICIONADAS NO SITE

document.addEventListener('DOMContentLoaded', () => {

  // Menu lateral
  document.querySelectorAll('.menu-lateral a').forEach(link => {
      link.addEventListener('click', function() {
          document.querySelector('.menu-lateral').classList.remove('open');
          document.querySelector('.imenu').style.opacity = '1';
      });
  });

  document.querySelector('.imenu').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.add('open');
      document.querySelector('.imenu').style.opacity = '1';
  });

  document.querySelector('.close-btn').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.remove('open');
      document.querySelector('.imenu').style.opacity = '1';
  });

  // Função para verificar se um elemento está visível na tela
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Função para adicionar a classe de animação quando o elemento está visível na tela
  function toggleAnimation() {
      var textoDeslizante = document.querySelector('.texto-deslizante');
      if (isElementInViewport(textoDeslizante)) {
          textoDeslizante.classList.add('aparecer');
      }
  }

  // Adicionar evento de rolagem para ativar a função de alternância de animação
  window.addEventListener('scroll', toggleAnimation);
  // Chame a função para verificar se o elemento está visível quando a página for carregada
  toggleAnimation();

// Animação para os elementos com a classe 'animate'
const animateElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar o elemento após a animação
        }
    });
}, { threshold: 0.5 });

animateElements.forEach(element => {
    observer.observe(element);
});

  // Valores
  const valores = document.querySelectorAll('.valor');

  const observerValores = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observerValores.unobserve(entry.target); // Parar de observar após mostrar
          }
      });
  }, {
      threshold: 0.1
  });

  valores.forEach(valor => {
      observerValores.observe(valor);
  });

  // Contagem
  const counters = document.querySelectorAll('.counter');

  const updateCounter = (counter) => {
      counter.innerText = '0';
      const target = +counter.getAttribute('data-target');
      const increment = target / 200;

      const incrementCounter = () => {
          const c = +counter.innerText;
          if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              requestAnimationFrame(incrementCounter);
          } else {
              counter.innerText = target;
          }
      };

      incrementCounter();
  };

  const observerCounters = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              updateCounter(counter);
              observer.unobserve(counter); // Desativar o observador após a atualização do contador
          }
      });
  }, { threshold: 0.1 });

  counters.forEach(counter => {
      observerCounters.observe(counter);
  });

});

//ATENÇÃO! AQUI SERÁ ADICIONADO NOVOS RELATOS, PARA ADICIONAR BASTA COLOCAR OS DADOS NA SEGUINTE ESTRUTURA:
//   {
//    name: 'Alexandre Carvalho',
//    position: '',
//    photo:
//      '',
//    text:
//    "Pelo presente mensagem, venho agradecer a um exemplo de     advogada,Dra Maricy, pelos serviços prestados com dedicação,   desempenho e honestidade, caráter e profissionalismo de um gabarito enorme.Parabéns, Dra. E muito obrigada por tudo.",
//  }, entre as chaves [] do const testimonials como está abaixo, basta copiar colar e alterar as informações.

//relatos
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  
  {
    name: 'Fábio Guedes',
    position: '',
    photo: '',
    text:
    "Dr. Jean me ajudou a garantir meus direitos e receber minha rescisão",
  },
  {
    name: 'Alan André',
    position: '',
    photo: '',
    text:
    "Excelente advogado! ",
  },
  {
    name: 'Patrícia Linda Di Pietro',
    position: '',
    photo: '',
    text:
    "Sou cliente do Dr. Jean desde 2018 e agradeço pelo apoio e presteza de sempre.",
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

//JS MINI BLOG
document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = [
        {
            title: "Primeira Notícia",
            date: "23/11/2024",
            image: "https://via.placeholder.com/800x400",
            summary: "Este é o resumo da primeira notícia. Clique em 'Ler mais' para expandir.",
            content: "Aqui está o conteúdo completo da primeira notícia. Pode conter muito mais informações detalhadas que o resumo. ",
            source: "Fonte: Portal de Notícias"
        },
        {
            title: "Segunda Notícia",
            date: "22/11/2024",
            image: "https://via.placeholder.com/800x400",
            summary: "Resumo da segunda notícia. Um conteúdo interessante está por vir!",
            content: "Conteúdo completo da segunda notícia, descrevendo todos os detalhes relevantes e informações adicionais.",
            source: "Fonte: Jornal Online"
        },
        {
            title: "Terceira Notícia",
            date: "21/11/2024",
            image: "https://via.placeholder.com/800x400",
            summary: "Terceira notícia: algo de importante aconteceu e você precisa saber.",
            content: "Este é o conteúdo detalhado da terceira notícia. Informações valiosas para o leitor.",
            source: "Fonte: Revista Digital"
        },
        {
            title: "Quarta Notícia",
            date: "20/11/2024",
            image: "https://via.placeholder.com/800x400",
            summary: "Resumo da quarta notícia. Clique para explorar mais.",
            content: "Detalhes completos da quarta notícia para o público interessado.",
            source: "Fonte: Portal da Informação"
        },
        {
            title: "Quinta Notícia",
            date: "19/11/2024",
            image: "https://via.placeholder.com/800x400",
            summary: "Uma breve introdução sobre a quinta notícia.",
            content: "Conteúdo completo da quinta notícia. Aqui você encontra os detalhes e mais informações. ",
            source: "Fonte: Blog de Notícias"
        },
        {
            title: "Sexta Notícia",
            date: "18/11/2024",
            image: "https://via.placeholder.com/800x400",
            summary: "Resumo da sexta notícia. Clique para mais.",
            content: "Detalhes completos da sexta notícia, expandindo sobre o resumo.",
            source: "Fonte: Agência de Notícias"
        },
        {
            title: "Sétima Notícia",
            date: "17/11/2024",
            image: "https://via.placeholder.com/800x400",
            summary: "Resumo da sétima notícia. Algo interessante aconteceu.",
            content: "Aqui está o conteúdo completo da sétima notícia com todos os detalhes.",
            source: "Fonte: Mundo Digital"
        }
    ];

    const blogContainer = document.getElementById("blog-posts");
    const loadMoreButton = document.getElementById("load-more");
    const POSTS_PER_PAGE = 6; // Agora queremos mostrar 6 posts por vez
    let isExpanded = false;

    function renderPosts(limit = POSTS_PER_PAGE) {
        blogContainer.innerHTML = ""; // Limpa as notícias para renderizar novamente
        blogPosts.slice(0, limit).forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("blog-post");

            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p class="date">${post.date}</p>
                <p class="summary">${post.summary}</p>
                <p class="content">${post.content}</p>
                <p class="source">${post.source}</p> <!-- Fonte da notícia -->
                <button>Ler mais</button>
            `;

            blogContainer.appendChild(postElement);
        });

        // Mostra ou esconde o botão "Ver mais notícias"
        loadMoreButton.style.display = blogPosts.length > POSTS_PER_PAGE ? "block" : "none";

        // Atualiza o texto do botão com base no estado
        loadMoreButton.textContent = isExpanded ? "Exibir menos" : "Ver mais notícias";

        // Mostra os posts renderizados
        const postsToShow = blogContainer.querySelectorAll(".blog-post");
        postsToShow.forEach(post => {
            post.style.display = "block";
        });
    }

    blogContainer.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const button = event.target;
            const postElement = button.closest(".blog-post");
            const content = postElement.querySelector(".content");

            if (content.style.display === "block") {
                content.style.display = "none";
                button.textContent = "Ler mais";
            } else {
                content.style.display = "block";
                button.textContent = "Ler menos";
            }
        }
    });

    loadMoreButton.addEventListener("click", () => {
        isExpanded = !isExpanded; // Alterna entre expandido e colapsado
        if (isExpanded) {
            renderPosts(blogPosts.length); // Mostra todas as notícias
        } else {
            renderPosts(POSTS_PER_PAGE); // Mostra apenas as primeiras 6 notícias
        }
    });

    renderPosts(); // Renderiza as primeiras 6 notícias ao carregar
});
