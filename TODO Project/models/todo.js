// importing mongoose file
const mongoose = require('mongoose');


// Creating TODO schema 
const todoSchema = new mongoose.Schema({
    // for TODO list Content
    Content:{
        type: String,
    },
    // this field defines category of work
    Category:{
        type: String,
    }
});

// creating model of todo Schema  
const TODO = mongoose.model('TODO', todoSchema);

// finally exporting TODO models
module.exports = TODO;