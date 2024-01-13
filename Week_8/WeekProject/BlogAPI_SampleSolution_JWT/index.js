// index.js
/*Notes:
We'll focus on protecting the /api/users/:userId endpoint as an example.
This modification introduces the use of JWT for protecting the /api/users/:userId endpoint.
The JWT is either extracted from the Authorization header or cookies.
The /api/posts routes in this example are not protected with JWT. You can extend this approach to protect other routes as needed.
Ensure that the client sends the JWT token with requests to protected routes. In this example, it can be sent either in the Authorization header or as a cookie named jwt. */
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config');
const userRoutes = require('./api/routes/users');
const postRoutes = require('./api/routes/posts');
const CategoryModel = require('./models/Category');
const CommentModel = require('./models/Comment');

const sequelize = new Sequelize(config.development);

const User = require('./models/User')(sequelize, DataTypes);
const Post = require('./models/Post')(sequelize, DataTypes);
const Category = CategoryModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Middleware to handle JWT authentication errors
app.use('/api', (req, res, next) => {
  // Extract the token from the Authorization header or cookies
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1] || req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    // Verify the token using the JWT secret
    jwt.verify(token, config.jwtSecret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
});


app.use('/api/users', userRoutes(User, Post));
app.use('/api/posts', postRoutes(Post, User, Category, Comment));

sequelize.sync({ force: true }).then(() => {
  console.log('Database and tables created!');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Error creating database and tables:', err);
});
