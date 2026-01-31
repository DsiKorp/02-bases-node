import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('05-factory', () => {
    const getUUID = () => '1234';
    const getAge = () => 50;

    // done para esperar hasta que el callback termine
    test('should return a function', () => {


        const makePerson = buildMakePerson({
            getUUID,
            getAge
        });

        expect(typeof makePerson).toBe('function');
    });

    test('should return a person', () => {

        const name = 'John Doe';
        const birthdate = '1990-01-01';

        const makePerson = buildMakePerson({
            getUUID,
            getAge
        });

        const johnDoe = makePerson({ name, birthdate });
        console.log({ johnDoe })

        expect(typeof johnDoe).toBe('object');
        expect(johnDoe.id).toBe('1234');
        expect(johnDoe.name).toBe('John Doe');
        expect(johnDoe.birthdate).toBe('1990-01-01');
        expect(johnDoe.age).toBe(50);

        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1990-01-01',
            age: 50
        });

    });




});
