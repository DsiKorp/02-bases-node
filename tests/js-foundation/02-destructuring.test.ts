import { characters } from '../../src/js-foundation/02-destructuring';


describe('Test  02-destructuring', () => {
    test('should emailTemplate contain a greeting', () => {

        console.log(characters);

        expect(characters).toContain('Goku');
        expect(characters).toContain('Vegeta');
        expect(characters).toContain('araña');
        expect(characters).toContain('Trunks');

        expect(characters).toHaveLength(4);

    });

    test('should emailTemplate contain a Goku and Vegeta', () => {

        const [goku, vegeta] = characters;

        expect(goku).toBe('Goku');
        expect(vegeta).toBe('Vegeta');

    });


});