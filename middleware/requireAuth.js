const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let bearerToken = req.headers['authorization']?.split(' ')[1];
  console.log(bearerToken)
  if(!bearerToken){
    return res.redirect('/')
  }

  const { userId } = jwt.verify(bearerToken, process.env.JWT_SECRET)
  res.userId = userId;
  // console.log(userId)
  next();
}