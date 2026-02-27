# Mini-pro-04
 This project is a swipe-style professor rating application built with React. The main idea is similar to a Tinder swipe interface where users can swipe on professor cards to indicate whether they like or dislike them. The app uses components, React state, and side-effects to manage and display swipeable data.

## The live version of the app is deployed at:

graceful-dusk-05f473.netlify.app


## What the App Does

Displays a list of professors or professor cards.

Users can click heart, X or star to remove or like.

Ratings are recorded in the application’s state.

When all professors have been swiped, the app shows results or ends the session.




## This app was built using:

React — for building UI components.

Functional Components — all React components are written as functions.

React Hooks:

useState — to manage component-level state (e.g., current professor, like/dislike state).

useEffect — to handle side effects such as initializing data and responding to changes.

CSS / styling to give the swipe cards and layout a clean look.

The core logic for swiping and data handling is implemented through these hooks and component composition.

Project Structure

## A simplified structure of the project:

profswipe/

├── public/

│   └── professors.json

├── src/

│   ├── components/

│   │   ├── Navbar.jsx

│   │   ├── Header.jsx

│   │   ├── FilterBar.jsx

│   │   ├── SwipeStack.jsx

│   │   ├── ProfCard.jsx

│   │   ├── SavedDrawer.jsx

│   │   ├── ReviewedList.jsx

│   │   ├── Loader.jsx

│   │   └── Footer.jsx

│   ├── App.jsx

│   ├── main.jsx

│   └── index.css

├── index.html

├── vite.config.js   ← Tailwind v4 uses vite plugin (no postcss.config needed)

└── package.json

## How to Run Locally


git clone https://github.com/MHardware28/Mini-pro-04.git

Navigate into the project folder (e.g., profswipe if that’s your React app folder).

Install dependencies:

npm install

Start the development server:

npm start
Features


Tracks and updates state based on user actions.

Simple user interface built using reusable React components.

Uses React hooks for dynamic behavior and side effects.



## Contributors

This project was built by:
Rich-Ann Campbell
MacKayla Hardware
Sara-Lee Brown













