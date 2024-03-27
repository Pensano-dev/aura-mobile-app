const { getHealth, getHealthEntry } = require("./healthController");
const mongoose = require('mongoose');
require('dotenv').config();

const dbPassword = process.env.MONGODB_PW;
const mongoDbUrl = `mongodb+srv://pensano-aura-db-user:${dbPassword}@cluster0.sylisri.mongodb.net/aura_TEST`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
};

const closeDatabaseConnection = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error disconnecting from MongoDB Atlas:', error);
  }
};

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

  describe('getHealthEntry()', () => {
    beforeEach(() => {
      connectToDatabase();
    });
    
    afterEach(() => {
      closeDatabaseConnection();
    });

    test('should return the specified health object and status 200', async () => {
      // Arrange
      const mReq = {};
      const mRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mNext = jest.fn();

      // Act
      await getHealthEntry(mReq, mRes, mNext);

      // Assert
      expect(mRes.status).toBeCalledWith(200);
      expect(mRes.json.mock.calls[0][0].status).toBe(
        "all is well"
      );
    });
  });
  
});
