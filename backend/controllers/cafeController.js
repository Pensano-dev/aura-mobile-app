const Cafe = require('../models/cafeModel')

exports.getCafesByFacilities = async (req, res, next) => {
  const { facilities } = req.query;

  try {
    const matchingCafes = await Cafe.find({ facilities: { $in: facilities } });
    res.status(200).json(matchingCafes);
  } catch (error) {
    next(error);
  }
};