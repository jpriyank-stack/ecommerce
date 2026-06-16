import request from 'supertest';
import app from '../server.js';

describe('Health Check Endpoint', () => {
    test('GET /health should return 200', async () => {
        const response = await request(app)
            .get('/health')
            .expect(200);
        
        expect(response.body.success).toBe(true);
    });

    test('Should return message in response', async () => {
        const response = await request(app)
            .get('/health');
        
        expect(response.body.message).toBeDefined();
    });
});