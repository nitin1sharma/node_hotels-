const mongoose = require('mongoose')

// Load environment variables from .env file
require('dotenv').config(); 
// const mongoURL = 'mongodb+srv://helloworldhotels:Nitin123q@cluster0.eforh.mongodb.net/'
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL,{
   //useNewUrlParser: true,
    //useUnifiedTopology: true
})

console.log('MongoDB URL:', mongoURL);

const db = mongoose.connection

db.on('connected',()=>{
    console.log("Connected to MongoBD server")
})

db.on('error',(err)=>{
    console.log("Error")
})

db.on('disconnected',()=>{
    console.log("disconnected")
})

module.exports = db