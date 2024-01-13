// models/Comment.js
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    Comment.associate = (models) => {
      Comment.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Comment.belongsTo(models.Post, { foreignKey: 'postId', onDelete: 'CASCADE' });
    };
  
    return Comment;
  };
  