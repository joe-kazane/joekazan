const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Car = sequelize.define('Car',{
    title:{
      type:  Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    numberOfRentals: Sequelize.INTEGER,
    image:{
        type: Sequelize.STRING,
        allowNull:true,
    }
});
module.exports = Car;