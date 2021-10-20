const Brand = require('../models/brand');
exports.home = (req,res,next)=>{
    Brand.findAll().then(brands =>{
        res.render('brand/brand',{pageTitle:'brand',
        brands:brands});
    }).catch(err => console.log(err));
   
}
exports.getAdd = (req,res,next)=>{
   const edit=false;
    res.render('brand/addbrand',{pageTitle:'Add Brand',edit:edit});
}
exports.postAdd = (req,res,next)=>{
    const name = req.body.name;
    const desc = req.body.desc;
    const snc = req.body.snc;
     Brand.create({
     name: name,
    description:desc,
    showNbCars:snc
    }).then(result =>{
        res.redirect('/brand');
    }).catch(err => console.log(err));
    
}
exports.details = (req,res,next) =>{
const name = req.params.name;
Brand.findByPk(name)
.then(brands =>{

    res.render('brand/details',{pageTitle:'details',brand:brands});
}).catch(err=>console.log(err));
}
exports.delete = (req,res,next) =>{
const name = req.params.name;
console.log(name);
Brand.findByPk(name)
.then(brand =>{
    
    brand.destroy().then(()=>{
        res.redirect('/brand');
    });
    
    
})
.catch(err=>console.log(err))

}
exports.getupdate = (req,res,next) =>{
const name = req.params.name;
const edit = req.query.edit;
Brand.findByPk(name)
    .then(b =>{
        if(!b){res.redirect('/')}else{
        res.render('brand/addbrand',{pageTitle:'Edit Brand',brand: b ,edit:true});}
    })
    .catch(err=>console.log(err));
}
exports.postupdate = (req,res,next) =>{
    const x = req.params.name;
    const newname = req.body.name;
    const desc = req.body.desc;
    const snc= req.body.snc;
    
  Brand.findByPk(x)
  .then(b => {
      b.name = newname;
      b.description= desc;
      b.showNbCars = snc;
      return b.save();
  })
  .then(result =>{
    
    res.redirect('/brand');
  })
  .catch(err =>console.log(err));
 
}
exports.list =(req,res,next) =>{
    let arr = [];
    let i =0;
    Brand.findAll()
    
    .then(brands =>{
        brands.sort((a,b)=>{
            if(a.createdAt>b.createdAt){
                return -1;
            }else{
                return 1;
            }
        })
         brands.forEach(brand => {
        brand.countCars().then(x =>{    
         arr[i]= x;
         i++;
      });
    });
    return arr;
    }).then(() =>{
        Brand.findAll()
    .then(brands =>{
        brands.sort((a,b)=>{
            if(a.createdAt>b.createdAt){
                return -1;
            }else{
                return 1;
            }
        })
      res.render('brand/list',{pageTitle:'list of brands',brands:brands,arr:arr,i:0});
      })
    })
    
    .catch(err=>console.log(err))
        
    
}