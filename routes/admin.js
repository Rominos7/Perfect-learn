const express = require('express');
const adminController = require('../controler/adminController');
const router = express.Router();

router.get('/courses',adminController.getCourses)
router.get('/courses/:id',adminController.getCoursesDeleteID)
router.get('/add-course',adminController.AddCourseGet)
router.post('/add-course',adminController.AddCoursePost)

module.exports = router;