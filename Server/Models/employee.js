const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	age: Number,
	experience: Number,
});

// Create and export the model
const Employee = mongoose.model('Employee', userSchema, 'Employee Collection');

module.exports = Employee;
