import { httpClient } from "../../src/plugins";


describe('http-client.plugin test', () => {

    // done para esperar hasta que el callback termine
    test('should http client get return a string', async () => {

        const response = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(response).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        });

    });

    // done para esperar hasta que el callback termine
    test('should http client have post put delete methods', async () => {

        console.log(typeof httpClient.post)
        expect(typeof httpClient.post).toBe('function');
        expect(typeof httpClient.put).toBe('function');
        expect(typeof httpClient.delete).toBe('function');
        expect(typeof httpClient.get).toBe('function');

    });
});
