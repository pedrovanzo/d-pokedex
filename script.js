// Objeto Pokedex
let pokedexObj = new Object();

// Requisição Ajax
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  // Variavel para manipular o DOM
  var x = document.getElementById("root");

  // Sucesso na requisição
  if (this.readyState == 4 && this.status == 200) {
    // Objeto recebe a resposta da requisição
    pokedexObj = JSON.parse(this.responseText);

    // Criando um elemento para cada item do objeto pokedexObj
    for (var i = 0; i < 2; i++) {
      console.log(pokedexObj.results[i]);
      var y = document.createElement("li");
      y.innerText = pokedexObj.results[i].name;
      x.appendChild(y);
    }

    // for each element, create an li with pokedexObj.results[i];
    // document.getElementById("root").innerHTML = JSON.stringify(pokedexObj.results);
  }
};
xhttp.open(
  "GET",
  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
  true
);
xhttp.send();
