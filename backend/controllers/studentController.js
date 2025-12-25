const db = require("../db");
const bcrypt = require("bcrypt");

exports.addStudent = async (req, res) => {
  const { name, email, password, course_id } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  db.query("SELECT * FROM courses WHERE course_id=?", [course_id], (err, result) => {
    if (result.length === 0)
      return res.status(400).json({ message: "Course not found" });

    db.query(
      "INSERT INTO students (name,email,password,course_id) VALUES (?,?,?,?)",
      [name, email, hashed, course_id],
      () => res.json({ message: "Student registered" })
    );
  });
};

exports.getStudents = (req, res) => {
  db.query(
    `SELECT s.student_id,s.name,s.email,c.course_name,c.course_code
     FROM students s
     LEFT JOIN courses c ON s.course_id=c.course_id`,
    (err, result) => res.json(result)
  );
};

exports.updateStudent = (req, res) => {
  const { course_id } = req.body;
  db.query(
    "UPDATE students SET course_id=? WHERE student_id=?",
    [course_id, req.params.id],
    () => res.json({ message: "Updated" })
  );
};

exports.deleteStudent = (req, res) => {
  db.query(
    "DELETE FROM students WHERE student_id=?",
    [req.params.id],
    () => res.json({ message: "Deleted" })
  );
};

exports.getMyProfile = (req, res) => {
  const studentId = req.user.id;

  const query = `
    SELECT s.student_id, s.name, s.email,
           c.course_name, c.course_code, c.course_duration
    FROM students s
    LEFT JOIN courses c ON s.course_id = c.course_id
    WHERE s.student_id = ?
  `;

  require("../db").query(query, [studentId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

exports.updateStudentCourse = (req, res) => {
  const { course_id } = req.body;
  const studentId = req.params.id;

  // Validate course exists
  db.query(
    "SELECT * FROM courses WHERE course_id = ?",
    [course_id],
    (err, course) => {
      if (course.length === 0) {
        return res.status(400).json({ message: "Course not found" });
      }

      db.query(
        "UPDATE students SET course_id = ? WHERE student_id = ?",
        [course_id, studentId],
        () => res.json({ message: "Student course updated" })
      );
    }
  );
};

