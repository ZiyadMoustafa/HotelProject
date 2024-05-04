const Hotel = require('../models/hotel.model');


exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel) {
            res.json(hotel);
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createHotel = async (req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
    });

    try {
        const newHotel = await hotel.save();
        res.status(201).json(newHotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel) {
            hotel.name = req.body.name || hotel.name;
            hotel.description = req.body.description || hotel.description;


            const updatedHotel = await hotel.save();
            res.json(updatedHotel);
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel) {
            await hotel.deleteOne();
            res.json({ message: 'Hotel deleted' });
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// // ///////////////////////////////////
// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");


// const storage = multer.diskStorage({
//             destination: "../images",
//             filename: (req, file, redirect) => {

//                 let date = Date.now();

//                 let f1
//             }


// const uploud = multer({ storage });


// // api upload
// router.post("/", uploud.single("image"), (req, res) => {
//     res.status(200).json({ message: "image uploaded" });
// })



// module.exports = router;