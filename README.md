# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

This project requires you start a mock server first, then start the frontend.

### Step 1: Start mock server

Open a tab in your terminal.

```
cd sad-crud-demo/item-mock-API
npm install
npm start
```

Then you can access [http://localhost:3100/items/](http://localhost:3100/items/) to see the API response to verify the API is running.

### Step 2: Start react app

Keep your mock API running in port 3100.
Open another tab in your terminal.

```
cd sad-crud-demo/
npm install
npm start
```

Then the frontend app will be ran in the development mode.
Please open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
