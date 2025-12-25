const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM students WHERE email=?", [email], async (err, result) => {
    if (result.length === 0)
      return res.status(401).json({ message: "User not found" });

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.student_id, role: user.role },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({ token, role: user.role });
  });
};
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzY2Njk0NzM4LCJleHAiOjE3NjY3ODExMzh9.xWgmlcznWUeAi4cEBGiwCy5GUmX044_cc5qaH777HR4