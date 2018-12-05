'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('restaurants', {
    Name: DataTypes.STRING,
    Address: DataTypes.TEXT,
    Type: DataTypes.STRING,
    Atmosphere: DataTypes.STRING
  });

  Restaurants.associate = (models) => {
    // associations can be defined here
    Restaurants.hasMany(models.reviews);
  }

  return Restaurants;
};
