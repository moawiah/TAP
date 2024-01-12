// index.js
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
