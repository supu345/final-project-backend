const jwt = require("jsonwebtoken");

exports.encodeToken = (email, userID) => {
  let secret = "abc123xyz@#";
  let expires = { expiresIn: "168 hrs" };
  let payload = { email: email, userID: userID };
  return jwt.sign(payload, secret, expires);
};

exports.decodeToken = (token) => {
  try {
    let secret = "abc123xyz@#";
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
};
