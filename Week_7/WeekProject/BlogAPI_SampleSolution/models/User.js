// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    });
  
    User.associate = (models) => {
      User.hasMany(models.Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
    };
  
    return User;
  };
  