const express  =  require('express');
const { dirname } = require('path');
const path = require('path');

//  On this port we're running our server 
const port  = 8000;

const app = express();

//  importing the database configuration file we'll print success message if we successfully connected to database 
const db = require('./config/mongoose.js');

// It's a built-in middleware and used to parse incoming request 
app.use(express.urlencoded());

// The express.static() function is a built-in middleware function in Express. It serves static files and is based on serve-static
app.use(express.static('assets'));

// The app.set() function is used to assigns the setting name to value. here i'm assigning view engine to ejs and below that specified the paths of views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// any request made by the client goes to this routes
app.use('/', require('./routes'));

//  listening to port

app.listen(port, (err) => {
    if(err){
        console.log('Ok we got some error while running a server');
        return
    }
    console.log('server is running flawlessly');
})