const Health = require('../models/healthModel');

exports.getHealth = (req, res, next) => {
  try {
    res.status(200).json({message: "All is good with the server but I can't speak for the database."});
  } catch (error) {
    next(error);
  }
};

exports.getHealthEntry = (req, res, next) => {
  // console.log('in getHealthEntry')
  Health.findOne({ status: "all is well" }) 
    .then(healthEntry => {
      // console.log('found health entry')
      console.log("Health Entry:", healthEntry);
      res.status(200).json(healthEntry);
    })
    .catch(error => {
      // console.log('error with health entry')
      console.log("Error:", error);
      res.status(500).json({ error: error });
    });
  // console.log('At the end of getHealthEntry')
};

exports.addHealthEntry = (req, res, next) => {
  const { status } = req.body;
  const healthEntry = new Health({
    status
  });
  healthEntry
    .save()
    .then(() =>
      res.status(201).json({ message: 'Health entry added successfully!' })
    );
};
