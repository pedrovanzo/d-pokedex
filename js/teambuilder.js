function randomPokemon() {
  // THIS IS ALL THAT IS NECESSARY
  for (let i = 1; i < 7; i++) {
    // Sixth Pokemon
    let xhttp6 = new XMLHttpRequest();
    xhttp6.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        let pokePrototype = JSON.parse(this.responseText);
        console.log(pokePrototype.name);
        let li = document.createElement("li");
        li.setAttribute("id", pokePrototype.name);
        li.innerText =
          pokePrototype.name.charAt(0).toUpperCase() +
          pokePrototype.name.slice(1);

        document.getElementById("pokemon" + i).appendChild(li);

        // MOVES
        let movesCount = pokePrototype.moves.length;
        // console.log(movesCount);
        // Mais de um ataque
        if (pokePrototype.moves.length > 1) {
          for (let i = 0; i < 4; i++) {
            let moveDiv = document.createElement("div");
            moveDiv.innerHTML =
              "- " +
              pokePrototype.moves[
                Math.floor(Math.random() * (movesCount - 1)) + 1
              ].move.name;
            console.log(moveDiv);
            document.getElementById(pokePrototype.name).appendChild(moveDiv);
          }
        } else {
          // Caso tenha um ou nenhum
          let moveDiv = document.createElement("div");
          moveDiv.innerHTML = "- " + pokePrototype.moves[0].move.name;
          document.getElementById(pokePrototype.name).appendChild(moveDiv);
        }
      }
    };

    // Ajax
    let randomPokemon6 = Math.floor(Math.random() * (151 - 1) + 1);
    // console.log(randomPokemon6);
    xhttp6.open(
      "GET",
      "https://pokeapi.co/api/v2/pokemon/" + randomPokemon6,
      true
    );
    xhttp6.send();
  }
}

function buildTeam() {
  randomPokemon();
}
function reloadPrototype() {
  window.location.reload();
}
