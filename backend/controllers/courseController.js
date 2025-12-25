const db = require("../db");

exports.addCourse = (req, res) => {
  const { course_name, course_code, course_duration } = req.body;

  db.query(
    "INSERT INTO courses (course_name, course_code, course_duration) VALUES (?,?,?)",
    [course_name, course_code, course_duration],
    (err) => {
      if (err) return res.status(400).json(err);
      res.json({ message: "Course added" });
    }
  );
};

exports.getCourses = (req, res) => {
  db.query("SELECT * FROM courses", (err, result) => {
    res.json(result);
  });
};
