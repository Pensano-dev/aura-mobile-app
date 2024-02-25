const Cafe = require('../models/cafeModel')

exports.getCafesByFacilities = async (req, res, next) => {
  const { facilities } = req.query;

  try {
    const selectedCafes = await Cafe.find({});
    console.log('selectedCafes', selectedCafes);
    res.status(200).json(selectedCafes);
  } catch (error) {
    next(error);
  }
};