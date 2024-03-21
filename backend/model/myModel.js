// Assuming you have mongoose already installed and required in your project
const mongoose = require('mongoose');

// Define the schema for the user model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
