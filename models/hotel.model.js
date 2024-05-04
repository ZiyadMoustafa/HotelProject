const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hotelImage: {
        type: String,
        default: 'https://res.cloudinary.com/dbbzndvyn/image/upload/v1714410587/jnl7ecfycqewxu67pzra.jpg'
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);