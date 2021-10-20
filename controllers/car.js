const { addListener } = require('nodemon');
const Brand = require('../models/brand');
const Car = require('../models/car');
const Category = require('../models/category');
exports.home = (req,res,next)=>{
    Brand.findAll()
    .then(brands =>{
        Category.findAll()
        .then(cats=>{
            Car.findAll().then(c =>{
                res.render('car/car',{pageTitle:'car',brands:brands,cats:cats,car:c,edit:false});
            })
            
        })
    })
    .catch(err =>console.log(err))
   
}    
exports.Add = (req,res,next) =>{
    const title = req.body.title;
    const desc = req.body.desc;
    let nor = req.body.nor;
    const image = req.body.image;
    const brand = req.body.brand;
    const cat = req.body.category;
    if(nor==null){
        nor=0;
    }
    Brand.findByPk(brand)
    .then(b =>{
        console.log(cat);
        
        if(b){
        b.createCar({
            title:title,
            description:desc,
            numbrOfRental: nor,
            image:image,
            BrandName: brand,
             CategoryName:cat
         })
        .then(()=>{
            res.redirect('/');
        })
    }
    })
   
    .catch(err=>console.log(err))
}
exports.getlist = (req,res,next)=>{
    Brand.findAll()
    .then( brands =>{
        res.render('car/list',{pageTitle:'List',brands:brands});
    }).catch(err => console.log(err))
   
}
exports.postlist = (req,res,next) =>{
    const brand = req.body.brand;
    Brand.findByPk(brand)
    .then(b =>{
        b.getCars()
        .then(cars =>{
             res.render('car/listres',{pageTitle:'list',car:cars})
        })
        .catch()
    })
    .catch()
}
exports.delete = (req,res,next) =>{
    const title= req.params.title;
    Car.findByPk(title)
    .then(car =>{
        car.destroy()
        .then(()=>{
            res.redirect('/');
        });
    })
    .catch(err => console.log(err))
}
exports.getupdate = (req,res,next) =>{
    const title = req.params.title;
    const edit = req.query.edit;
    console.log(title);
    Car.findByPk(title)
        .then(c =>{
            if(!c){res.redirect('/category')}
            else{
                 Brand.findAll()
            .then(brands =>{
                Category.findAll()
                .then(cats=>{
                    Car.findAll().then(ca =>{
                        res.render('car/car',{pageTitle:'Edit Car',car: ca, ca:c ,edit:true ,cats:cats,brands:brands});
                    })
                    
                })
            })
        }
        })
        .catch(err=>console.log(err));
    }
    exports.postupdate = (req,res,next) =>{
        const id = req.params.title;
        const title = req.body.title;
        const desc = req.body.desc;
        let nor = req.body.nor;
        const image = req.body.image;
        const brand = req.body.brand;
        const cat = req.body.category;
        
      Car.findByPk(id)
      .then(c => {
          
        c.title = title;
        c.description = desc;
        c.numbrOfRental = nor;
        c.image = image;
        c.BrandName = brand;
        c.CategoryName = cat;
          return c.save();
      })
      .then(result =>{
        
        res.redirect('/');
      })
      .catch(err =>console.log(err));
    }