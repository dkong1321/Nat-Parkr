'use strict';

const { ValidatorsImpl } = require("express-validator/src/chain");
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(30),
      allowNull:false,
      validation:{
        len:[4,30],
        isNotEmail(value){
          if(Validators.isEmail(value)){
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING.BINARY,
      allowNull:false,
      validate: {
        len: [3, 256]
      }
    },
    hashedPassword:{
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60,60]
      }
    },
  },
  {
    defaultScope: {
      attributes :{
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword']}
        },
        loginUser: {
          attributes: {}
        }
      }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  // remember, this cannot be an arrow function
  User.prototype.toSafeObject = function (){
    const {id, username, email} = this; // context will be the User instance
    return {id, username, email};
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString())
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id)
  };

  // accent credntial and pw search for a user with the same credential and pw
  // if they find user we validatepw and return the user
  User.login = async function ({credential, password}) {
    // access the operators from sequelize
    const {Op} = require('sequelize')
    const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
    });
    if (user && user.validatePassword(password)){
      return await User.scope('currentUser').findByPk(user.id);
    }
  }

  //
  User.signup = async function ({username, email, password}){
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword
    });
    // returning the new user after we made it from the db?
    return await User.scope('currentUser').findByPk(user.id)
  };

  return User;
};
