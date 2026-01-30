// const templateExports = require('./js-foundation/01-template');
//const { emailTemplate } = require('./js-foundation/01-template');
//import { emailTemplate } from require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrow');
//------------------------------------------------------------
// Importamos los plugins del archivo de barril
import { getUUID, getAge } from './plugins';
// Importamos el factory
import { buildMakePerson } from './js-foundation/05-factory';
//-----------------------------------------------------------

//console.log(emailTemplate)
//---------------------------------------
// getUserById uso con callback tradicional
// const id = 3;
// getUserById(id, (error, user) => {
//     if (error) throw new Error(error);

//     console.log(user);
// });
//---------------------------------------
const makePerson = buildMakePerson({ getUUID, getAge });
const obj = { name: 'John', birthdate: '1976-11-07' };
const john = makePerson(obj);
console.log(john);
