# Aura

Blah blah blah... placeholder for introductory text.

## Notes on development in React Native

* It is important to look at the result in both iOS and Android simulators, as the layout can be strikingly different on different devices, particularly in regard to styling. Note that some styling properies are supported in iOS but not in Android, and vice versa.
* Simulator refresh can be sketchy and inconsisent as can the expo commands which sometimes work on iOS or Android but not both.
* With focus on the iOS simulator, pressing `CTRL + CMD + Z` will open the iOS simulator menu, and pressing `Reload` should refresh the app. 
* With focus on the Android simulator, pressing `R` twice quickly will refresh the app.

## Setup

Clone the app and run `npm install` in both the `frontend` and `backend` directories. 
* Depending on your local setup , you may need to run `npm i -D nodemon` in the backend. It is in devDependencies in the package.json file, but people seem to have had issues with this in the past. It is recommended by Nodemon to install it globally with `npm install -g nodemon`.
* See the [Setting up your React Native (frontend) development environment](#setting-up-your-react-native-frontend-development-environment) section below for more information on setting up your React Native development environment.
* You will need to create a `.env` file in the `backend` directory with the following variables:
  `MONGODB_PW=<our MongoDB Atlas password>` (the actual password is shared privately with the group)

## Starting the app (frontend and backend) from the root directory


`npm run server` will start the backend server on localhost:8080. This will connect to the database on MongoDB Atlas (once it is set up).

`npm start` will start the frontend in development mode. This will open a browser window with a QR code. You can scan this with your phone to open the app in the Expo Go app, or you can follow the terminal instructions to open the app in a simulator.
`npm run ios` will open the a QR code for iOS devices and open the app in an iOS simulator.
`npm run android` will open the a QR code for Android devices and open the app in an Android simulator.

## Starting the frontend from the frontend directory

`npm start` will start the frontend in development mode. This will open a browser window with a QR code. You can scan this with your phone to open the app in the Expo Go app, or you can follow the terminal instructions to open the app in a simulator.
`npm run ios` will open the a QR code for iOS devices and open the app in an iOS simulator.
`npm run android` will open the a QR code for Android devices and open the app in an Android simulator.

## Starting the backend from the backend directory

`npm start` will start the backend server on localhost:8080. This will connect to the database on MongoDB Atlas (once it is set up).

## Setting up your React Native (frontend) development environment

This React Native app was created using the [Expo CLI](https://reactnative.dev/docs/environment-setup). I have seen documentation suggesting you need to install it globally using `npm install -g expo-cli`, but have also seen suggestions this is deprecated so suggest you only run that if a need arises. As React Native is already set up, cloning the repo, `cd`ing into the `frontend` and running `npm install` should be all you need to do to set up `expo-cli`.

To view the app in iOS using a simulator or on an iphone you will need to install Xcode (and the Expo Go app for iPhone). Please see the [Xcode](https://github.com/Pensano-dev/aura-mobile-app/blob/main/project%20documentation/xcode.md) page for more information.

To view the app in Android using a simulator or on an Android phone you will need to install Android Studio (and the Expo Go app for Android). Please see the [Android Studio](https://github.com/Pensano-dev/aura-mobile-app/blob/main/project%20documentation/android_studio.md) page for more information.

## Backend server and health check

For debugging purposes, there is a `health` endpoint on the backend server.

`http://localhost:8080/api/v1.0/health/server` should return a JSON object with the message `All is good with the server but I can't speak for the database.` which confirms that the server is running.

`http://localhost:8080/api/v1.0/health/db` should return a JSON object with the status `all is well` which confirms that the server is running and that the database connection is good.

A POST request to `http://localhost:8080/api/v1.0/health/db` with a `status` property in the body will add that entry to the database and return `{"message":"Health entry added successfully!"}`.

**NOTE:** There is a **Postman** Aura Workspace with a collection of requests for the backend server. 

## Database

The MongoDB database is hosted on MongoDB Atlas. The connection string is stored in the `.env` file in the `backend` directory. The connection string can be found in the backend `app.js` file.

There are three databases: `aura`, `aura-DEV` and `aura-TEST`. The development environment uses `aura-DEV` and please use `aura-TEST` for testing. The `aura` database is for production.

At time of writing, the databases contain only a health collection as referenced in the [Backend server and health check](#backend-server-and-health-check) section above.

The connection string for MongoDB Compass is `mongodb+srv://pensano-aura-db-user:<password>@cluster0.sylisri.mongodb.net/`, using the shared password.

## Seeding the database collections

The database collections can be seeded with using the `seedCafes.js` file in the `backend` directory.

`cd backend` to navigate to the backend directory.

`npm run seed:cafes:dev` will seed the `cafes` collection in the `aura_DEV` database.
`npm run seed:cafes:test` will seed the `cafes` collection in the `aura_TEST` database.
`npm run seed:cafes:production:ARE_YOU_SURE_YOU_SHOULD_BE_DOING_THIS` will seed the `cafes` collection in the `aura` production database.
**IMPORTANT: All current production data will be lost if the above command is run.**

## Testing

### Running Unit and Integration Tests in the Backend

`cd backend` to navigate to the backend directory.

**IMPORTANT: When running any test that involves the database, please use the** `aura_TEST` **database by starting the server by running** `npm run start:test` **rather than the normal** `npm start`**, to preserve the** `aura_DEV` **database data.**

To run ALL tests, run `npm test` in the `backend` directory. This will continuously run all backend tests until stopped with `Ctrl+C`.

To run specific tests, run `npx jest <test file regex match>` in the `backend` directory. For example, to run the `userController.test.js` file, you could run `npx jest use`. If that pattern matches multiple files, just be more specific, e.g. `npx jest userCon`.

To continuously run specific tests, run `npx jest --watch <test file regex match>`, e.g. `npx jest --watch userCon`.

**NOTE:** Any tests running `App.js` tests will have a delay before ending due to the open database pool connection. This is expected behaviour.

## Links to documentation from the Athena Hackathon Team
This app was a prize winner at the Athena Hackathon 2023 for the team comprising of Elsa Nafar, Juliana Nocchi, Tian Pan, Natasha Buckham and Sidra Iqbal. Here are some links to documentation the team produced during the hackathon:

[Original Aura repo](https://github.com/natashabuckham/athena-hackathon-2023-aura-app)

[Canva presentation](https://www.canva.com/design/DAFnaNSUH6c/3HwneJ2_axm4dUbXObnFIQ/view?utm_content=DAFnaNSUH6c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1)

[Figma designs](https://www.figma.com/file/YgPoK1QzFK9QRcrTwP2g2u/ambiance-t?type=design&node-id=0-1&mode=design&t=szCVSY9dUuXVDvqJ-0)

## Useful links for React Native development

[React Native documentation](https://reactnative.dev/docs/getting-started)

[React Native Docs - Navigating between screens](https://reactnative.dev/docs/navigation) - This is what I (Pablo) used as reference when setting up the screens stack in App.js.

[React Nagigation - Getting Started](https://reactnavigation.org/docs/getting-started/) - This is what I didn't but probably should have used as reference when setting up the screens stack in App.js.

## Developer Notes (Information and Learning Sharing)

### Using Location

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


