const request = require('supertest');
const app = require('../index');

describe('GET /api/notes', () => {
  it('should return an array of notes', async () => {
    const res = await request(app).get('/api/notes');
    console.log('Returned notes:', res.body);  // 👀 LOG THIS
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
