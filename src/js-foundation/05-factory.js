// Un factory fuction is a function that returns an function
//const { getUUID, getAge } = require('../plugins');


// se envian las dependencias como parametros o argumentos getUUID, getAge
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson
};