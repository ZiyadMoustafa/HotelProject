const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "this email is exist"]
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);

