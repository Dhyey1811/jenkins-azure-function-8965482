const helloWorld = require('.../functions/HelloWorld').app.http;

describe('HelloWorld Azure Function', () => {
    const context = { res: null };

    it('should return status 200', async () => {
        await helloWorld(context, {});
        expect(context.res.status).toBe(200);
    });

    it('should return "Hello, World!" in body', async () => {
        await helloWorld(context, {});
        expect(context.res.body).toBe("Hello, World!");
    });

    it('should return a non-null response', async () => {
        await helloWorld(context, {});
        expect(context.res).not.toBeNull();
    });
});
