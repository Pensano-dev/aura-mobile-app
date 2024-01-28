const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const healthRoutes = require('./routes/health');

const dbPassword = process.env.MONGODB_PW;
const dbName = process.env.MONGODB_DB || 'aura_DEV';

const mongoDbUrl = `mongodb+srv:...${dbPassword}@... .mongodb.net/${dbName}`;

const app = express();

app.use(cors());

// mongoose
//   .connect(mongoDbUrl)
//   .then(() => {
//     console.log(
//       `🥳 Successfully connected to MongoDB Atlas ${dbName} database! 🌎`
//     );
//   })
//   .catch((error) => {
//     console.log(`😖 Unable to connect to MongoDB Atlas ${dbName} database! ❌`);
//     console.error(error);
//   });

app.use(express.json());

app.use('/api/v1.0/health', healthRoutes);

module.exports = app;
