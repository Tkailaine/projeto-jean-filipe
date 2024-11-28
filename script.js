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
    name: 'Dinei Ferreira',
    position: '',
    photo: '',
    text:
    "Agradeço todo o desempenho e dedicação no meu caso, estou muito feliz também com o resultado! O seu profissionalismo é incontestável desde o início do processo até o fechamento do mesmo... Jean que Deus te abençoe grandemente e que você continue sempre esse profissional..Muito obrigado mesmo, sucesso!",
  },
  {
    name: 'Vitória Silva',
    position: '',
    photo: '',
    text:
    "Sou extremamente grata ao Dr. Jean, por me ajudar em um processo que eu não esperava, quando agendei uma reunião com ele percebi que fiz a escolha certa. Ele é um EXCELENTE advogado, um profissional comprometido com o trabalho. Nos atende sempre com seriedade e competência. Um trabalho sério e confiável. Sempre atencioso e esclarecendo todas as minhas dúvidas. Muito obrigado por tudo!",
  },
  {
    name: 'Thaissa Oliveira',
    position: '',
    photo: '',
    text:
    "Recomendo o Dr. Jean por ser um advogado super competente no que faz, além disso, sua empatia com o cliente, dedicação e apoio foi o que mais me chamou a atenção. Ele atuou em um caso meu que fiquei desesperada e logo após que ele tomou à frente, soube que estava em boas mãos. Obrigada Jean! ",
  },
  {
    name: 'Talita Freire',
    position: '',
    photo: '',
    text:
    "Gostaria de expressar minha eterna gratidão pelo excelente trabalho realizado. Toda sua dedicação, seu profissionalismo e competência fizeram toda a diferença em um momento delicado. Sua atuação impecável fez toda a diferença, e não tenho palavras para agradecer por todo o empenho e cuidado com que tratou o caso. Você não é apenas um ótimo advogado, mas uma pessoa de caráter, que demonstrou compromisso e com melhor interesse com seu cliente. Agradeço imensamente por tudo que fez, e fico tranquila sabendo que pude contar com você que é capacitado e confiável. Minha eterna gratidão e respeito!",
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
            title: "Décimo terceiro adiantado: empresas têm até sexta-feira (29) para pagar a 1ª parcela",
            date: "25/11/2024",
            image: "imagens/decimo.jpg",
            summary: "As empresas têm até sexta-feira (29) para pagar a 1ª parcela do 13º salário, garantindo o direito dos trabalhadores.",
            content: "As empresas têm até sexta-feira (29) para pagar a primeira parcela do 13º salário, conforme determina a lei. O prazo original é 30 de novembro, mas foi antecipado devido ao último dia útil. O valor corresponde a metade do salário bruto de novembro, sem descontos, enquanto a segunda parcela, com deduções de IR e INSS, será paga até 20 de dezembro.O 13º é garantido por lei aos trabalhadores CLT e pode ser proporcional ao tempo de serviço. Caso o prazo final coincida com domingos ou feriados, o pagamento deverá ser antecipado. Segundo o Dieese, o benefício deve injetar R$ 321,4 bilhões na economia este ano",
            source: "Fonte: CNN Brasil"
        },

        {
            title: "Justiça do Trabalho garante adicional de insalubridade a camareira de motel",
            date: "23/11/2024",
            image: "imagens/camareira.jpg",
            summary: "Justiça do Trabalho garante adicional de insalubridade a camareira de motel. Saiba mais sobre a decisão!",
            content: "A Justiça do Trabalho condenou um motel em Sobral (CE) a pagar à camareira o adicional de insalubridade em grau máximo, devido a riscos à saúde no ambiente de trabalho, como contato com resíduos biológicos e falta de EPIs adequados. Além disso, a empresa deverá pagar reflexos sobre 13º, férias, FGTS e outros encargos, após análise de perícia técnica.",
            source: "Fonte: Consultor Jurídico"
        },

        {
            title: "10 Estratégias para Evitar Processos Trabalhistas e Promover um Ambiente de Trabalho Saudável",
            date: "03/08/2024",
            image: "imagens/equipe.jpg",
            summary: "Descubra 10 dicas essenciais para evitar processos trabalhistas e criar um ambiente de trabalho mais saudável e produtivo.",
            content: "Manter um negócio sem enfrentar processos trabalhistas exigem estratégias estratégicas, como políticas claras, compliance trabalhista, boas práticas de gestão de RH e treinamentos contínuos. Além disso, prevenir o assédio, promover uma comunicação aberta e investir em auditorias internacionais ajuda a reduzir riscos. Consultoria jurídica preventiva e um ambiente saudável também são fundamentais para evitar litígios e garantir o bem-estar dos colaboradores. Implementando essas ações, sua empresa estará mais protegida legalmente e promoverá um local de trabalho mais harmonioso.",
            source: "Fonte: Migalhas de Peso"
        },
        
        
        {
            title: " Demitida Durante Contrato de Experiência, Gestante Deve Receber Salários e Indenização por Estabilidade",
            date: "10/08/2024",
            image: "imagens/gestante.jpg",
            summary: "Gestante demitida durante o contrato de experiência tem direito a contratação, benefícios e indenização. Descubra os detalhes da decisão judicial!",
            content: "A 5ª Turma do Tribunal Regional do Trabalho da 4ª Região (RS) determinou que uma gestante demitida durante o contrato de experiência receba a cláusula contratual correspondente ao período de estabilidade, indenização por danos morais de R$ 10 mil, além de 13º salário, férias, FGTS e multa de 40%. A empresa foi condenada por discriminar uma trabalhadora, que já estava ciente do risco de gestação, configurando violação dos direitos da gestante e da dignidade humana. A decisão foi unânime entre os desembargadores.",
            source: "Fonte: Justiça do Trabalho"
        },
        {
            title: " Por que as Startups Precisam de um Programa de Compliance?",
            date: "22/08/2024",
            image: "imagens/startup.jpg",
            summary: "Saiba por que as startups devem adotar um programa de compliance desde o início para garantir ética, segurança e atrair investidores. Entenda os benefícios!",
            content: "Para garantir a inovação e o crescimento sustentável, as startups devem adotar práticas de compliance, que garantam a conformidade com leis e padrões éticos. Isso envolve desde a segurança da informação até a prevenção à lavagem de dinheiro e corrupção. Um programa de compliance eficaz não apenas reduz riscos e protege a confiança, como também é essencial para atrair investimentos. Ao incorporar essas práticas, as startups constroem uma base sólida, demonstrando compromisso com a ética e a transparência, o que é crucial para seu sucesso a longo prazo.",
            source: "Fonte: Exame."
        },
        {
            title: "Juiz Declara Rescisão Indireta de Trabalhadora Endividada por Atrasos de Salários",
            date: "29/05/2024",
            image: "imagens/salario.jpg",
            summary: "Justiça permite rescisão indireta de contrato por atrasos salariais e inadimplência no FGTS, com indenização de R$ 5 mil.",
            content: "A Justiça do acompanhado Trabalho a rescisão indireta do contrato de um trabalhador de uma instituição educacional de Caratinga, após repetidos atrasos salariais e inadimplência no FGTS. A empregada, que ficou individualizada e teve seu nome incluído no SPC, foi indenizada em R$ 5 mil por danos morais. O juiz entendeu que o descumprimento das obrigações trabalhistas, incluindo o pagamento tardio dos contratos, causou grave prejuízo moral à funcionária. A empresa recorreu, mas a decisão foi mantida pelo Tribunal Regional do Trabalho.",
            source: "Fonte: Justiça do Trabalho"
        },
       
    ];

    // Função para ordenar os posts pela data em ordem cronológica decrescente (mais recentes primeiro)
    function sortPostsByDate(posts) {
        return posts.sort((a, b) => {
            const dateA = new Date(a.date.split("/").reverse().join("-"));
            const dateB = new Date(b.date.split("/").reverse().join("-"));
            return dateB - dateA; // Ordenação em ordem decrescente
        });
    }

    // Ordenando os posts antes de renderizar
    const sortedBlogPosts = sortPostsByDate(blogPosts);

    const blogContainer = document.getElementById("blog-posts");
    const loadMoreButton = document.getElementById("load-more");
    const showLessButton = document.getElementById("show-less");  // Botão Exibir Menos
    const POSTS_PER_PAGE = 6;
    const POSTS_INCREMENT = 3; // Incremento de posts ao clicar em "Ver mais"
    let currentPostsCount = POSTS_PER_PAGE; // Contador de posts exibidos

    // Função para renderizar os posts
    function renderPosts() {
        blogContainer.innerHTML = ""; // Limpa os posts
        sortedBlogPosts.slice(0, currentPostsCount).forEach(post => {
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

        // Mostrar ou esconder o botão "Ver mais notícias"
        if (currentPostsCount < sortedBlogPosts.length) {
            loadMoreButton.style.display = "block";
        } else {
            loadMoreButton.style.display = "none";
        }

        // Mostrar ou esconder o botão "Exibir menos"
        if (currentPostsCount > POSTS_PER_PAGE) {
            showLessButton.style.display = "block";
        } else {
            showLessButton.style.display = "none";
        }
    }

    // Ação para carregar mais posts
    loadMoreButton.addEventListener("click", () => {
        currentPostsCount += POSTS_INCREMENT; // Aumenta a quantidade de posts
        renderPosts();
    });

    // Ação para exibir menos posts
    showLessButton.addEventListener("click", () => {
        currentPostsCount = POSTS_PER_PAGE; // Reseta para o número inicial de posts
        renderPosts();
    });

    // Lógica para alternar entre mostrar mais ou menos conteúdo nos posts individuais
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

    renderPosts(); // Renderiza os primeiros posts ao carregar a página
});


