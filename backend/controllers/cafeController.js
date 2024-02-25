const Cafe = require('../models/cafeModel')

exports.getCafesByFacilitiesAndLocation = async (req, res, next) => {
  const { facilities, requiredFacilities } = req.query;
  const requestedFacilities = requiredFacilities ? requiredFacilities : facilities;
  const requestedFacilitiesArray = requestedFacilities.split(',');

  try {
    const matchingCafes = await Cafe.find({ facilities: { $in: requestedFacilitiesArray } });
    res.status(200).json(matchingCafes);
  } catch (error) {
    next(error);
  }
};