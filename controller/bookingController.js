const Booking = require('../models/booking.model');

exports.getAllbookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getbookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (booking) {
            res.json(booking);
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createbooking = async (req, res) => {
    const booking = new Booking({
        guestName: req.body.guestName,
        numberOfroom: req.body.numberOfroom,
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,

    });

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatebooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (booking) {
            booking.guestName = req.body.guestName || booking.guestName;
            booking.numberOfroom = req.body.numberOfroom || booking.numberOfroom;
            booking.checkInDate = req.body.checkInDate || booking.checkInDate;
            booking.checkOutDate = req.body.checkOutDate || booking.checkOutDate;

            const updatedBooking = await booking.save();
            res.json(updatedBooking);
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletebooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (booking) {
            await booking.deleteOne();
            res.json({ message: 'Booking deleted' });
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};