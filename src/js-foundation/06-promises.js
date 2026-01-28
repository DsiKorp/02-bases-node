const { http } = require("../plugins");

// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     return fetch(url)
//         .then(response => response.json())
//         .then(pokemon => pokemon.name);
// };

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);
    return pokemon.name;
};

// se exporta directamente la función
module.exports = getPokemonById;
//