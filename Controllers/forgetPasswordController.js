require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../Models/userModel');

const forgetPassword = async function (req, res) {
  try {
    const email = req.body.email;
    if (!email)
        throw new Error('Email is required')
    
    const user = await User.findOne({ email });
    if (!user) 
      throw new Error('User is not found')
      // Generate secret
    const secret = process.env.SECRET_KEY + user.password
    const token = jwt.sign({ email: user.email, id: user.id }, secret, {expiresIn: '30m'})
    const link = `http://127.0.0.1:${process.env.PORT||5000}/resetpassword/${user.id}/${token}`
    console.log(link) //REMOVE THIS LINE ON PRODUCTION
    user.sendEmail(user.email, 'Reset Password / Mentor Project', `<h1>Password reset request</h1><h3>You requested a password reset for your account.</h3><b>Click <a href="${link}">here</a> to reset your password.</b><br><br><p>please ignore if you didn't sent us this request</p>`)
    res.status(200).send("The password reset link has been sent to your email")
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = forgetPassword;
