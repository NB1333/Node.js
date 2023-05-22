# User API Documentation
The User API is a RESTful web server that allows users to perform CRUD (Create, Read, Update, Delete) operations on a user entity. The API is built using Node.js, Express, and TypeScript. The user data is stored locally in memory and can be persisted to the file system.

## API Endpoints
Create User
- Endpoint: POST /users
- Description: Creates a new user with the provided username and optional name.
- Request Body:
    - `username` (required): The username of the user.
    - `name` (optional): The name of the user.
- Response:
    - Status Code: 201 Created
    - Body: JSON object representing the created user, including the generated id.
Get User Data by ID
- Endpoint: GET /users/:id
- Description: Retrieves the user data for the specified user ID.
- Request Parameter:
    - id: The ID of the user to retrieve.
- Response:
    - Status Code: 200 OK
    - Body: JSON object representing the user data, including the id, username, and name fields.

List Users
- Endpoint: GET /users
- Description: Retrieves the list of all users.
- Response:
    - Status Code: 200 OK
    - Body: JSON array representing the list of users, each containing the id, username, and name fields.

Update User Data by ID
- Endpoint: PUT /users/:id
- Description: Updates the user data for the specified user ID.
- Request Parameter:
    - id: The ID of the user to update.
- Request Body:
    - username (optional): The updated username of the user.
    - name (optional): The updated name of the user.
- Response:
    - Status Code: 200 OK
    - Body: JSON object representing the updated user data, including the id, username, and name fields.

Delete User by ID
- Endpoint: DELETE /users/:id
- Description: Deletes the user with the specified user ID.
- Request Parameter:
    - id: The ID of the user to delete.
- Response:
    - Status Code: 200 OK
    - Body: JSON object representing the deleted user data, including the id, username, and name fields.

## Implementation Details
The User API is implemented using Node.js and the Express web framework. The code is written in TypeScript for static typing and enhanced developer experience. The user data is stored in memory as an array of user objects. Upon server startup, the user data is loaded from a users.json file if it exists, or an empty array is initialized. When changes are made to the user data, such as creating, updating, or deleting users, the changes are saved to the users.json file to persist the data between server restarts.

## Dependencies

The following dependencies are required to run the User API:

- express: Fast, unopinionated web framework for Node.js.
- body-parser: Middleware for parsing request bodies.
- fs: Node.js file system module for reading and writing to the file system.
- typescript: TypeScript compiler and language tools.

## Running the Server
To run the User API server, follow these steps:

1. Ensure that Node.js and npm (Node Package Manager) are installed on your machine.
2. Install the project dependencies by running npm install in the project directory.
3. Start the server by running npm start. The server will be accessible at http://localhost:3000.

## Conclusion
The User API provides a simple and RESTful interface for managing user entities. It supports all the basic CRUD operations, allowing clients to create, retrieve, update, and delete user data. The API is implemented using Node.js, Express, and TypeScript, and the user data can be stored locally in memory or persisted to the file system. By following the provided API documentation, developers can integrate and utilize the User API to manage user-related operations in their applications.