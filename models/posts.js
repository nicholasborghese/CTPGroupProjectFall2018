module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    post: DataTypes.TEXT,
    author: DataTypes.STRING
  });

  Posts.associate = (models) => {
    // associations can be defined here
  }

  return Posts;
};
