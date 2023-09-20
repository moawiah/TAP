# API Structure

There is not one solution that fits all kinds of APIs. However, we are interested here in Backend API development. This page shows main parts that should be present within a general backend API.

> You can adapt the following to your projects.

```lua
BE-api/
|-- src/
|   |-- controllers/
|   |   |-- userController.js
|   |   |-- postController.js
|   |-- models/
|   |   |-- userModel.js
|   |   |-- postModel.js
|   |-- routes/
|   |   |-- userRoutes.js
|   |   |-- postRoutes.js
|   |-- middlewares/
|   |   |-- authMiddleware.js
|   |-- config/
|   |   |-- config.js
|   |-- utils/
|   |   |-- validation.js
|-- tests/
|   |-- userController.test.js
|   |-- postController.test.js
|-- node_modules/
|-- package.json
|-- package-lock.json
|-- .env
|-- .gitignore
|-- server.js
|-- README.md
|-- .eslintrc.json
|-- .prettierrc.json
|-- .dockerignore
|-- Dockerfile
|-- .travis.yml

```

## Structure Breakdown

* src/: This directory contains the source code of your API.
    * `controllers/`: Controllers handle the logic for different API endpoints.
    * `models/`: Models define the data structures and interact with your database.
    * `routes/`: Route definitions that map URLs to controllers.
    * `middlewares/`: Custom middleware functions (e.g., authentication).
    * `config/`: Configuration files for your application.
    * `utils/`: Utility functions that can be reused throughout the application.

* `tests/`: Unit and integration tests for your API endpoints and components.

* `node_modules/`: Node.js dependencies installed via npm or yarn.

* `package.json` and package-lock.json: Dependency and script definitions for your project.

* `.env`: Environment variables for configuring your application. Make sure to include this file in your .gitignore.

* `.gitignore`: A list of files and directories that should be ignored by version control.

* `server.js`: The main entry point for your API.

* `README.md`: Documentation for your project, including setup instructions and usage examples.

* `.eslintrc.json` and `.prettierrc.json`: Configuration files for code linting and formatting.

* `.dockerignore` and `Dockerfile`: If you plan to containerize your application using Docker, these files are used for Docker image building.

* `.travis.yml`: Configuration for continuous integration with Travis CI or a similar service.