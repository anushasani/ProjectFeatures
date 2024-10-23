# ProjectFeatures

Project Overview
This project is a simple Restaurant Search page that displays a list of restaurants. When a user clicks on a restaurant, a bottom sheet slides up from the bottom of the page to display the restaurant's menu, allowing users to explore dishes without leaving the current page. The feature is implemented using React.js for the frontend and Node.js with Express for the backend. The application also uses CSS for styling and animations.

This implementation showcases how you can create an interactive, seamless user experience, utilizing modern web development practices like React Hooks, RESTful API integration, and custom animations from scratch.

Features
Frontend (React.js)
Restaurant Cards: Each restaurant is displayed as a card, showing essential details like the name, rating, and cuisine type.
Bottom Sheet for Menu: Upon clicking a restaurant, a bottom sheet slides up from the bottom, revealing the menu of the selected restaurant without redirecting to another page.
API Integration: API calls are made to fetch the list of restaurants and the specific menu of a selected restaurant.
State Management: React Hooks (useState, useEffect) are used for handling state.
Responsive Design: The UI is responsive, ensuring an optimal user experience across different devices.
Backend (Node.js with Express)
CRUD Operations: Provides RESTful API endpoints to manage restaurants and their menus.
GET /restaurants: Retrieve the list of restaurants.
GET /restaurants/
: Retrieve the menu of a specific restaurant.
Data Management: Restaurants and their menus are stored in-memory (or MongoDB, depending on your choice).
CORS: The backend uses CORS middleware to enable communication between the React frontend and the Express backend.

1. Project Setup
   Frontend Setup:

Use Create React App or Vite to bootstrap the React frontend.
Install necessary dependencies:
bash
Copy code
npx create-react-app frontend
cd frontend
npm install
Backend Setup:

Initialize a Node.js project and install Express:
bash
Copy code
mkdir backend
cd backend
npm init -y
npm install express cors

Running the Project
Start the Backend Server: Navigate to the backend folder and start the Node.js server:

bash
Copy code
cd backend
node index.js
Start the React Frontend: Navigate to the frontend folder and run the React app:

bash
Copy code
cd frontend
npm start
Access the App: Open your browser and visit http://localhost:3000 to interact with the restaurant search page.

Key Technologies
Frontend: React.js, Hooks, Fetch API, CSS
Backend: Node.js, Express, CORS middleware
State Management: React Hooks (useState, useEffect)
API Communication: Fetch API
