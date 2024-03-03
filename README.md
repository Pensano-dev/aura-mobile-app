# Aura

Blah blah blah... placeholder for introductory text.

## Contents

- [Aura](#aura)
  - [Contents](#contents)
  - [Notes on development in React Native](#notes-on-development-in-react-native)
  - [Setup](#setup)
  - [Starting the app](#starting-the-app)
    - [Starting the frontend and backend from the root directory](#starting-the-frontend-and-backend-from-the-root-directory)
    - [Starting the frontend from the frontend directory](#starting-the-frontend-from-the-frontend-directory)
    - [Starting the backend from the backend directory](#starting-the-backend-from-the-backend-directory)
  - [Setting up your React Native (frontend) development environment](#setting-up-your-react-native-frontend-development-environment)
  - [Backend server and health check](#backend-server-and-health-check)
  - [Database](#database)
  - [Seeding the database collections](#seeding-the-database-collections)
  - [Testing](#testing)
    - [Running Unit and Integration Tests in the Backend](#running-unit-and-integration-tests-in-the-backend)
  - [Resource Links](#resource-links)
  - [Shared Learning](#shared-learning)

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

## Starting the app

### Starting the frontend and backend from the root directory

`npm run server` will start the backend server on localhost:8080. This will connect to the database on MongoDB Atlas (once it is set up).

`npm start` will start the frontend in development mode. This will open a browser window with a QR code. You can scan this with your phone to open the app in the Expo Go app, or you can follow the terminal instructions to open the app in a simulator.
`npm run ios` will open the a QR code for iOS devices and open the app in an iOS simulator.
`npm run android` will open the a QR code for Android devices and open the app in an Android simulator.

### Starting the frontend from the frontend directory

`npm start` will start the frontend in development mode. This will open a browser window with a QR code. You can scan this with your phone to open the app in the Expo Go app, or you can follow the terminal instructions to open the app in a simulator.
`npm run ios` will open the a QR code for iOS devices and open the app in an iOS simulator.
`npm run android` will open the a QR code for Android devices and open the app in an Android simulator.

### Starting the backend from the backend directory

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

## Resource Links

Resource links for the project, including the Athena Hackathon Team's documentation and useful links for React Native development can be found in the [project documentation `Resource and Learning` md file](./project%20documentation/resources_and_learning.md#links-to-documentation-from-the-athena-hackathon-team).

## Shared Learning

All shared learning from the project can be found in the [project documentation `Resource and Learning` md file](./project%20documentation/resources_and_learning.md#shared-learning).