// Objeto Pokedex
let pokedexObj = new Object();
// Xhttp
let xhttp = new XMLHttpRequest();
// Função para carregar Pokedex
function loadPokedex(gen) {
  // Variavel para manipular o DOM
  let ul = document.getElementById("root");
  // Limpando a pokedex para mudar de geração
  let listLength = ul.children.length;
  for (i = 0; i < listLength; i++) {
    ul.removeChild(ul.children[0]);
  }
  // Requisição
  xhttp.onreadystatechange = function() {
    // Sucesso na requisição
    if (this.readyState == 4 && this.status == 200) {
      // Objeto recebe a resposta da requisição
      pokedexObj = JSON.parse(this.responseText);
      // Variavel para controlar quantos pokemons exibir
      let pokeCount = Object.keys(pokedexObj.results);
      // Criando um elemento para cada item do objeto pokedexObj
      for (let i = 0; i < pokeCount.length; i++) {
        // Pega o id de cada pokemon
        let pokeId = pokedexObj.results[i].url.split("/");
        // pokeId[6] = pokeId;
        // Cria li do pokemon
        let li = document.createElement("li");
        li.classList.add("later");
        // Insere no DOM
        ul.appendChild(li);
        // Cria div da img
        let divImg = document.createElement("div");
        divImg.classList.add("laterImg");
        // Cria img
        let imgSrc = document.createElement("img");
        imgSrc.setAttribute(
          "src",
          "https://pokeres.bastionbot.org/images/pokemon/" + pokeId[6] + ".png"
        );
        imgSrc.classList.add("pokedex-arrow-img");
        // Insere no DOM
        li.appendChild(divImg);
        divImg.appendChild(imgSrc);
        // Cria div Nome
        let divTitle = document.createElement("div");
        divTitle.classList.add("pokedex-title");
        // Cria o conteudo da div
        titleContent = document.createTextNode(
          pokedexObj.results[i].name.charAt(0).toUpperCase() +
            pokedexObj.results[i].name.slice(1)
        );
        // Insere no DOM
        divTitle.appendChild(titleContent);
        li.appendChild(divTitle);
        // Cria div Seta
        let divSeta = document.createElement("div");
        // Cria anchor
        let anchor = document.createElement("a");
        // Adiciona pokeId na URL
        anchor.href = "./details.html" + "?id=" + pokeId[6];
        // Cria img seta
        let anchorImg = document.createElement("img");
        anchorImg.setAttribute("src", "./assets/img/arrow.png");
        anchorImg.classList.add("pokedex-arrow-img");
        // Insere no DOM
        anchor.appendChild(anchorImg);
        divSeta.appendChild(anchor);
        li.appendChild(divSeta);
      }
    }
  };
  // Gerações diferentes
  let offsetPokemon = 0;
  let limitPokemon = 0;
  if (gen == 1) {
    // Valores para geração 1
    limitPokemon = 151;
    offsetPokemon = 0;
  } else if (gen == 2) {
    // Valores para geração 2
    limitPokemon = 100;
    offsetPokemon = 151;
  } else if (gen == 3) {
    // Valores para geração 3
    limitPokemon = 135;
    offsetPokemon = 251;
  } else {
    // Valores padrão
    limitPokemon = 100;
    offsetPokemon = 200;
  }
  // Ajax
  xhttp.open(
    "GET",
    "https://pokeapi.co/api/v2/pokemon?limit=" +
      limitPokemon +
      "&offset=" +
      offsetPokemon,
    true
  );
  xhttp.send();
}
// Menu colapsado
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = document.getElementById("content");
    if (content.style.display === "block") {
      content.style.display = "none";
      document.getElementById("symbol").innerHTML = "&#9660;";
    } else {
      content.style.display = "block";
      document.getElementById("symbol").innerHTML = "&#9932;";
    }
  });
}
// Função fake para Sign Out
function fakeSignOut() {
  window.location.replace("./index.html");
}
