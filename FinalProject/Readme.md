# E-Commerce System for Backend

We will describe here instructions, requirements, and general steps you need to follow to establish your backend API.

## General Steps
- Check FrontEnd design that the FE team is going to implement at: `<Insert the link here>`
- Read all FE requirements for the FE API part so you provide coherent and suitable endpints as you are expected to work closely with the FE team. `<Insert the link here>`
- Create a sheet (or any other organising component) that shows/maps each endpoint with its expected inputs and outputs. This documentation will serve as a contact point with FE team.

## Mandatory Requirements - Phase 1
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
- You need to provide **roles**, mainly two roles 1) Admin 2) User

### 3. Database Schema
- You need to design **a clear DB schema** and perform a design review DR with your team and instructor afterwards. Main tables are expected to be there like Users, Products, Categories, and any more tables you see fit.
- Be prepared to support all needed use cases for the MVP and answer any schema questions with good and clear technical arguments.

### 4. Product Features
- According to the general project requirements and **FE Requirements** (Do not forget to read FE requirements), there are some product features that need to be supported:
    - Categories, Brands, and other metadata for products.
    - Implement logic for discounts, ratings, new arrivals, and handpicked collections.

### 5. Simulated Payments
- Implement a dummy payment system for testing purposes (e.g., print a success message).
- One option:  Simulate success or failure based on your testing needs by creating its own controller, for instance, create a `simulatePaymentProcessing` with a _specific success rate_ to simulate transactions.
- Save transactions in DB for further historical data analysis.

### 6. Error Handling
- Implement a robust error-handling mechanism with appropriate status codes and error messages.

### 7. MVP Checklist
To acheive a working MVP, you need to have the following:
- User authentication and authorization.
- CRUD operations for products.
- Apply discounts, track ratings, and manage new arrivals and handpicked collections.
- Roles being implemented as follows
    - an Admin can have some statistics and data analysis feature
          - Most baught products ober a specific time window
          - Producs that are not being baught - list of items to drop from the site
          - Products per country/geographical region. What products are important for each country.
    - a normal user role can hit all records except statistical ones.

## Mandatory Requirements - Phase 2
In case you managed to acheive all of the above, you may move forward training your skillset implementing the following items:
- _Unit Testing_: Implement unit tests for controllers, models, and middleware.
    - P0: Critical tests covering essential functionalities like authentication and CRUD operations.
    - P1: Additional tests for edge cases, error handling, and optional features.
    - P0 tests should run per commit and P1 should run for the PRs on the master branch before deployment.
- _Logging_: Integrate logging to track errors, user activities, and system behavior.
    - Logger needs to have a specific format *<timestamp><file><function>*
- _File Uploads_: If applicable, implement file upload functionality (e.g., product images).
- _Security Measures_: Implement HTTPS, sanitize inputs, and validate user inputs to prevent common security vulnerabilities.

## Mandatory Requirements - Phase 3
- **Dockerization:** You need to dockerize the app by implementing needed files like **Dockerfile** and **docker_compose** ones. You then need to build and deploy the image.
- **Caching:** Implement caching strategies for frequently accessed data using Redis or a similar tool. Check more about cache expiration policties.
- **Load Testing:** Introduce tools like Apache JMeter or Locust to perform load testing on their APIs.
- **Monitoring:** Choose a monirotin tool of your choice (Grafana. Prometheus, etc) to track some API metrics like **(choose 2-3 metrics and implement them)**
    - Directly connect Grafana to your SQL database to run queries and visualize data.
    - Collect and store metrics from your application and infrastructure.
    - Track user activities such as logins, sign-ups, and purchases.
    - Visualize trends in user behavior over time.
    - Visualize metrics like query execution times, database load, and the number of active connections.
    - Monitor the performance of critical endpoints such as user authentication, product listing, and checkout.

## Documentation
- Generate API documentation using tools like Swagger.

## Remarks
- You may implement some endpoints that FE team do not use - this is fine!
- You need to be clear in work contribution - Who worked on what items? (you can use endpoints to distribute work)
- You are expected to use a clear agile model tracking tasks and work being done - check github project board for that goal.
