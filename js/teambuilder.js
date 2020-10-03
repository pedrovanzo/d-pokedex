function buildTeam(gen) {
  // Limpando a pokedex para mudar de geração
  let ul = document.getElementById("root");
  let listLength = ul.children.length;
  for (i = 0; i < listLength; i++) {
    ul.removeChild(ul.children[0]);
  }
  for (let i = 1; i < 7; i++) {
    let newPokeUl = document.createElement("ul");
    ul.appendChild(newPokeUl);
    newPokeUl.setAttribute("id", "pokemon" + i);
  }
  // Loop para todos os pokemon
  for (let i = 1; i < 7; i++) {
    // Sixth Pokemon
    let xhttp6 = new XMLHttpRequest();
    xhttp6.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        let pokePrototype = JSON.parse(this.responseText);
        // console.log(pokePrototype.name);
        let li = document.createElement("li");
        let liId = pokePrototype.name + i;
        li.setAttribute("id", liId);
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
            // console.log(moveDiv);
            document.getElementById(liId).appendChild(moveDiv);
          }
        } else {
          // Caso tenha um ou nenhum
          let moveDiv = document.createElement("div");
          moveDiv.innerHTML = "- " + pokePrototype.moves[0].move.name;
          document.getElementById(liId).appendChild(moveDiv);
        }
      }
    };
    let randomPokemon6;
    switch (gen) {
      case 1:
        console.log("1st gen");
        randomPokemon6 = Math.floor(Math.random() * (151 - 1) + 1);
        break;
      case 2:
        console.log("2nd gen");
        randomPokemon6 = Math.floor(Math.random() * (251 - 151) + 151);
        break;
      case 3:
        console.log("3rd gen");
        randomPokemon6 = Math.floor(Math.random() * (386 - 251) + 251);
        break;
      default:
        console.log("1st gen");
        randomPokemon6 = Math.floor(Math.random() * (151 - 1) + 1);
    }

    // Ajax
    // let randomPokemon6 = Math.floor(Math.random() * (151 - 1) + 1);
    console.log(randomPokemon6);
    xhttp6.open(
      "GET",
      "https://pokeapi.co/api/v2/pokemon/" + randomPokemon6,
      true
    );
    xhttp6.send();
  }
}

function copyTeamToClipboard() {
  let copyText = document.getElementById("root").innerText;
  navigator.clipboard.writeText(copyText);
  console.log(copyText);
}
