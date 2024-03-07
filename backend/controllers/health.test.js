const { getHealth, getHealthEntry } = require('./healthController');
const Health = require('../models/healthModel');

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
  
//   // describe('getHealthEntry()', () => {
//   //   test('should return the specified health object and status 200', async () => {
//   //     // Arrange
//   //     const mReq = {};
//   //     const mRes = {
//   //       status: jest.fn().mockReturnThis(),
//   //       json: jest.fn(),
//   //     };
//   //     const mNext = jest.fn();

//   //     // Act
//   //     await getHealthEntry(mReq, mRes, mNext);

//   //     // Assert
//   //     expect(mRes.status).toBeCalledWith(200);
//   //     expect(mRes.json.mock.calls[0][0].status).toBe(
//   //       "all is well"
//   //     );
//   //   });
//   // });
});

jest.mock('../models/healthModel', () => ({
  findOne: jest.fn(),
}));

describe('getHealthEntry', () => {
  it('should return health entry when status is "all is well"', async () => {
    const mockHealthEntry = {
      status: "all is well",
    };

    Health.findOne.mockResolvedValue(mockHealthEntry);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await getHealthEntry(req, res, next);

    expect(Health.findOne).toHaveBeenCalledWith({ status: "all is well" });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockHealthEntry);
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next middleware with error if findOne fails', async () => {
    const error = new Error('Database error');

    Health.findOne.mockRejectedValue(error);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }; 
    const next = jest.fn();

    await getHealthEntry(req, res, next);

    expect(Health.findOne).toHaveBeenCalledWith({ status: "all is well" });
    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
