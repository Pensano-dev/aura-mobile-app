const { getHealth, getHealthEntry } = require("./healthController");
const Health = require("../models/healthModel");

describe("healthController", () => {
  describe("getHealth()", () => {
    test("should return a json confirmation message and status 200", async () => {
      // Arrange
      const mReq = {};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
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

  // ⛔️ The test below is deliberately kept as I want to understand why it is failing. It will be ammended or deleted once this is done. Please do not delete it. Thanks - PJ ⛔️

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

jest.mock("../models/healthModel", () => ({
  findOne: jest.fn()
}));

describe("getHealthEntry", () => {
  test('should return the specified health object and status 200', async () => {
    const mockHealthEntry = {
      status: "all is well"
    };

    Health.findOne.mockResolvedValue(mockHealthEntry);

    const mReq = {};
    const mRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const mNext = jest.fn();

    await getHealthEntry(mReq, mRes, mNext);

    expect(Health.findOne).toHaveBeenCalledWith({ status: "all is well" });
    expect(mRes.status).toHaveBeenCalledWith(200);
    expect(mRes.json).toHaveBeenCalledWith(mockHealthEntry);
    expect(mNext).not.toHaveBeenCalled();
  });

  it("should call next middleware with error if findOne fails", async () => {
    const error = new Error("Database error");

    Health.findOne.mockRejectedValue(error);

    const mReq = {};
    const mRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const mNext = jest.fn();

    await getHealthEntry(mReq, mRes, mNext);

    expect(Health.findOne).toHaveBeenCalledWith({ status: "all is well" });
    expect(mNext).toHaveBeenCalledWith(error);
    expect(mRes.status).not.toHaveBeenCalled();
    expect(mRes.json).not.toHaveBeenCalled();
  });
});
