const Cafe = require('../models/cafeModel');
// NOTE: The 5km below is an arbitary decision until we decide as a group what we think is a reasonable default distance
const defaultDistance = 5000; // in meters, i.e., 5000 = 5km 

exports.getCafesByFacilitiesAndLocation = async (req, res, next) => {
  const { facilities, requiredFacilities, userLocation } = req.query;
  const maxDistance = Number(req.query.distance) || defaultDistance;

  if ((!requiredFacilities && !facilities) || !userLocation) {
    return next({status: 400, message: 'Both facilities and location are required.'});
  }

  const facilitiesQuery = requiredFacilities
    ? { $all: requiredFacilities.split(',') }
    : { $in: facilities.split(',') };

  const [latitude, longitude] = userLocation.split(',').map(Number);

  try {

    const matchingCafes = await Cafe.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [latitude, longitude],
          },
          distanceField: 'distance',
          maxDistance: maxDistance, // in meters, i.e., 5000 = 5km
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

// NOTE: Information regarding the query in this controller and about the use of location may be found in the README.md file in the root of the project.

