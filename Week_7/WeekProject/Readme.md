# Blogging System with Sequelize

## General Description:
This project is a backend RESTful API for a blogging system that utilizes Sequelize as the ORM to connect to a MySQL database. The schema is enhanced to include more complex associations, such as post categories and comments. Users can create posts, categorize them, and leave comments. The API provides endpoints for managing users, posts, categories, and comments.

## Technologies Covered and Prerequisites:

### Technologies:
- Node.js
- Express.js
- Sequelize (with MySQL database)
### Prerequisites:
- Node.js installed on your machine
- MySQL database created with necessary configurations
- Basic understanding of JavaScript and Node.js

## Suggested API Structure
### /api/users

- POST: Create a new user
- GET: Get all users
- GET /:userId: Get user by ID
- PUT /:userId: Update user by ID
- DELETE /:userId: Delete user by ID

### /api/posts

- POST: Create a new post
- GET: Get all posts with associated users, categories, and comments
- GET /:postId: Get post by ID with associated users, categories, and comments
- PUT /:postId: Update post by ID
- DELETE /:postId: Delete post by ID
- POST /:postId/categories: Create a new category for a post
- GET /:postId/categories: Get categories for a specific post
- POST /:postId/comments: Create a new comment for a post
- GET /:postId/comments: Get comments for a specific post

## General Instructions
- Set Up the Project: Create needed files and directories
- Database Configuration: Create a MySQL database and update the `config.js` file with the appropriate database configuration.
- Define needed models.
- Create API routes.
- Create and implement `index.js`.
- run your project: `node index.js`

## Suggested Relationships
### User-Post Relationship:

- Each User can have multiple Posts.
- Each Post belongs to one User.
### Post-Category Relationship:

- Each Post can belong to multiple Categories.
- Each Category can be associated with multiple Posts.
### Post-Comment Relationship:

- Each Post can have multiple Comments.
- Each Comment belongs to one Post.
- Each Comment is associated with one User.
### Comment-User Relationship:

- Each Comment is associated with one User.
- Each User can have multiple Comments.