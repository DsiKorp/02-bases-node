const { buildLogger } = require('./plugins');
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
    .then(name => console.log({ name })) // Bulbasaur
    .catch(error => console.error('Error fetching Pokémon:', error))
    .finally(() => console.log('Fetch attempt finished.'));

const logger = buildLogger('app');

logger.log('Application has started.');
logger.error('This is an error.');

