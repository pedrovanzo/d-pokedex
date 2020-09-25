// requisição individual, de acordo com o id do pokemon
let pokemon = document.location.search.replace(/^.*?\=/, "");
// console.log(pokemon);

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
    
    
    
    // habilidades
    console.log(pokedexObj.abilities)
    abilityCount = Object.keys(pokedexObj.abilities);
    console.log(abilityCount.length);
    if(abilityCount.length>1){
        if(abilityCount.length<4){
            for(let i = 0; i < abilityCount.length; i++){
                let abDiv = document.createElement("div");
                abDiv.innerHTML = pokedexObj.abilities[i].ability.name;
                document.getElementById("ability").appendChild(abDiv);
            }
        }else{
            for(let i = 0; i < 4; i++){
                // console.log(pokedexObj.moves[i].move);
                // console.log(pokedexObj.moves[i].move.name);
                let abDiv = document.createElement("div");
                // moveDiv.innerHTML = pokedexObj.moves[i].move.name;
                // insere 4 ataques aleatorios da lista de ataques
                abDiv.innerHTML = pokedexObj.abilities[Math.floor(Math.random() * (abilityCount.length - 1)) + 1].ability.name;
                document.getElementById("ability").appendChild(abDiv);
            }
        }
    }else{
        let abDiv = document.createElement("div");
        // console.log('igual ou menor que 1');
        console.log(pokedexObj.abilities[0].ability.name);
        
        abDiv.innerHTML = pokedexObj.abilities[0].ability.name;
        document.getElementById("ability").appendChild(abDiv);
    }
    
    
    //moves => for loop to go through moves list, adding 4 moves (maybe random)
    // console.log(pokedexObj.moves)
    var movesCount = Object.keys(pokedexObj.moves);
    console.log(movesCount.length);
    // corrige se o pokemon tiver só um ataque
    if(movesCount.length>1){
        console.log('maior que 1');
        for(let i = 0; i < 4; i++){
            // console.log(pokedexObj.moves[i].move);
            // console.log(pokedexObj.moves[i].move.name);
            let moveDiv = document.createElement("div");
            // moveDiv.innerHTML = pokedexObj.moves[i].move.name;
            // insere 4 ataques aleatorios da lista de ataques
            moveDiv.innerHTML = pokedexObj.moves[Math.floor(Math.random() * (movesCount.length - 1)) + 1].move.name;
            document.getElementById("move").appendChild(moveDiv);
        }
    }else{
        let moveDiv = document.createElement("div");
        // console.log('igual ou menor que 1');
        moveDiv.innerHTML = pokedexObj.moves[0].move.name;
        document.getElementById("move").appendChild(moveDiv);
    }
    

  }
};
xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon, true);
xhttp.send();