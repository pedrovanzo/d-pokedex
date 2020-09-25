// requisição individual, de acordo com o id do pokemon
let pokemon = document.location.search.replace(/^.*?\=/, "");
console.log(pokemon);

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
    // console.log(pokedexObj.name);

    let pokeLi = document.createElement("li");
    pokeLi.innerText = pokedexObj.name;
    // document.getElementById("root").appendChild(pokeLi);

    //name
    document.getElementById("name").innerHTML = pokedexObj.name;
    //img
    document.getElementById("img").setAttribute("src", "https://pokeres.bastionbot.org/images/pokemon/" + pokemon + ".png");
    //moves => for loop to go through moves list, adding 4 moves (maybe random)
    console.log(pokedexObj.moves)
    var movesCount = Object.keys(pokedexObj.moves);
    console.log(movesCount);
    for(let i = 0; i < 4; i++){
        // console.log(pokedexObj.moves[i].move);
        console.log(pokedexObj.moves[i].move.name);
        let moveDiv = document.createElement("div");
        // moveDiv.innerHTML = pokedexObj.moves[i].move.name;
        // insere 4 ataques aleatorios da lista de ataques
        moveDiv.innerHTML = pokedexObj.moves[Math.floor(Math.random() * (movesCount.length - 1)) + 1].move.name;
        document.getElementById("moves").appendChild(moveDiv);
    }

  }
};
xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon, true);
xhttp.send();
