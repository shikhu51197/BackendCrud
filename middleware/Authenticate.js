const jwt = require("jsonwebtoken");

const Authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "mynoteapp", (err, decoded) => {
      if (decoded) {
        const userId = decoded.myapp;
        req.body.myapp = userId;
        next();
      } else {
        res.send("please login first");
      }
    });
  } else {
    res.send("please login first");
  }
};

module.exports = { Authenticate };
