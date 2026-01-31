"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const templateExports = require('./js-foundation/01-template');
//const { emailTemplate } = require('./js-foundation/01-template');
//import { emailTemplate } from require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrow');
//------------------------------------------------------------
// Importamos los plugins del archivo de barril
const plugins_1 = require("./plugins");
// Importamos el factory
const _05_factory_1 = require("./js-foundation/05-factory");
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
const makePerson = (0, _05_factory_1.buildMakePerson)({ getUUID: plugins_1.getUUID, getAge: plugins_1.getAge });
const obj = { name: 'John', birthdate: '1976-11-07' };
const john = makePerson(obj);
console.log(john);
//# sourceMappingURL=appFactory.js.map