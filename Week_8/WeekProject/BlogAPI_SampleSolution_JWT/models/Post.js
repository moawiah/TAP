// models/Post.js
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    Post.belongsToMany(models.Category, { through: 'PostCategory' });
    Post.hasMany(models.Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
  };

  return Post;
};
