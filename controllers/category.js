const Category = require('../models/category');
exports.home = (req,res,next)=>{
    Category.findAll().then(categorys =>{
        res.render('category/category',{pageTitle:'Category',
        categorys:categorys});
    }).catch(err => console.log(err));
   
}
exports.getAdd = (req,res,next)=>{
    res.render('category/addcategory',{pageTitle:'Add Category',edit:false});
}

exports.postAdd = (req,res,next)=>{
    const name = req.body.name;
    const desc = req.body.desc;
    Category.create({
    name: name,
    description:desc
    }).then(result =>{
        res.redirect('/category');
    }).catch(err => console.log(err));
    
}
exports.details = (req,res,next) =>{
    const name = req.params.name;
    Category.findByPk(name)
    .then(cats =>{
    
        res.render('category/details',{pageTitle:'details',cats:cats});
    }).catch(err=>console.log(err));
    }
exports.delete = (req,res,next) =>{
    const name = req.params.name;
    console.log(name);
    Category.findByPk(name)
    .then(Category =>{
        
        Category.destroy().then(()=>{
            res.redirect('/Category');
        });
        
        
    })
    .catch(err=>console.log(err))
    
    }
    exports.getupdate = (req,res,next) =>{
    const name = req.params.name;
    const edit = req.query.edit;
    Category.findByPk(name)
        .then(c =>{
            if(!c){res.redirect('/')}else{
            res.render('Category/addcategory',{pageTitle:'Edit Category',category: c ,edit:true});}
        })
        .catch(err=>console.log(err));
    }
    exports.postupdate = (req,res,next) =>{
        const id = req.params.name;
        const newname = req.body.name;
        const desc = req.body.desc;
        
      Category.findByPk(id)
      .then(c => {
         
          c.name = newname;
          c.description= desc;
          return c.save();
      })
      .then(result =>{
        
        res.redirect('/category');
      })
      .catch(err =>console.log(err));
    }