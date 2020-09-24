// Função para criar os elementos no DOM
function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);

  return element;
}

function loadPokedex() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //   document.getElementById("demo").innerHTML = this.responseText;
      console.log(this.responseText);
    }
  };
  xhttp.open(
    "GET",
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
    true
  );
  xhttp.send();
}

let pokedexObj = new Object();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //   console.log(this.responseText)
      pokedexObj = JSON.parse(this.responseText);
      console.log(pokedexObj.results)
    // pokedexObj = this.responseText;
    //   console.log(pokedexObj);
    // console.log(pokedexObj);
    // console.log(pokedexObj);
    // for(var i = 0; i < 10; i++){
    // console.log(pokedexObj);
    // }

    // for each element, create an li with pokedexObj.results[i];
    document.getElementById("root").innerHTML = JSON.stringify(pokedexObj.results);
    // document.getElementById("root").innerHTML = JSON.stringify(pokedexObj.results[6]);
    // console.log(this.responseText);
    // console.log(pokedexObj);
  }
};
xhttp.open(
  "GET",
  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
  true
);
xhttp.send();
