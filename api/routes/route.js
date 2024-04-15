const express=require("express");
const router=express.Router();
const multer= require('multer')
const {register }=require("../controllers/register.js")
const {login, logout}=require("../controllers/login.js")
const {profile}=require("../controllers/profile.js")
const {upload_link,upload_image}=require("../controllers/upload.js");
const { addPlace } = require("../controllers/addPlace.js");
const photosMiddleware=multer({dest:'uploads/'})
const {getPlaces}=require("../controllers/getPlaces.js");
const { getEachPlace } = require("../controllers/getEachPlace.js");
const { updatePlace } = require("../controllers/updatePlace.js");
const { homepagePlaces } = require("../controllers/homepagePlaces.js");
const { bookPlace } = require("../controllers/bookPlace.js");
const { getBooking } = require("../controllers/getBooking.js");
router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);
router.post('/upload-by-link',upload_link);
router.post('/places',addPlace)
router.post('/upload',photosMiddleware.array('photos',100),upload_image);
router.get('/profile',profile);
router.get('/user-places',getPlaces);
router.get('/places/:id',getEachPlace)
router.put('/places',updatePlace)
router.get('/places',homepagePlaces)
router.post('/bookings',bookPlace)
router.get('/bookings',getBooking)


module.exports=router;