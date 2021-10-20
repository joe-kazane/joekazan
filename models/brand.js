const { seq } = require('async');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Brand = sequelize.define('Brand',
{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    showNbCars: Sequelize.BOOLEAN,
    });
    module.exports = Brand;