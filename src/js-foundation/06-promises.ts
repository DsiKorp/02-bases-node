import { httpClient } from "../plugins";

// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     return fetch(url)
//         .then(response => response.json())
//         .then(pokemon => pokemon.name);
// };

export const getPokemonById = async (id: number | string): Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        const pokemon = await httpClient.get(url);
        return pokemon.name;
    } catch (error) {
        throw `Pokemon with id: ${id} not found`;
    }
};

// se exporta directamente la función
//module.exports = getPokemonById;
//