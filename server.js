const express = require('express');
const app = express();
const db = require('./db'); // Make sure your db connection is set up correctly

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Welcome to the hotel');
});


// Import the router files
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu', menuItemRoutes)

// Start the server
app.listen(3001, () => {
    console.log("Listening on port 3001");
});     