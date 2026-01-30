// Un factory fuction is a function that returns an function
//const { getUUID, getAge } = require('../plugins');
interface MakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number | Error;
}

interface PersonInput {
    name: string;
    birthdate: string;
}

interface Person {
    id: string;
    name: string;
    birthdate: string;
    age: number;
}

// se envian las dependencias como parametros o argumentos getUUID, getAge
const buildMakePerson = ({ getUUID, getAge }: MakePersonOptions) => {
    return ({ name, birthdate }: PersonInput) => {
        const age = getAge(birthdate);
        if (age instanceof Error) {
            throw age;
        }
        return {
            id: getUUID(),
            name,
            birthdate,
            age
        }
    }
}

export { buildMakePerson };