# Exercise Description: JWT Authentication System

## Set Up the Project:

- Initialize a new Node.js project and install the jsonwebtoken library.
- Create an Express.js application with the following routes:
    - /login: This route should accept a POST request with a JSON payload containing a username and password. If the provided credentials match a predefined user, the server should respond with a JWT token. If not, it should return an authentication error.

## Token Generation:

- Implement a function to generate a JWT token when a user successfully logs in.
- The JWT token should include a user ID and an expiration time (e.g., 1 hour).

## Token Verification Middleware:

- Create a middleware function that verifies the JWT token for protected routes.
- If the token is valid, the middleware should extract the user's information from the token and attach it to the request object.
- If the token is invalid or missing, the middleware should return an authentication error.

## Protected Route:

- Create a protected route (e.g., /dashboard) that requires a valid JWT token for access.
- Only users with a valid token should be able to access this route.
- Display a message indicating successful access to the dashboard.