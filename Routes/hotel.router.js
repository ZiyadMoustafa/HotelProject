const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController');
const multer = require('../helper/multer')

router.get('/', hotelController.getAllHotels);
router.get('/:id', hotelController.getHotelById);
router.post('/', multer.uploadPhoto, multer.resizePhotoProject, hotelController.createHotel);
router.post('/', hotelController.createHotel);
router.put('/:id', hotelController.updateHotel);
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;
