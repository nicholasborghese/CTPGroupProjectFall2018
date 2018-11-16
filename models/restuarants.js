module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('restaurants', {
    Name: DataTypes.STRING,
    Address: DataTypes.TEXT,
    Type: DataTypes.STRING,
    Atmosphere: DataTypes.STRING
  });

  Restaurants.associate = (models) => {
    // associations can be defined here
    models.Restaurants.hasMany(models.Reviews);
  }

  return Posts;
};
