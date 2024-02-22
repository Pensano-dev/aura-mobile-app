const mongoose = require('mongoose');
const Cafe = require('../models/cafeModel');
const cafeSeedData = require('../seed-data/cafeSeedData');
require('dotenv').config();

const dbPassword = process.env.MONGODB_PW;
const dbName = process.env.MONGODB_DBNAME || 'aura_TEST';
const mongoDbUrl = `mongodb+srv://pensano-aura-db-user:${dbPassword}@cluster0.sylisri.mongodb.net/${dbName}`;

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log(`🥳 Successfully connected to MongoDB Atlas ${dbName} database! 🌎`);
  })
  .catch((error) => {
    console.log(`😖 Unable to connect to MongoDB Atlas ${dbName} database! ❌`);
    console.error(error);
  });

const clearCafes = async () => {
  await Cafe.deleteMany({});
};

const insertCafes = async () => {
  await Cafe.insertMany(CafeSeedData);
};

const seedCafes = async () => {
  try {
    await clearCafes();
    await insertCafes();
    console.log('Cafe seeding completed successfully.');
  } catch (error) {
    console.error('Cafe seeding failed:', error);
  } finally {
    process.exit(0);
  }
};

seedCafes();
