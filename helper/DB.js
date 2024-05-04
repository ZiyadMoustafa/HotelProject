const mongoose = require('mongoose');

const db = () => {

    mongoose.connect("mongodb+srv://ziyadmoo:zimo159753@cluster0.82hvfib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",)
        .then(() => console.log('DB now is connected'))
        .catch((err) => { console.error('Could not connect to MongoDB', err); });
};

module.exports = { db };

//mongodb://0.0.0.0:27017/