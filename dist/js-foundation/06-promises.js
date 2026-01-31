"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const plugins_1 = require("../plugins");
// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     return fetch(url)
//         .then(response => response.json())
//         .then(pokemon => pokemon.name);
// };
const getPokemonById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await plugins_1.httpClient.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon with id: ${id} not found`;
    }
};
exports.getPokemonById = getPokemonById;
// se exporta directamente la función
//module.exports = getPokemonById;
//
//# sourceMappingURL=06-promises.js.map