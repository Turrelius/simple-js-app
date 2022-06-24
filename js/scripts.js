alert ('Hello pokemon fans!!');

//A variable called "pokemonList" that is an array of objects
let pokemonList = [
      {
        name: "Sandshrew",
        height: 6,
        types: ["ground"],
        category: "mouse",
      },
      {
        name: "Kabutops",
        height: 13,
        types: ["water", "rock"],
        category: "Shell Pokémon",
      },
      {
        name: "Scyther",
        height: 15,
        types: ["bug", "flying"],
        category: "Praying Mantis Pokémon",
      },
      {
        name: "Zoroark",
        height: 2,
        types: ["dark"],
        category: "Illusory Fox Pokémon",
      },
    ];
// Loop through each pokemon (AKA, for every pokemon in the array, run some code)
for (let i = 0; i < pokemonList.length; i++) {
  // First print the pokemon name and height
  document.write(
    pokemonList[i].name + " (Height: " + pokemonList[i].height + ")"
  );
// Then run an if statement that checks if the pokemons height is over 14
  if (pokemonList[i].height > 14) {
    // If it is over 14 then print " - Wow, that's big !" with two line breaks to separate the pokemon
    document.write(" - Wow, that's big !" + "</br>" + "</br>");
  } else {
    // If the pokemon height is not over 14 then print two line breaks to separate the pokemon
    document.write("</br>" + "</br>");
  }
}
