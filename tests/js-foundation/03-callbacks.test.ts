import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('03-callbacks', () => {

    // done para esperar hasta que el callback termine
    test('should test getUserById an error if user is not found', (done) => {

        const id = 10;
        const errorTest = `User not found with the provided ID ${id}`;

        getUserById(id, (error, user) => {
            expect(error).toBe(errorTest);
            expect(user).toBeUndefined();
            done();
        });

    });

    // done para esperar hasta que el callback termine
    test('should test getUserById an error if user exists', (done) => {

        const idTest = 2;
        const nameTest = `Bob`;

        getUserById(idTest, (error, user) => {
            expect(error).toBeNull();
            expect(user?.name).toBe(nameTest);
            expect(user).toEqual({
                id: idTest,
                name: nameTest
            });
            done();
        });

    });


});
