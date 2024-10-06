const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    work: { type: String },
    mobile: { type: String },
    email: { type: String },
    address: { type: String },
    salary: { type: Number },
    type: { type: String, required: true } // Add this line if it's missing
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
