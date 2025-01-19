const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://127.0.0.1:27017/signupDB'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create a User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create a User Model
const User = mongoose.model('User', userSchema);

// API Routes
// Save user to MongoDB
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
