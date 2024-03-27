const request = require('supertest');
const app = require('./app');

describe('App server health', () => {
  describe('GET /api/v1.0/health/server', () => {
    test('should return a json confirmation message response and status 200', async () => {
      // Act
      const response = await request(app).get('/api/v1.0/health/server');
      // Assert
      expect(response.status).toBe(200);
      expect(response.body.message).toBe("All is good with the server but I can't speak for the database.");
    })
  })
});

describe('App database health', () => {
  describe('GET /api/v1.0/health/db', () => {
    test("should return a 'health' object and status 200", async () => {
      // Act
      const response = await request(app).get('/api/v1.0/health/db');
      // Assert
      expect(response.status).toBe(200);
      expect(response.body.status).toBe("all is well");
    })
  })
});

