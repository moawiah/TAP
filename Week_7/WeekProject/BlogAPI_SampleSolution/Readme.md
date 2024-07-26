**Blogging System with Sequelize**

**General Description:**
This project is a backend RESTful API for a blogging system that utilizes Sequelize as the ORM to connect to a MySQL database. The schema includes complex associations, such as post categories and comments. Users can create posts, categorize them, and leave comments. The API provides endpoints for managing users, posts, categories, and comments. The project must be implemented in TypeScript.

**Technologies Covered and Prerequisites:**
**Technologies:**

- Node.js
- Express.js
- TypeScript
- Sequelize (with MySQL database)

**Prerequisites:**

Node.js installed on your machine
MySQL database created with necessary configurations
Basic understanding of TypeScript, JavaScript, and Node.js

**Suggested API Structure:**

/api/users
POST: Create a new user
GET: Get all users
GET /:userId: Get user by ID
PUT /:userId: Update user by ID
DELETE /:userId: Delete user by ID

/api/posts

POST: Create a new post
GET: Get all posts with associated users, categories, and comments
GET /:postId: Get post by ID with associated users, categories, and comments
PUT /:postId: Update post by ID
DELETE /:postId: Delete post by ID
POST /:postId/categories: Create a new category for a post
GET /:postId/categories: Get categories for a specific post
POST /:postId/comments: Create a new comment for a post
GET /:postId/comments: Get comments for a specific post


General Instructions:
- Set Up the Project: Create needed files and directories
- Database Configuration: Create a MySQL database and update the config.ts file with the appropriate database configuration.
- Define Needed Models: Create a clear DB schema using an ER Diagram as a mandatory prerequisite.
- Create API Routes
- Create and Implement index.ts
- Run Your Project: node index.ts

**Suggested Relationships:**

**User-Post Relationship:**
- Each User can have multiple Posts.
- Each Post belongs to one User.

Post-Category Relationship:
- Each Post can belong to multiple Categories.
- Each Category can be associated with multiple Posts.

Post-Comment Relationship:
- Each Post can have multiple Comments.
- Each Comment belongs to one Post.
- Each Comment is associated with one User.

Comment-User Relationship:
- Each Comment is associated with one User.
- Each User can have multiple Comments.

**BONUS SECTION:**
**Unit Tests:**

Implement higher coverage for unit tests in this project. Aim for 8-15 unit tests.

**Standardized Testing Scenarios:**
User Registration and Login
CRUD operations for Posts
CRUD operations for Comments
Adding and Retrieving Categories
Error handling for invalid inputs and requests

**GitHub Workflows:**

**Baseline Check:** A quick workflow to check that the baseline is not broken when creating a PR (pull request). This means for each new feature, you need to create a PR. Each commit for this PR should trigger this workflow. Choose 1-3 basic tests to run in this workflow only.
**Nightly:** Another workflow triggered based on a cron job once every 24 hours to run all unit tests and ensure all new merged PRs are OK.
Deployment:

**Docker:** Dockerize your application by writing the necessary Dockerfile and docker-compose.yml files.
Deployment: Deploy your app using the docker implementation. You can skip Docker if you prefer and deploy your app directly.


**Test Case 1: Create a New User**
Scenario: Successfully create a new user.

Input:

`{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}`

Expected Output:
Status code: 201 (Created)
Response body:
`
{
  "id": 1,
  "username": "testuser",
  "email": "testuser@example.com",
  "createdAt": "2024-07-26T12:00:00.000Z",
  "updatedAt": "2024-07-26T12:00:00.000Z"
}
`


**Test Case 2: Get All Users**
Scenario: Retrieve a list of all users.

Input: None
Expected Output:
Status code: 200 (OK)
Response body:
`
[
  {
    "id": 1,
    "username": "testuser",
    "email": "testuser@example.com",
    "createdAt": "2024-07-26T12:00:00.000Z",
    "updatedAt": "2024-07-26T12:00:00.000Z"
  }
]`


**Test Case 3: Create a New Post**
Scenario: Successfully create a new post for an existing user.

Input:
`
{
  "userId": 1,
  "title": "My First Post",
  "content": "This is the content of my first post."
}

`

Expected Output:
Status code: 201 (Created)
Response body:
`
{
  "id": 1,
  "userId": 1,
  "title": "My First Post",
  "content": "This is the content of my first post.",
  "createdAt": "2024-07-26T12:00:00.000Z",
  "updatedAt": "2024-07-26T12:00:00.000Z"
}`


**Test Case 4: Get All Posts**
Scenario: Retrieve a list of all posts with associated user details.

Input: None
Expected Output:
Status code: 200 (OK)
Response body:
`
[
  {
    "id": 1,
    "title": "My First Post",
    "content": "This is the content of my first post.",
    "createdAt": "2024-07-26T12:00:00.000Z",
    "updatedAt": "2024-07-26T12:00:00.000Z",
    "user": {
      "id": 1,
      "username": "testuser",
      "email": "testuser@example.com"
    }
  }
]`

Test Case 5: Update a Post
Scenario: Successfully update an existing post.

Input:
`
{
  "title": "Updated Post Title",
  "content": "This is the updated content of the post."
}
`
Expected Output:
Status code: 200 (OK)
Response body:
`
{
  "id": 1,
  "userId": 1,
  "title": "Updated Post Title",
  "content": "This is the updated content of the post.",
  "createdAt": "2024-07-26T12:00:00.000Z",
  "updatedAt": "2024-07-26T12:05:00.000Z"
}
`

Test Case 6: Error Handling - Create Post with Non-Existent User
Scenario: Attempt to create a post for a non-existent user.

Input:
`
{
  "userId": 99,
  "title": "Invalid Post",
  "content": "This user does not exist."
}
`
Expected Output:
Status code: 400 (Bad Request)
Response body:
`
{
  "error": "User not found"
}`
