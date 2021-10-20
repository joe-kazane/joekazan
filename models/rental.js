const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Rental = sequelize.define('Rental',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
userFirstName:{
    type: Sequelize.INTEGER,
        allowNull: false,
        
},
userLastName:{
    type: Sequelize.INTEGER,
        allowNull: false,
},
userMobileNumber:{
    type: Sequelize.INTEGER,
        allowNull: false,
},
startDate:{
    type: Sequelize.DATE,
        allowNull: false,
},
endDate:{
    type: Sequelize.DATE,
        allowNull: false,
}
});
module.exports = Rental;