const { getHealth, getHealthEntry } = require('./healthController');

describe('healthController', () => {
  describe('getHealth()', () => {
    test('should return a json confirmation message and status 200', async () => {
      // Arrange
      const mReq = {};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mNext = jest.fn();

      // Act
      await getHealth(mReq, mRes, mNext);

      // Assert
      expect(mRes.status).toBeCalledWith(200);
      expect(mRes.json.mock.calls[0][0].message).toBe(
        "All is good with the server but I can't speak for the database."
      );
    });
  });
  
  // describe('getHealthEntry()', () => {
  //   test('should return the specified health object and status 200', async () => {
  //     // Arrange
  //     const mReq = {};
  //     const mRes = {
  //       status: jest.fn().mockReturnThis(),
  //       json: jest.fn(),
  //     };
  //     const mNext = jest.fn();

  //     // Act
  //     await getHealthEntry(mReq, mRes, mNext);

  //     // Assert
  //     expect(mRes.status).toBeCalledWith(200);
  //     expect(mRes.json.mock.calls[0][0].status).toBe(
  //       "all is well"
  //     );
  //   });
  // });
});
