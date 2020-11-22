//  importing express framework
const express = require('express');

// To separate the routes from our main index.js file, we will use Express.Router.
const router = express.Router();

// importing the TODO Schema from models
const TODO = require('../models/todo')

// importing homeController from controller to serve the purpose of incoming request made by user
const homeController = require('../controllers/home_controller');


//  Fetching all the TODO list stored in the database and rendering them to Home.ejs file
router.get('/', function(req, res){
    TODO.find({}, function(err, todo){
        if (err){
            console.log('error in feteching contacts from db');
            return
        }
        return res.render('Home', {
            todo: todo
        });
    })
});

// to create new TODO require mentioned routes files
router.use('/create', require('./home_routes'));

// to delete existing TODO require mentioned routes files
router.use('/delete', require('./home_routes'));

// exports router so that it can publicly available 
module.exports = router;