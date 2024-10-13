const express = require('express');
const app = express();

require('dotenv').config();

const db = require('./db'); // Make sure your db connection is set up correctly


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.get('/', function(req, res){
    res.send('Welcome to our Hotel')
})



// Import the router files
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu', menuItemRoutes)


// Start the server
app.listen(PORT, () => {
    console.log("Listening on port 3001");
});     