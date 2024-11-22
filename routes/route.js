const express = require("express");
const { createCourse, getAllCourses } = require("../contrroller/course_controller");

const router = express.Router();

// POST route to create a course
router.post("/courses/add", createCourse);

// GET route to retrieve all courses
router.get("/courses/get", getAllCourses);

module.exports = router;