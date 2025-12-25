const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  updateStudentCourse
} = require("../controllers/studentController");
const { getMyProfile } = require("../controllers/studentController");


const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken(["admin"]), addStudent);
router.get("/", verifyToken(["admin"]), getStudents);
router.put("/:id", verifyToken(["admin"]), updateStudent);
router.delete("/:id", verifyToken(["admin"]), deleteStudent);
router.get("/me", verifyToken(["student", "admin"]), getMyProfile);
router.put("/:id", verifyToken(["admin"]), updateStudentCourse);

module.exports = router;
