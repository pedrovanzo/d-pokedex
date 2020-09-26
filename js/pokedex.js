// Objeto Pokedex
let pokedexObj = new Object();

// Requisição Ajax Pokedex
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  // Variavel para manipular o DOM
  var ul = document.getElementById("root");

  // Sucesso na requisição
  if (this.readyState == 4 && this.status == 200) {
    // Objeto recebe a resposta da requisição
    pokedexObj = JSON.parse(this.responseText);
    // console.log(pokedexObj);

    // variavel para controlar quantos pokemons exibir
    var pokeCount = Object.keys(pokedexObj.results);
    // console.log(pokeCount);

    // Criando um elemento para cada item do objeto pokedexObj
    for (var i = 0; i < pokeCount.length; i++) {

      // Pega o id de cada pokemon
      let pokeId = pokedexObj.results[i].url.split('/');
      // console.log(pokeId[6]);


      // Cria li
      // console.log(pokedexObj.results[i]);
      var li = document.createElement("li");
      li.classList.add("later");
      // li.innerText = pokedexObj.results[i].name;
      // Insere no DOM
      ul.appendChild(li);

      // Cria div img
      var divImg = document.createElement("div");
      divImg.classList.add("laterImg");
      // Cria img dentro da img
      var imgSrc = document.createElement("img");
      // Insere a url na img
      imgSrc.setAttribute(
        "src",
        "https://pokeres.bastionbot.org/images/pokemon/" + (pokeId[6]) + ".png"
      );
      imgSrc.classList.add("pokedex-arrow-img");
      // Insere no DOM
      li.appendChild(divImg);
      divImg.appendChild(imgSrc);

      // Cria div Nome
      var divTitle = document.createElement("div");
      divTitle.classList.add("pokedex-title");
      // Cria o conteudo da div
      titleContent = document.createTextNode(pokedexObj.results[i].name.charAt(0).toUpperCase() + pokedexObj.results[i].name.slice(1));
      // Insere no DOM
      divTitle.appendChild(titleContent);
      li.appendChild(divTitle);

      // Cria div Seta
      var divSeta = document.createElement("div");
      // Cria anchor
      var anchor = document.createElement("a");
      anchor.href = "./details.html";
      
      // console.log(pokeId[6]);
      
      anchor.href = "./details.html" + "?id=" + pokeId[6];

      // anchor.href = "https://pokeapi.co/api/v2/pokemon/" + pokeId[6];

      // anchor.href = pokedexObj.results[i].url;
      // Cria img seta
      var anchorImg = document.createElement("img");
      anchorImg.setAttribute(
        "src",
        "./assets/img/arrow.png"
      );
      anchorImg.classList.add("pokedex-arrow-img");
      // Insere no DOM
      anchor.appendChild(anchorImg);
      divSeta.appendChild(anchor);
      li.appendChild(divSeta);
    }
  }
};
xhttp.open(
  "GET",
  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
  // Make a different folder with 1gen pokemon VVV
  // "https://pokeapi.co/api/v2/pokemon?limit=151",
  true
);
xhttp.send();

// MAKE REQUEST FOR SPECIFIC POKEMON
