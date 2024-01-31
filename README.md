# Aura

Blah blah blah... placeholder for introductory text.

## Setup

Clone the app and run `npm install` in both the `frontend` and `backend` directories. 
* Depending on your local setup , you may need to run `npm i -D nodemon` in the backend. It is in devDependencies in the package.json file, but people seem to have had issues with this in the past.
* See the [Setting up your React Native (frontend) development environment](#setting-up-your-react-native-frontend-development-environment) section below for more information on setting up your React Native development environment.
* You will need to create a `.env` file in the `backend` directory with the following variables:
  `MONGODB_PW=tbc`

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

To view the app in iOS using a simulator or on an iphone you will need to install Xcode (and the Expo Go app for iPhone). Please see the [Xcode](./documentation/xcode.md) page for more information.

To view the app in Android using a simulator or on an Android phone you will need to install Android Studio (and the Expo Go app for Android). Please see the [Android Studio](./documentation/android_studio.md) page for more information.

## Backend server and health check

For debugging purposes, there is a `health` endpoint on the backend server.

`http://localhost:8080/api/v1.0/health/server` should return a JSON object with the message `All is good with the server but I can't speak for the database.` which confirms that the server is running.

`http://localhost:8080/api/v1.0/health/db` should return a JSON object with the status `all good` which confirms that the server is running and that the database connection is good.

A POST request to `http://localhost:8080/api/v1.0/health/db` with a `status` property in the body will add that entry to the database and return `{"message":"Health entry added successfully!"}`.

## Links to documentation from the Athena Hackathon Team
This app was a prize winner at the Athena Hackathon 2023 for the team comprising of Elsa Nafar, Juliana Nocchi, Tian Pan, Natasha Buckham and Sidra Iqbal. Here are some links to documentation the team produced during the hackathon:

[Original Aura repo](https://github.com/natashabuckham/athena-hackathon-2023-aura-app)

[Canva presentation](https://www.canva.com/design/DAFnaNSUH6c/3HwneJ2_axm4dUbXObnFIQ/view?utm_content=DAFnaNSUH6c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1)

[Figma designs](https://www.figma.com/file/YgPoK1QzFK9QRcrTwP2g2u/ambiance-t?type=design&node-id=0-1&mode=design&t=szCVSY9dUuXVDvqJ-0)
