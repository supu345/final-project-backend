const { decodeToken } = require("../helpers/tokenHelper");

module.exports = (req, res, next) => {
  let token = req.headers["token"];
  if (!token) {
    token = req.cookies["token"];
  }

  let decoded = decodeToken(token);
  if (decoded === null) {
    res.status(401).json({ status: "fail", message: "Unauthorized" });
  } else {
    req.headers.email = decoded.email;
    req.headers.userID = decoded.userID;
    next();
  }
};
