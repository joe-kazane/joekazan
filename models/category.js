const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Category = sequelize.define('Category',
{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
});
module.exports= Category;