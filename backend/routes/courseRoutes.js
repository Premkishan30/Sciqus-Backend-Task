const express = require("express");
const router = express.Router();

const { addCourse, getCourses } = require("../controllers/courseController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken(["admin"]), addCourse);
router.get("/", getCourses);

module.exports = router;
