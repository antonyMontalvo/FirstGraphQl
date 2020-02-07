const jwt = require("jsonwebtoken"),
  token = "123456789";

const JWT = {};

JWT.createUserToken = user => {
  const payload = user;
  return jwt.sign(payload, token);
};

JWT.getPayload = bearerToken => {
  let token = bearerToken.split(" ")[1];
  return jwt.decode(token);
};

module.exports = JWT;
