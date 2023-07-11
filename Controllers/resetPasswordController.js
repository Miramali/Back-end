require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../Models/userModel')

async function resetPassword(req, res){
  try{
    const {id, token} = req.params
    const password = req.body.password
    if(!password)
      throw new Error('New password required')

    if(!mongoose.Types.ObjectId.isValid(id))
      throw new Error('Invalid ID...')

    const user = await User.findById(id)
    if (!user) 
      throw new Error('Invalid ID... user not found')

    const secret = process.env.SECRET_KEY + user.password
    jwt.verify(token, secret)
    // find user with email and id from the already signed at forgetPassword controller
    user.password = password
    await user.save()
    res.send('password updated successfully')
  }catch(e){ 
    res.status(404).send(e.message);
  }
}

module.exports = resetPassword
