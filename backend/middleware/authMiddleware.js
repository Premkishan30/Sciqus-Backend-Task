const jwt = require("jsonwebtoken");

exports.verifyToken = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(403).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];

    jwt.verify(token, "secretkey", (err, user) => {
      if (err)
        return res.status(403).json({ message: "Invalid token" });

      if (roles.length && !roles.includes(user.role))
        return res.status(403).json({ message: "Forbidden" });

      req.user = user;
      next();
    });
  };
};
