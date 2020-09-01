const express = require('express');
const leaernController = require('../controler/learnController');
const router = express.Router();

router.get('/index',leaernController.getHome);
router.get('/about',leaernController.getAbout);
router.get('/contact',leaernController.getContact);
router.get('/courses',leaernController.getCourses);
router.get('/courses/:id',leaernController.getCoursesId);

module.exports = router;