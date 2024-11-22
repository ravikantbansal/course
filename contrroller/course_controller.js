const Course = require("../model/course");

// Controller function to create a new course
const createCourse = async (req, res) => {
  const { courseName, duration, courseLink } = req.body;

  // Check if all required fields are provided
  if (!courseName || !duration || !courseLink) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a new course
    const newCourse = new Course({
      courseName,
      duration,
      courseLink,
    });

    // Save the course to the database
    await newCourse.save();

    // Send a response with the created course
    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Failed to create the course." });
  }
};

// Controller function to get all courses
const getAllCourses = async (req, res) => {
  try {
    // Retrieve all courses from the database
    const courses = await Course.find();

    // Send a response with the courses
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to retrieve courses." });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
};
