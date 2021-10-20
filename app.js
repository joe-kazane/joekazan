const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const Car = require('./models/car');
const Brand = require('./models/brand');
const Category = require('./models/category');
const Rental = require('./models/rental');

const errorController = require('./controllers/error');
const brandroutes = require('./routes/brand');
const carroutes = require('./routes/car');
const rentalroutes = require('./routes/rental');
const categoryroutes = require('./routes/category');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));




 app.use('/category', categoryroutes);
 app.use('/rental', rentalroutes);
 app.use('/brand', brandroutes);
 app.use(carroutes);

app.use(errorController.get404);


Car.belongsTo(Brand,{constraints: true,onDelete: 'CASCADE'});
Brand.hasMany(Car);
Car.belongsTo(Category,{constraints: true,onDelete: 'CASCADE'});
Category.hasMany(Car);
Rental.belongsTo(Car,{constraints: true,onDelete: 'CASCADE'});
Car.hasMany(Rental)

sequelize
//.sync({force: true })
.sync()
.then(result => {
    app.listen(3000);
})
.catch(err =>{
    console.log(err);
})