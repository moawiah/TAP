# E-Commerce System for Backend

We will describe here instructions, requirements, and general steps you need to follow to establish your backend API.

## General Steps
- Check FrontEnd desing that the FE team is going to implement at: `<Insert the link here>`
- Read all FE requirements for the FE API part so you provide coherent and suitable endpints as you are expected to work closely with the FE team. `<Insert the link here>`
- Create a sheet (or any other organising component) that shows/maps each endpoint with its expected inputs and outputs. This documentation will serve as a contact point with FE team.

## Mandatory Requirements
There is a group of requiremens that you need to provide acheiving the MVP:

### 1. File Structure
We already covered some general file structure approached during the course - here is a more customized one, but be careful, you may need to drop/add files as you see fit.

```markdown
- /config
    - db.js              // Database configuration
    - jwt.js             // JWT configuration
- /controllers
    - authController.js // Authentication-related logic
    - productController.js // Product-related logic
- /middleware
    - authMiddleware.js  // Authentication middleware
- /models
    - user.js            // User model
    - product.js         // Product model
- /routes
    - authRoutes.js      // Authentication routes
    - productRoutes.js   // Product-related routes
- server.js             // Main entry point
- package.json

```

### 2. User Authentication (Sign Up/Sign In)
- Use JWT for token-based authentication.
- Store hashed passwords in the database.

### 3. Database Schema
- You need to desing a clear DB schema and discuss with your team and instructor afterwards. Main tables are expected to be there like Users, Products, Categories, and any more tables you see fit.
- Be prepared to support all needed use cases for the MVP and answer any schema questions with good and clear technical arguments.

### 4. Product Features
- According to the general project requirements and **FE Requirements**, there are some product features that need to be supported:
    - Categories, Brands, and other metadata for products.
    - Implement logic for discounts, ratings, new arrivals, and handpicked collections.

### 5. Simulated Payments
- Implement a dummy payment system for testing purposes (e.g., print a success message).
- One option:  Simulate success or failure based on your testing needs byt creating its own controller, for instance, create a `simulatePaymentProcessing` with a _specific success rate_ to simulate transactions.

### 6. Error Handling
- Implement a robust error-handling mechanism with appropriate status codes and error messages.

### 7. MVP Checklist
To acheive a working MVP, you need to have the following:
- User authentication and authorization.
- CRUD operations for products.
- Apply discounts, track ratings, and manage new arrivals and handpicked collections.

## Optional Requirements 
In case you managed to acheive all of the above, you may move forward training your skillset implementing the following items:
- _Unit Testing_: Implement unit tests for controllers, models, and middleware.
- _Logging_: Integrate logging to track errors, user activities, and system behavior.
- _File Uploads_: If applicable, implement file upload functionality (e.g., product images).
- _Security Measures_: Implement HTTPS, sanitize inputs, and validate user inputs to prevent common security vulnerabilities.

## Documentation
- Generate API documentation using tools like Swagger.

## Remarks
- You may implement some endpoints that FE team do not use - this is fine!
- You need to be clear in work contribution - Who worked on what items? (you can use endpoints to distribute work)
- You are expected to use a clear agile model tracking tasks and work being done - check github project board for that goal.