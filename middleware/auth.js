module.exports = function auth(req, res, next) {
  if (req.header("x-access-token")) {
    //Logic to verify token is valid
    next();
  } else {
    res.send(401, "Unauthorized");
  }
};
