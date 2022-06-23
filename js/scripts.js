alert ('Hello pokemon fans!!');

//variable called "pokemonList" that is an array of objects
let pokemonList = [
];
//simple loop that iterates over each item in pokemonList.
//I used document.write() inside the loop’s code to write the Pokémon name on my website’s DOM
for (let i = 0; i < pokemonList.length; i++){
   // First print the pokemon name and height
   document.write(
     pokemonList[i].name + " (Height: " + pokemonList[i].height + ")"
   );
 // run statement that checks if the pokemons height is over 14
   if (pokemonList[i].height > 14) {
     // If it is over 14 then print " - Wow, that's big !" with two line breaks to separate the pokemon
     document.write(" - Wow, that's big !" + "</br>" + "</br>");
   } else
   if (pokemonList[i].height < 14) {
     // If it is less than 14 then print " - Oboy,thats small !" with two line breaks to separate the pokemon
     document.write(" - Oboy, that's small !" + "</br>" + "</br>");
   } else {
     // If the pokemon height is not over 14 then print two line breaks to separate the pokemon
     document.write("</br>" + "</br>");
   }
 }
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
