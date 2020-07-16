https://do-did-done.netlify.app/

## Do Did Done

Do Did Done allows a user to create an account and select several categories to manage their tasks. 
Do Did Done is made with a React frontend and a Rails API backend. 
The React frontend features Material UI components, React router, Redux and local state management, functional components and React hooks and a thoughtful design for improved UI and UX. 
The frontend consumes the Rails API with full CRUD functionality. 
The Rails API backend is hosted on Heroku and features a PostgreSQL database. 
It handles sessions, cookies, CRUD functionality, separation of concerns and MVC structure.

### Routes

'https://do-did-done.herokuapp.com/api/v1/auth_check' - Get request to custom route in Sessions controller to set the CSRF-Token every time App.js component mounts, storing in state, and able to send back with every request.

'https://do-did-done.herokuapp.com/api/v1/current_user' -  Get request to custom route in Users controller to keep a signed-in user logged in, even on page refresh.

'https://do-did-done.herokuapp.com/api/v1/signup' -  Post request to Users controller create action to save a new user to the database.

'https://do-did-done.herokuapp.com/api/v1/login' - Post request to Sessions controller create action to set a session ID for an existing user.

'https://do-did-done.herokuapp.com/api/v1/logout' - DELETE request to the Sessions controller destroy action, deleting the signed-in user's session, logging them out.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
