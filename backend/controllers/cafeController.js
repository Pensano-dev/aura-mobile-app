const Cafe = require('../models/cafeModel');
const defaultDistance = 5000; // in meters, i.e., 5000 = 5km

exports.getCafesByFacilitiesAndLocation = async (req, res, next) => {
  const { facilities, requiredFacilities, userLocation } = req.query;

  if ((!requiredFacilities && !facilities) || !userLocation) {
    throw new Error('Both facilities and location are required.');
  }

  const facilitiesQuery = requiredFacilities
    ? { $all: requiredFacilities.split(',') }
    : { $in: facilities.split(',') };

  try {
    const [latitude, longitude] = userLocation.split(',').map(Number);

    const matchingCafes = await Cafe.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [latitude, longitude],
          },
          distanceField: 'distance',
          maxDistance: 5000, // in meters, i.e., 5000 = 5km
          spherical: true,
        },
      },
      {
        $match: {
          facilities: facilitiesQuery,
        },
      },
      {
        $limit: 20,
      },
    ]);

    res.status(200).json(matchingCafes);
  } catch (error) {
    console.error('Error:', error.message);
    next(error);
  }
};
