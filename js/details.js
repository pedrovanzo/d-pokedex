// Usando uma expressão regular para separar o id do pokemon
let pokemon = document.location.search.replace(/^.*?\=/, "");
// console.log(pokemon);

// Objeto Pokedex
let pokedexObj = new Object();

// Requisição Ajax Pokedex usando id do pokemon escolhido
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  // Variavel para manipular o DOM
  let ul = document.getElementById("root");

  // Sucesso na requisição
  if (this.readyState == 4 && this.status == 200) {
    // Objeto recebe a resposta da requisição
    pokedexObj = JSON.parse(this.responseText);
    // console.log(pokedexObj);
    // console.log(pokedexObj.name);

    // Nome do pokemon com inicial maiúscula
    document.getElementById("name").innerHTML =
      pokedexObj.name.charAt(0).toUpperCase() + pokedexObj.name.slice(1);

    // Altera o título da página para nome do pokemon
    document.title =
      pokedexObj.name.charAt(0).toUpperCase() + pokedexObj.name.slice(1);
    // Insere imagem do pokemon no elemento
    document
      .getElementById("pokeImg")
      .setAttribute(
        "src",
        "https://pokeres.bastionbot.org/images/pokemon/" + pokemon + ".png"
      );

    // Contando quantas habilidades o pokemon tem
    abilityCount = Object.keys(pokedexObj.abilities);
    // Montando a lista de habilidades de acordo com a quantidade
    if (abilityCount.length > 1) {
      if (abilityCount.length < 4) {
        for (let i = 0; i < abilityCount.length; i++) {
          let abDiv = document.createElement("div");
          abDiv.innerHTML = pokedexObj.abilities[i].ability.name;
          document.getElementById("ability").appendChild(abDiv);
        }
      } else {
        for (let i = 0; i < 4; i++) {
          let abDiv = document.createElement("div");
          // Insere 4 habilidades aleatorias
          abDiv.innerHTML =
            pokedexObj.abilities[
              Math.floor(Math.random() * (abilityCount.length - 1)) + 1
            ].ability.name;
          document.getElementById("ability").appendChild(abDiv);
        }
      }
    } else {
      // Caso tenha uma ou nenhuma
      let abDiv = document.createElement("div");
      // console.log('igual ou menor que 1');
      // console.log(pokedexObj.abilities[0].ability.name);

      abDiv.innerHTML = pokedexObj.abilities[0].ability.name;
      document.getElementById("ability").appendChild(abDiv);
    }

    // Contando quantos ataques o pokemon tem
    // console.log(pokedexObj.moves)
    let movesCount = Object.keys(pokedexObj.moves);
    // console.log(movesCount.length);
    // Montando a lista de ataques de acordo com a quantidade
    if (movesCount.length > 1) {
      // console.log("maior que 1");
      for (let i = 0; i < 4; i++) {
        // console.log(pokedexObj.moves[i].move);
        // console.log(pokedexObj.moves[i].move.name);
        let moveDiv = document.createElement("div");
        // moveDiv.innerHTML = pokedexObj.moves[i].move.name;
        // Insere 4 ataques aleatorios
        moveDiv.innerHTML =
          pokedexObj.moves[
            Math.floor(Math.random() * (movesCount.length - 1)) + 1
          ].move.name;
        document.getElementById("move").appendChild(moveDiv);
      }
    } else {
      // Caso tenha um ou nenhum
      let moveDiv = document.createElement("div");
      // console.log('igual ou menor que 1');
      moveDiv.innerHTML = pokedexObj.moves[0].move.name;
      document.getElementById("move").appendChild(moveDiv);
    }
  }
};
// Ajax
xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon, true);
xhttp.send();

// Convertendo id para int
let pokemonNumber = parseInt(pokemon);
// Função para pokemon anterior
function previousP() {
  // console.log(pokemonNumber);
  // console.log(pokemonNumber - 1);
  window.location.replace("./details.html?id=" + (pokemonNumber - 1));
}
// Função para proximo pokemon
function nextP() {
  // console.log(pokemonNumber);
  // console.log(pokemonNumber + 1);
  window.location.replace("./details.html?id=" + (pokemonNumber + 1));
}
