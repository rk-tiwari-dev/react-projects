// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./Models/employee'); // Import the Employee model

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri =
	'mongodb+srv://rkgithub01:radhejidev%40123@cluster13824.2zarh.mongodb.net/employee?retryWrites=true&w=majority'; // Update with your actual URI
mongoose
	.connect(uri)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log('MongoDB connection error:', err));

// API endpoint to get employees
app.get('/api/employees', async (req, res) => {
	try {
		const employees = await Employee.find();
		res.json(employees);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
