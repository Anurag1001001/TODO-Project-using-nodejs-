//  importing express framework
const express = require('express');

// To separate the routes from our main index.js file, we will use Express.Router.
const router =  express.Router();

// importing homeController from controller to serve the purpose of incoming request made by user
const homeController = require('../controllers/home_controller');

// to create new TODO call homeController.create function
router.post('/todo', homeController.create);

// to delete existing TODO call homeController.delete function
router.get('/todo',homeController.delete);

// exports router so that it can publicly available 
module.exports = router;