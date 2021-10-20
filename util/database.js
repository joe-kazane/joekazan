const Sequelize = require('sequelize');
const sequelize = new Sequelize('car-rental-system','root','joe10452',
{dialect: 'mysql', 
host: 'localhost'});

module.exports = sequelize;