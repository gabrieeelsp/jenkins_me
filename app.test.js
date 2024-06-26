const request = require('supertest');
const app = require('./app'); // ajusta el camino al archivo de tu app

describe('GET /', () => {
    it('should respond with Hola cumpas!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hola cumpas!' });
    });
});
