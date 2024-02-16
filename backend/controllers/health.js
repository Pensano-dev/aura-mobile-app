const Health = require('../models/health');

exports.getHealth = (req, res, next) => {
  try {
    res.status(200).json({message: "All is good with the server but I can't speak for the database."});
  } catch (error) {
    next(error);
  }
};

exports.getHealthEntry = (req, res, next) => {
  Health.findOne({ status: "all is well" }) 
    .then(healthEntry => res.status(200).json(healthEntry))
    .catch(error => res.status(404).json({ error: error }));
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
