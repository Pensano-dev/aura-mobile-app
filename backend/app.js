const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const healthRoutes = require('./routes/healthRoutes');
const cafeRoutes = require('./routes/cafeRoutes');

const dbPassword = process.env.MONGODB_PW;
const dbName = process.env.MONGODB_DBNAME || 'aura_TEST';
const mode = process.env.NODE_ENV || 'DEV';

const mongoDbUrl = `mongodb+srv://pensano-aura-db-user:${dbPassword}@cluster0.sylisri.mongodb.net/${dbName}`;

if (mode === 'TEST') console.log("🧪 Running in test mode - Successful database connection will not be logged.")

const app = express();

app.use(cors());

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    if (mode === "DEV") console.log(`🥳 Successfully connected to MongoDB Atlas ${dbName} database! 🌎`);
  })
  .catch((error) => {
    console.log(`😖 Unable to connect to MongoDB Atlas ${dbName} database! ❌`);
    console.error(error);
  });

app.use(express.json());

app.use('/api/v1.0/health', healthRoutes);
app.use('/api/v1.0/cafes', cafeRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
});

module.exports = app;
