'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      
      validate: {
        notEmpty: true,
        isEmail: true,
        isUnique: (value, next) => {

          Users.find({
              where: {email: value},
              attributes: ['id']
          })
              .done(function(error, user) {

                  if (error)
                      // Some unexpected error occured with the find method.
                      return next(error);

                  if (user)
                      // We found a user with this email address.
                      // Pass the error to the next method.
                      return next('Email address already in use!');

                  // If we got this far, the email address hasn't been used yet.
                  // Call next with no arguments when validation is successful.
                  next();

              });
            }
      },
    
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {
    getterMethods: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  });

  Users.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPassword) => {
      user.password = hashedPassword;
    })
  );
  Users.associate = (models) => {
    Users.hasMany(models.reviews);
  }
  return Users;
};


