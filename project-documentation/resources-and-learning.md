# Resources and Learning

This document includes links to useful resources and documentation for the project including the Athena Hackathon Team's original documentation, plus notable points of interest and learning from the project written by the team.

## Contents

- [Resources and Learning](#resources-and-learning)
  - [Contents](#contents)
  - [Links to documentation from the Athena Hackathon Team](#links-to-documentation-from-the-athena-hackathon-team)
  - [Useful links for React Native development](#useful-links-for-react-native-development)
  - [Shared Learning](#shared-learning)
    - [Using Location](#using-location)
      - [Location data returned from device](#location-data-returned-from-device)
      - [Location in the CafeModel (backend \> models \> CafeModel.js)](#location-in-the-cafemodel-backend--models--cafemodeljs)
      - [Using the location in the cafeController (backend \> controllers \> cafeController.js)](#using-the-location-in-the-cafecontroller-backend--controllers--cafecontrollerjs)
    - [getCafesByFacilitiesAndLocation controller function query (backend \> controllers \> cafeController.js)](#getcafesbyfacilitiesandlocation-controller-function-query-backend--controllers--cafecontrollerjs)

## Links to documentation from the Athena Hackathon Team
This app was a prize winner at the Athena Hackathon 2023 for the team comprising of Elsa Nafar, Juliana Nocchi, Tian Pan, Natasha Buckham and Sidra Iqbal. Here are some links to documentation the team produced during the hackathon:

[Original Aura repo](https://github.com/natashabuckham/athena-hackathon-2023-aura-app)

[Canva presentation](https://www.canva.com/design/DAFnaNSUH6c/3HwneJ2_axm4dUbXObnFIQ/view?utm_content=DAFnaNSUH6c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1)

[Figma designs](https://www.figma.com/file/YgPoK1QzFK9QRcrTwP2g2u/ambiance-t?type=design&node-id=0-1&mode=design&t=szCVSY9dUuXVDvqJ-0)

## Useful links for React Native development

[React Native documentation](https://reactnative.dev/docs/getting-started)

[React Native Docs - Navigating between screens](https://reactnative.dev/docs/navigation) - This is what I (Pablo) used as reference when setting up the screens stack in App.js.

[React Navigation - Getting Started](https://reactnavigation.org/docs/getting-started/) - This is what I didn't but probably should have used as reference when setting up the screens stack in App.js.

## Shared Learning

### Using Location

#### Location data returned from device

The location data returned from the device is an object with the following properties:
```javascript
{
  "coords": {
    "accuracy": 5,
    "altitude": 0,
    "altitudeAccuracy": -1,
    "heading": -1,
    "latitude": 37.785834,
    "longitude": -122.406417,
    "speed": -1
  },
  "timestamp": 1710687774112.086
}
```

Where location is not given (current MVP for denied location permissions), the location is set to:
```javascript
{
  "coords": {
    "accuracy": 0,
    "altitude": null,
    "altitudeAccuracy": -1,
    "heading": null,
    "latitude": 51.5076,
    "longitude": -0.0994,
    "speed": 0
  },
  "timestamp": 0
}
```

#### Location in the CafeModel (backend > models > CafeModel.js)

The `location` property in the `CafeModel` is an object with the following properties:

* `type` - The type of the location. This is a string and can be either `Point` or `Polygon`. We are using `Point` for the location of the cafes.
* `coordinates` - An array of two numbers representing latitude and longitude, that MongoDB uses for geospatial data.

An index has been set up on the `location` property in the `CafeModel` to allow for efficient geospatial queries. Indexing allows for improved query performance, especially when working with large datasets, joins and aggregations, but at the cost of additional storage and decreased write performance. It is essential for efficient geospatial queries.

#### Using the location in the cafeController (backend > controllers > cafeController.js)

The `getCafesByFacilitiesAndLocation` (current name and liable to change) function in the `cafeController` uses an aggregation pipeline to query the cafes by location and facilities, including an aggregated location query.

```javascript
$geoNear: {
  near: {
    type: 'Point',
    coordinates: [latitude, longitude],
  },
  distanceField: 'distance',
  maxDistance: maxDistance, // in meters, i.e., 5000 = 5km
  spherical: true,
}
```

The `$geoNear` stage is a geospatial query that returns documents based on their proximity to a given point. It requires a geospatial index to be set up on the location field, which we have done in the `CafeModel`. The `coordinates` property in the `near` object is an array of two numbers representing latitude and longitude provided as params in the request. 

The `distanceField` property is the name of the field that will be added to the output documents. This field contains the calculated distance between the input coordinates and the location of the document. 

The `maxDistance` property is the maximum distance from the center point that the documents can be returned. This value has a default but may also be passed as a param in the request.

The `spherical` property is a boolean that specifies the type of calculation to perform. When `true`, MongoDB uses spherical geometry to calculate distances in 2dsphere index. When `false`, MongoDB uses planar geometry to calculate distances on a flat surface. 

### getCafesByFacilitiesAndLocation controller function query (backend > controllers > cafeController.js)

Please update this section as the controller function is developed, including any name changes reflecting the function's purpose.

The query has two main parts: the loaction query and the facilities query:
* The location query is an aggregation pipeline with a `$geoNear` stage that returns documents based on their proximity to a given point. It is described in more detail [here](#using-location-in-the-cafemodel-backend--models--cafemodeljs).
* The facilities query is a standard MongoDB query that returns documents based on the facilities provided in the request. The query object is constructed prior to the query for readability as it is based on a ternary depending on the params passed in the request.
```javascript
const facilitiesQuery = requiredFacilities
    ? { $all: requiredFacilities.split(',') }
    : { $in: facilities.split(',') };
```
If any `requiredFacilities` are passed in the request, the query will return documents that contain ALL of those facilities. If no `requiredFacilities` are passed, the query will return documents that contain ANY of the facilities passed in the `facilities` param.

Overall, the query returns documents that are within the specified distance of the input coordinates AND contain the specified facilities to a limit of 20 objects.

