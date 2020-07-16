https://do-did-done.netlify.app/

## Do Did Done

Do Did Done allows a user to create an account and select several categories to manage their tasks. 

Do Did Done is made with a React frontend and a Rails API backend. 
The React frontend features Material UI components, React router, Redux and local state management, functional components and React hooks and a thoughtful design for improved UI and UX. 
The frontend consumes the Rails API with full CRUD functionality. 
The Rails API backend is hosted on Heroku and features a PostgreSQL database. 
It handles sessions, cookies, CRUD functionality, separation of concerns and follows the MVC structure.

### Routes

https://do-did-done.herokuapp.com/api/v1/auth_check - Get request to custom route in Sessions controller to set the CSRF-Token every time App.js component mounts, storing in state, and able to send back with every request.

https://do-did-done.herokuapp.com/api/v1/current_user -  Get request to custom route in Users controller to keep a signed-in user logged in, even on page refresh.

https://do-did-done.herokuapp.com/api/v1/signup -  POST request to Users controller create action to save a new user to the database.

https://do-did-done.herokuapp.com/api/v1/login - POST request to Sessions controller create action to set a session ID for an existing user.

https://do-did-done.herokuapp.com/api/v1/logout - DELETE request to the Sessions controller destroy action, deleting the signed-in user's session, logging them out.

https://do-did-done.herokuapp.com/api/v1/user_lists/${id} - GET request to custom route in Lists controller to fetch only a specific user's array of lists.

https://do-did-done.herokuapp.com/api/v1/lists - POST request to Lists controller create action to add a new list object to the database.

https://do-did-done.herokuapp.com/api/v1/lists/${id} - DELETE request to Lists controller destroy action to delete a specific list from the database.

https://do-did-done.herokuapp.com/api/v1/user_todos/${id} - GET request to custom route in Todos controller to fetch only a specific user's array of todos.

https://do-did-done.herokuapp.com/api/v1/todos - POST request to Todos controller create action to add a new todo object to the database.

https://do-did-done.herokuapp.com/api/v1/todos/${todo.todoId} - PATCH request to Todos controller update action to change a todo's "complete" status to true or false.

https://do-did-done.herokuapp.com/api/v1/todos/${id} - DELETE request to Todos controller destroy action to delte a specific todo from the database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Rails

https://github.com/jamesncox/do-did-done-api

Do Did Done Rails API features a custom rake task, to clean up guest users with a single rake command.

https://github.com/jamesncox/do-did-done-api/blob/master/lib/tasks/delete_guest_users.rake

Just run "rake delete_guest_users" and all the frontend randomly generated guest users, lists and todos will be deleted from the database.