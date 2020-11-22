//  Importing todo models
const TODO = require('../models/todo')

//  function to create new TODO list
module.exports.create = function(req, res){
    TODO.create({
        Content: req.body.content,
        Category: req.body.category,
    }, function(err, newContact){
        if (err){
            console.log('error occured');
        }
        return res.redirect('back');
    });
}

// Function to delete existing TODO 
module.exports.delete = function(req, res){
    let id = req.query.id;
    TODO.findByIdAndDelete(id, function(err){
        if (err){
            console.log('Error in deleting Contact');
            return
        }
        return res.redirect('/');
    });
    
}