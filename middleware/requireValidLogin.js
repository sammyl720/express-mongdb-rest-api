const { emailRegex, passwordRegex} = require('../utils/regexs')
module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if(!emailRegex.test(email)){
    return res.status(403).json({
      message: `'${email}' is not a valid email`,
      status: 'failure'
    })
  }
  if(!passwordRegex.test(password)){
    return res.status(403).json({
      message: `Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character`,
      status: 'failure'
    })
  }

  next()
}