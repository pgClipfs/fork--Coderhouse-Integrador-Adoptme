import { expect } from 'chai';
import supertest from 'supertest';

let requester;

describe('register', () => {
    beforeEach(() => {
        requester = supertest('http://localhost:8080')
    })
    it('debe retornar 400 si los valores estan incompletos en el body', async () => {
        const mockRegisterUser = {
            first_name: "Fabio",
            last_name: "Bianchi",
            email: "fabiobianchicaseros@gmail.com",
        }
        const response = await requester.post('/api/sessions/register').send(mockRegisterUser)
        expect(response.statusCode).to.equal(400); // CHAI
    })
})