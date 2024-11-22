const mongoose = require("mongoose");

// Define the schema for the course model
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
  },
  courseLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(http|https):\/\/[^\s$.?#].[^\s]*$/.test(v); // Basic URL validation
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the course model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
