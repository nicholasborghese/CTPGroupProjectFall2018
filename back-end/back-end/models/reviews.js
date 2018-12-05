'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reviews = sequelize.define('reviews', {
    Rating: DataTypes.FLOAT
  });

  Reviews.associate = (models) => {
    // associations can be defined here
    Reviews.belongsTo(models.restaurants);
    Reviews.belongsTo(models.users);
  }

  return Reviews;
};
