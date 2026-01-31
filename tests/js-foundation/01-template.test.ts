import { emailTemplate } from '../../src/js-foundation/01-template';


describe('Test  emailTemplate', () => {
    test('should emailTemplate contain a greeting', () => {

        expect(emailTemplate).toContain('Hi, ');
    });

    test('should emailTemplate contain {{name}} and {{orderId}}', () => {

        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);

        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');
    });
});