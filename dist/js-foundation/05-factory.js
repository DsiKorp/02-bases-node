"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
// se envian las dependencias como parametros o argumentos getUUID, getAge
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        const age = getAge(birthdate);
        if (age instanceof Error) {
            throw age;
        }
        return {
            id: getUUID(),
            name,
            birthdate,
            age
        };
    };
};
exports.buildMakePerson = buildMakePerson;
//# sourceMappingURL=05-factory.js.map