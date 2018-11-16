module.exports = (sequelize, DataTypes) => {
  var Reviews = sequelize.define('restaurants', {
    Rating: DataTypes.FLOAT
  });

  Reviews.associate = (models) => {
    // associations can be defined here
    models.Reviews.belongsTo(models.Restaurants);
    models.Reviews.belongsTo(models.User);
  }

  return Posts;
};
