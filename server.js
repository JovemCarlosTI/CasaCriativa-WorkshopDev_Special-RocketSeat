// usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Cursos de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    url: "http://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729069.svg",
    title: "Yoga",
    category: "Exercício",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    url: "http://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    url: "http://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729050.svg",
    title: "Café",
    category: "Alimentação",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    url: "http://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729042.svg",
    title: "Netflix",
    category: "Diversão",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    url: "http://rocketseat.com.br"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729021.svg",
    title: "Steam",
    category: "Jogos",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    url: "http://rocketseat.com.br"
  },
]


// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

// Configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server,
  noCache: true, // Boolean

});

// Criei uma rota e capturo o pedido do cliente para responder
server.get("/", function(req, res) {

  const reversedIdeas = [...ideas].reverse();

  let lastIdeas = []

    for(let idea of reversedIdeas) {
      if(lastIdeas.length < 2) {
        lastIdeas.push(idea);
      }
    }

  return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", function(req, res) {

  const reversedIdeas = [...ideas].reverse();

  return res.render("ideias.html", { ideas: reversedIdeas });
});

// Liguei meu servidor na porta 3000
server.listen(3000);