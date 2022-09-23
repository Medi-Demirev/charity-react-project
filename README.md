# Getting Started with Create React App

# About the Project

This is a defense project for the ReactJS course at SoftUni.

To start the project:

Open the server folder in integrated terminal and type node server.js

Open the client folder in integrated terminal and type :

npm i - command installs a package and any packages that it depends on.

npm start- To start the react project in localhost:3000.

For backend i'm using https://github.com/softuni-practice-server/softuni-practice-server

For the needs of the project, new collections have been added to the finished server. 
The server is hosted at the following address:https://api-kindness.herokuapp.com/. 
If you want to use it locally, the base URL must be changed from https://api-kindness.herokuapp.com/ to http://localhost:3000/.

Kindness is an app that aims to create Charitable causes and events to help people in need.Provides an opportunity to register two types of users with different rights => NGO and Personal account. 
The registered NGO user has the right to create, edit and delete causes and events on the platform. He also has the right to make donations to foreign causes and events. The only limitation of this type of user is that he is not allowed to create a volunteer request.

Users registered with a Personal Account do not have the right to create causes and events, but they have the right to donate to all active causes and causes. They have no right to change or delete content created by users with an NGO account. Otherwise, they have the right to apply for volunteers by filling in the form in the relevant section.

Both types of accounts have a profile page after logging into the platform, where there is information about their account and the ability to load their wallet with funds to be able to donate to active causes and events.

# Host
The front-end application is hosted at the following address: https://kindness-a9fed.web.app

The back-end server is hosted at the following address: https://api-kindness.herokuapp.com

# Libraries
The following libraries are used in the applications:

  "dependencies": {
    "@material-design-icons/font": "^0.12.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.2.0",
    "postcode-validator": "^3.7.0",
    "react": "^18.2.0",
    "react-css-modules": "^4.7.11",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-spinners-css": "^2.0.1",
    "react-toastify": "^9.0.8",
    "web-vitals": "^2.1.4"
  },

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Installing Dependencies
The current repository already includes a node_modules folder with everything necessary. To manually install all necessary dependencies run the following in the console in the main directory and in /src:

npm i

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
